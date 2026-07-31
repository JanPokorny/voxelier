// Self-check (`deno test`) for the coordinate math the editor's voxel placement
// relies on. It imports the real rotY/addv from src/math.ts (both pure, no
// three.js) and re-derives the world<->object-local transform here (the real
// locToW/localGroundCell pull in three.js + global state, so they can't be
// imported) to assert rotY is its own inverse under a negated rotation — the
// property those two functions are built on. If rotY's rotation or the inverse
// convention breaks, placement silently lands on the wrong cell — this fails loudly.
import { assert, assertEquals } from "@std/assert";
import * as THREE from "three";
import type {
  Box3,
  Node as NodeT,
  ObjectNode,
  Region,
  SceneNode,
  Vec,
} from "./src/types.ts";
import { addv, key, rotY } from "./src/math.ts";
import { addBox, buildIndex, eraseBox, fillBox } from "./src/boxes.ts";
import { cutCorner, cutJob } from "./src/cutplane.ts";
import { rigidRotateWorld } from "./src/shear.ts";
import { boxFaceGeo } from "./src/mesh.ts";
import { repackBoxes } from "./src/rebox.ts";
import { LoroDoc } from "loro-crdt";
import { build, docFromTree, reconcile, snapshot } from "./src/crdt/doc.ts";

const toW = (cell: Vec, off: Vec, rot: number): Vec =>
  addv(rotY(cell, rot), off); // local -> world (locToW)
const toLocal = (w: Vec, off: Vec, rot: number): Vec =>
  rotY({ x: w.x - off.x, y: 0, z: w.z - off.z }, -rot); // world -> local (inverse rotation)

// deterministic seeded PRNG + integer-range helper, so the random op streams
// below are reproducible across runs (each test seeds its own stream). Not a
// faithful LCG — the multiply exceeds 2^53 and rounds before the mask — but a
// stable, well-spread stream is all the fuzz tests need.
const mkRnd = (seed: number) => {
  let s = seed;
  const rnd = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  return (a: number, b: number) => a + Math.floor(rnd() * (b - a + 1));
};

// iterate every cell of a half-open box [x0,x1) × [y0,y1) × [z0,z1)
const eachCell = (
  b: Region,
  cb: (x: number, y: number, z: number) => void,
) => {
  for (let x = b.x0; x < b.x1; x++) {
    for (let y = b.y0; y < b.y1; y++) {
      for (let z = b.z0; z < b.z1; z++) cb(x, y, z);
    }
  }
};
// materialize a disjoint box set into a cell-key -> colour map, asserting that no
// two boxes cover the same cell (`what` names the set in the overlap message)
const materialize = (boxes: Box3[], what: string): Map<number, number> => {
  const m = new Map<number, number>();
  for (const b of boxes) {
    eachCell(b, (x, y, z) => {
      const k = key(x, y, z);
      assert(!m.has(k), `${what} overlap at ${x},${y},${z}`);
      m.set(k, b.c);
    });
  }
  return m;
};

Deno.test("voxel placement round-trip", () => {
  // independent oracle: rotY must produce these exact 90°-step rotations. The
  // round-trip below only proves rotY(·,-r) inverts rotY(·,r), which a wrong but
  // self-inverse rotation (e.g. a chirality flip) would also satisfy — so pin the
  // actual outputs of a known vector too.
  const rotCases: [number, Vec][] = [
    [0, { x: 1, y: 5, z: 2 }],
    [1, { x: -2, y: 5, z: 1 }],
    [2, { x: -1, y: 5, z: -2 }],
    [3, { x: 2, y: 5, z: -1 }],
  ];
  for (const [r, want] of rotCases) {
    const g = rotY({ x: 1, y: 5, z: 2 }, r);
    assert(
      g.x === want.x && g.y === want.y && g.z === want.z,
      `rotY({1,5,2}, ${r}) = ${JSON.stringify(g)} != ${JSON.stringify(want)}`,
    );
  }
  const offsets: Vec[] = [{ x: 0, y: 0, z: 0 }, { x: 5, y: 1, z: -3 }, {
    x: -7,
    y: 2,
    z: 9,
  }];
  const cells: Vec[] = [{ x: 0, y: 0, z: 0 }, { x: 3, y: 0, z: 4 }, {
    x: -2,
    y: 0,
    z: 6,
  }];
  for (const rot of [0, 1, 2, 3]) {
    for (const off of offsets) {
      for (const cell of cells) {
        const back = toLocal(toW(cell, off, rot), off, rot); // === so -0 matches 0
        assert(
          back.x === cell.x && back.z === cell.z,
          `round-trip failed at rot=${rot} off=${JSON.stringify(off)} cell=${
            JSON.stringify(cell)
          }`,
        );
      }
    }
  }
});

// The box model is the document representation: add/erase must keep the box set
// disjoint and exactly equal (occupancy + colour) to the cells they'd touch, and
// the grid index must agree with the reference voxel map. Brute-forced against a
// reference voxel map over a stream of random ops.
Deno.test("box algebra matches a voxel reference", () => {
  const N = 12;
  const ri = mkRnd(12345);
  const randRegion = (): Region => {
    const x0 = ri(0, N), y0 = ri(0, N), z0 = ri(0, N);
    return {
      x0,
      y0,
      z0,
      x1: ri(x0 + 1, N + 1),
      y1: ri(y0 + 1, N + 1),
      z1: ri(z0 + 1, N + 1),
    };
  };
  const ref = new Map<number, number>(); // cell key -> colour
  const fill = (r: Region, c: number | null) =>
    eachCell(r, (x, y, z) => {
      const k = key(x, y, z);
      if (c === null) ref.delete(k);
      else ref.set(k, c);
    });
  let boxes: Box3[] = [];
  for (let step = 0; step < 300; step++) {
    const r = randRegion(), c = ri(1, 5), op = ri(0, 1);
    if (op === 0) (boxes = addBox(boxes, r, c)), fill(r, c);
    else (boxes = eraseBox(boxes, r)), fill(r, null);
  }
  // disjoint + occupancy/colour identical to the reference
  const got = materialize(boxes, "boxes");
  assert(got.size === ref.size, `cell count ${got.size} != ${ref.size}`);
  for (const [k, v] of ref) {
    assert(got.get(k) === v, "colour/occupancy mismatch");
  }
  // the grid index agrees with the reference voxel map at every cell
  const has = buildIndex(boxes);
  const refHas = (x: number, y: number, z: number) => ref.has(key(x, y, z));
  for (let x = -1; x <= N + 1; x++) {
    for (let y = -1; y <= N + 1; y++) {
      for (let z = -1; z <= N + 1; z++) {
        assert(
          has(x, y, z) === refHas(x, y, z),
          "index disagrees with reference",
        );
      }
    }
  }
});

// fillBox (the paint-bucket tool) must recolour exactly the face-connected
// same-colour region of the seed cell and nothing else. Brute-forced against a
// cell-level flood-fill reference over random multi-colour box stacks.
Deno.test("fillBox matches a cell-level flood fill", () => {
  const N = 10;
  const ri = mkRnd(999);
  const NB = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [
    0,
    0,
    -1,
  ]];
  for (let trial = 0; trial < 40; trial++) {
    let boxes: Box3[] = [];
    for (let op = 0; op < 8; op++) {
      const x0 = ri(0, N), y0 = ri(0, N), z0 = ri(0, N);
      const r: Region = {
        x0,
        y0,
        z0,
        x1: ri(x0 + 1, N + 1),
        y1: ri(y0 + 1, N + 1),
        z1: ri(z0 + 1, N + 1),
      };
      boxes = addBox(boxes, r, ri(1, 3));
    }
    // cell -> colour map and the list of filled cells, both from the box set
    const ref = new Map<number, number>();
    const cells: Vec[] = [];
    for (const b of boxes) {
      eachCell(b, (x, y, z) => {
        ref.set(key(x, y, z), b.c);
        cells.push({ x, y, z });
      });
    }
    if (!cells.length) continue;
    const seed = cells[ri(0, cells.length - 1)], newC = ri(1, 4);
    const orig = ref.get(key(seed.x, seed.y, seed.z))!;
    // reference: cell-level BFS over same-colour face-neighbours
    const expected = new Map(ref);
    if (orig !== newC) {
      const seen = new Set<number>([key(seed.x, seed.y, seed.z)]);
      const st: Vec[] = [seed];
      while (st.length) {
        const p = st.pop()!;
        for (const [dx, dy, dz] of NB) {
          const nx = p.x + dx,
            ny = p.y + dy,
            nz = p.z + dz,
            nk = key(nx, ny, nz);
          if (!seen.has(nk) && ref.get(nk) === orig) {
            seen.add(nk);
            st.push({ x: nx, y: ny, z: nz });
          }
        }
      }
      for (const k of seen) expected.set(k, newC);
    }
    // actual: fillBox returns null when nothing changes (orig === newC); the
    // ?? falls back to the unchanged list for that no-op case
    const out = fillBox(boxes, seed.x, seed.y, seed.z, newC) ?? boxes;
    const got = materialize(out, "fillBox produced");
    assert(
      got.size === expected.size,
      `cell count ${got.size} != ${expected.size}`,
    );
    for (const [k, v] of expected) {
      assert(
        got.get(k) === v,
        `fill colour mismatch (got ${got.get(k)} != ${v})`,
      );
    }
  }
});

// Arbitrary-angle Y rotation (Alt fine-rotate) bakes voxels via three shears.
// Each shear shifts whole rows/columns by an integer, so the whole rotation is
// a bijection of the cell grid: it must keep the box set disjoint and preserve
// the exact voxel count at every 15° step, with no holes or doubled cells.
// Quarter-turns (90/180/270) must additionally reproduce the exact rotY pose.
Deno.test("shear rotation is a hole-free, count-preserving bijection", () => {
  const count = (bs: Box3[]) =>
    bs.reduce(
      (n, b) => n + (b.x1 - b.x0) * (b.y1 - b.y0) * (b.z1 - b.z0),
      0,
    );
  const shapes: Box3[][] = [
    [{ x0: 0, y0: 0, z0: 0, x1: 5, y1: 1, z1: 3, c: 1 }], // flat, mixed parity
    [{ x0: 0, y0: 0, z0: 0, x1: 4, y1: 4, z1: 4, c: 2 }], // cube
    [ // an L of two colours
      { x0: 0, y0: 0, z0: 0, x1: 7, y1: 2, z1: 1, c: 3 },
      { x0: 2, y0: 0, z0: 1, x1: 5, y1: 2, z1: 6, c: 4 },
    ],
    [{ x0: -3, y0: 0, z0: -2, x1: 2, y1: 3, z1: 4, c: 5 }], // negative coords
  ];
  // rotate about Y through the shape's (rounded) XZ centre, identity localise —
  // the rigid-rotation core as the editor drives it for a single object
  const rotY90 = (bs: Box3[], deg: number): Box3[] => {
    let mnx = Infinity, mnz = Infinity, mxx = -Infinity, mxz = -Infinity;
    for (const b of bs) {
      mnx = Math.min(mnx, b.x0);
      mnz = Math.min(mnz, b.z0);
      mxx = Math.max(mxx, b.x1 - 1);
      mxz = Math.max(mxz, b.z1 - 1);
    }
    return rigidRotateWorld(
      bs,
      deg,
      1,
      (mnx + mxx) / 2,
      (mnz + mxz) / 2,
      (x, y, z) => ({
        x,
        y,
        z,
      }),
    );
  };
  // normalised (translation-independent) cell+colour signature of a box set
  const sig = (bs: Box3[]): Set<string> => {
    let mnx = Infinity, mny = Infinity, mnz = Infinity;
    for (const b of bs) {
      mnx = Math.min(mnx, b.x0);
      mny = Math.min(mny, b.y0);
      mnz = Math.min(mnz, b.z0);
    }
    const s = new Set<string>();
    for (const b of bs) {
      eachCell(
        b,
        (x, y, z) => s.add(`${x - mnx},${y - mny},${z - mnz}:${b.c}`),
      );
    }
    return s;
  };
  for (const sh of shapes) {
    const base = count(sh);
    for (let deg = 0; deg < 360; deg += 15) {
      const r = rotY90(sh, deg);
      materialize(r, `shear ${deg}°`); // asserts disjoint
      assert(
        count(r) === base,
        `count drift at ${deg}° (${count(r)} != ${base})`,
      );
    }
    for (const q of [1, 2, 3]) { // quarter-turns == exact rotY
      const got = sig(rotY90(sh, q * 90));
      const exact: Box3[] = sh.map((b) => {
        const a = rotY({ x: b.x0, y: b.y0, z: b.z0 }, q);
        const d = rotY({ x: b.x1 - 1, y: b.y1 - 1, z: b.z1 - 1 }, q);
        return {
          x0: Math.min(a.x, d.x),
          y0: Math.min(a.y, d.y),
          z0: Math.min(a.z, d.z),
          x1: Math.max(a.x, d.x) + 1,
          y1: Math.max(a.y, d.y) + 1,
          z1: Math.max(a.z, d.z) + 1,
          c: b.c,
        };
      });
      const want = sig(exact);
      assert(got.size === want.size, `quarter ${q} size mismatch`);
      for (const k of want) assert(got.has(k), `quarter ${q} cell mismatch`);
    }
  }
});

// The greedy mesher (with its plane-bucketed cover lookup and rasterised AO
// fields) must emit, per face direction, exactly the area of the exposed cell
// faces — no more (doubled/overlapping quads) and no less (holes). Checked
// against a brute-force cell-occupancy reference over random add/erase streams,
// with AO both on (rim-banded quads) and off (one quad per exposed rectangle).
Deno.test("mesher area matches exposed cell faces", () => {
  const ri = mkRnd(777);
  const cols = new Map<number, THREE.Color>();
  const colorOf = (v: number): THREE.Color => {
    let c = cols.get(v);
    if (!c) cols.set(v, c = new THREE.Color().setHex(v));
    return c;
  };
  const DIRS: [number, number, number][] = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];
  for (let trial = 0; trial < 6; trial++) {
    const N = 14;
    let boxes: Box3[] = [];
    for (let i = 0; i < 30; i++) {
      const x0 = ri(0, N), y0 = ri(0, N), z0 = ri(0, N);
      const r: Region = {
        x0,
        y0,
        z0,
        x1: ri(x0 + 1, N + 1),
        y1: ri(y0 + 1, N + 1),
        z1: ri(z0 + 1, N + 1),
      };
      if (ri(0, 3) === 0) boxes = eraseBox(boxes, r);
      else boxes = addBox(boxes, r, ri(1, 5));
    }
    // reference: count exposed unit faces per direction from a cell occupancy set
    const occ = new Set<number>();
    for (const b of boxes) eachCell(b, (x, y, z) => occ.add(key(x, y, z)));
    const want = [0, 0, 0, 0, 0, 0];
    for (const b of boxes) {
      eachCell(b, (x, y, z) => {
        DIRS.forEach(([dx, dy, dz], d) => {
          if (!occ.has(key(x + dx, y + dy, z + dz))) want[d]++;
        });
      });
    }
    for (const ao of [true, false]) {
      const g = boxFaceGeo(boxes, colorOf, ao);
      const got = [0, 0, 0, 0, 0, 0];
      if (g) {
        const p = g.getAttribute("position"), n = g.getAttribute("normal");
        for (let t = 0; t < p.count; t += 3) { // triangle area via the cross product
          const ux = p.getX(t + 1) - p.getX(t),
            uy = p.getY(t + 1) - p.getY(t),
            uz = p.getZ(t + 1) - p.getZ(t);
          const vx = p.getX(t + 2) - p.getX(t),
            vy = p.getY(t + 2) - p.getY(t),
            vz = p.getZ(t + 2) - p.getZ(t);
          const area = 0.5 * Math.hypot(
            uy * vz - uz * vy,
            uz * vx - ux * vz,
            ux * vy - uy * vx,
          );
          const d = DIRS.findIndex(([dx, dy, dz]) =>
            n.getX(t) === dx && n.getY(t) === dy && n.getZ(t) === dz
          );
          assert(d >= 0, "triangle normal is not axis-aligned");
          got[d] += area;
        }
      }
      for (let d = 0; d < 6; d++) {
        assert(
          Math.abs(got[d] - want[d]) < 1e-6,
          `ao=${ao} dir=${d}: meshed area ${got[d]} != exposed faces ${
            want[d]
          }`,
        );
      }
    }
  }
});

// addBox's face-merge (absorb): re-adding the erased cell of a large box must
// heal it back into exactly one box, not leave the six carve fragments — and
// stacking exactly-abutting same-colour rows must coalesce instead of piling up.
Deno.test("addBox merges exactly-abutting same-colour boxes", () => {
  const big: Box3 = { x0: 0, y0: 0, z0: 0, x1: 10, y1: 8, z1: 6, c: 1 };
  const cell: Region = { x0: 4, y0: 3, z0: 2, x1: 5, y1: 4, z1: 3 };
  const carved = eraseBox([big], cell);
  assert(
    carved.length === 6,
    `expected 6 carve fragments, got ${carved.length}`,
  );
  const healed = addBox(carved, cell, 1);
  assert(healed.length === 1, `re-add left ${healed.length} boxes`);
  const h = healed[0];
  assert(
    h.x0 === big.x0 && h.y0 === big.y0 && h.z0 === big.z0 &&
      h.x1 === big.x1 && h.y1 === big.y1 && h.z1 === big.z1 && h.c === big.c,
    "healed box differs from the original",
  );
  // row-by-row build: 10 abutting same-colour rows coalesce into one slab
  let rows: Box3[] = [];
  for (let z = 0; z < 10; z++) {
    rows = addBox(rows, { x0: 0, y0: 0, z0: z, x1: 8, y1: 1, z1: z + 1 }, 2);
  }
  assert(rows.length === 1, `10 abutting rows left ${rows.length} boxes`);
  // a different colour must NOT merge
  const twoTone = addBox(
    [{ x0: 0, y0: 0, z0: 0, x1: 4, y1: 1, z1: 1, c: 1 }],
    { x0: 4, y0: 0, z0: 0, x1: 8, y1: 1, z1: 1 },
    2,
  );
  assert(twoTone.length === 2, "different colours must not merge");
});

// The background repacker must preserve occupancy + colour exactly and never
// return more boxes than the greedy baseline gives it room for. Fuzzed against
// random erase-fragmented stacks, plus a known heavy-fragmentation case.
Deno.test("repackBoxes preserves cells and reduces fragmentation", () => {
  const ri = mkRnd(31337);
  const N = 12;
  for (let trial = 0; trial < 6; trial++) {
    let boxes: Box3[] = [];
    for (let i = 0; i < 40; i++) {
      const x0 = ri(0, N), y0 = ri(0, N), z0 = ri(0, N);
      const r: Region = {
        x0,
        y0,
        z0,
        x1: ri(x0 + 1, N + 1),
        y1: ri(y0 + 1, N + 1),
        z1: ri(z0 + 1, N + 1),
      };
      if (ri(0, 3) === 0) boxes = eraseBox(boxes, r);
      else boxes = addBox(boxes, r, ri(1, 4));
    }
    if (!boxes.length) continue;
    const want = materialize(boxes, "pre-repack");
    const packed = repackBoxes(boxes);
    const got = materialize(packed, "repacked");
    assert(got.size === want.size, `cell count ${got.size} != ${want.size}`);
    for (const [k, v] of want) assert(got.get(k) === v, "cell/colour mismatch");
    assert(
      packed.length <= boxes.length,
      `repack grew the list (${boxes.length} -> ${packed.length})`,
    );
  }
  // known case: a slab fragmented by scattered erases + re-adds of a second
  // colour repacks to far fewer boxes than sequential subtraction leaves
  let wall: Box3[] = [{ x0: 0, y0: 0, z0: 0, x1: 40, y1: 20, z1: 2, c: 7 }];
  const rj = mkRnd(9);
  for (let i = 0; i < 60; i++) {
    const x = rj(0, 39), y = rj(0, 19), z = rj(0, 1);
    const cell = { x0: x, y0: y, z0: z, x1: x + 1, y1: y + 1, z1: z + 1 };
    wall = i % 2 ? addBox(wall, cell, 8) : eraseBox(wall, cell);
  }
  const packedWall = repackBoxes(wall);
  const before = materialize(wall, "wall"),
    after = materialize(packedWall, "packed wall");
  assert(after.size === before.size, "wall cell count changed");
  for (const [k, v] of before) assert(after.get(k) === v, "wall cell mismatch");
  assert(
    packedWall.length < wall.length,
    `expected a reduction, got ${wall.length} -> ${packedWall.length}`,
  );
  // volume independence: repack works boxes -> boxes on compressed planes, so a
  // world-sized solid (10^13 cells — hopeless to explode) heals instantly. Carve
  // one interior cell out of a huge box and hand repack the 6 fragments plus the
  // cell as a 7th box: it must reassemble exactly the original single box.
  const huge: Box3 = {
    x0: 0,
    y0: 0,
    z0: 0,
    x1: 100000,
    y1: 100000,
    z1: 1000,
    c: 3,
  };
  const hole: Region = {
    x0: 55555,
    y0: 44444,
    z0: 500,
    x1: 55556,
    y1: 44445,
    z1: 501,
  };
  const parts = eraseBox([huge], hole);
  parts.push({ ...hole, c: 3 });
  const whole = repackBoxes(parts);
  assert(whole.length === 1, `huge heal left ${whole.length} boxes`);
  const w = whole[0];
  assert(
    w.x0 === 0 && w.y0 === 0 && w.z0 === 0 &&
      w.x1 === 100000 && w.y1 === 100000 && w.z1 === 1000 && w.c === 3,
    "huge healed box differs from the original",
  );
});

// ---- half-visible cutaway cuts (cutplane.ts) ----
// A hollow 20x20 room of 2-thick walls (y 0..10) with a block inside, viewed
// down the +x+y+z diagonal. The volume-optimal cuts must clear the block from
// every kept wall point while keeping the far shell.
Deno.test("cutaway clears interior content, keeps the far shell", () => {
  const s3 = 1 / Math.sqrt(3);
  const k = { x: s3, y: s3, z: s3 }; // unit view axis, pointing at the camera
  const wall = (x0: number, z0: number, x1: number, z1: number): Box3 => ({
    x0,
    y0: 0,
    z0,
    x1,
    y1: 10,
    z1,
    c: 1,
  });
  const walls = [
    wall(0, 0, 20, 2),
    wall(0, 18, 20, 20),
    wall(0, 2, 2, 18),
    wall(18, 2, 20, 18),
  ];
  const block: Box3[] = [{ x0: 8, y0: 0, z0: 8, x1: 12, y1: 4, z1: 12, c: 2 }];
  const c = cutCorner(walls, block, [k], 1, 1, 1);
  // a lone block demands only a partial cut (here a single x-cut keeps the
  // most volume — the walls-on-a-floor test below is what forces whole walls
  // out); it must land past the block but before the near-x wall
  assert(c.x >= 12 && c.x < 18, `cut must clear the block, got ${c.x}`);
  assert(c.y === Infinity, `no walls-down cut needed, got ${c.y}`);
  // brute force the promise: no kept wall point may lie strictly in front of
  // any block point along the view axis
  const kept = (x: number, y: number, z: number) =>
    x <= c.x && y <= c.y && z <= c.z &&
    walls.some((w) =>
      x > w.x0 && x < w.x1 && y > w.y0 && y < w.y1 && z > w.z0 && z < w.z1
    );
  for (let sx = 8; sx <= 12; sx += 0.5) {
    for (let sy = 0; sy <= 4; sy += 0.5) {
      for (let sz = 8; sz <= 12; sz += 0.5) {
        for (let t = 0.25; t < 40; t += 0.25) {
          assert(
            !kept(sx + t * k.x, sy + t * k.y, sz + t * k.z),
            `kept wall covers block at ${sx},${sy},${sz} t=${t}`,
          );
        }
      }
    }
  }
});
Deno.test("cutaway: no cut when the group fronts nothing", () => {
  const s3 = 1 / Math.sqrt(3);
  const k = { x: s3, y: s3, z: s3 };
  const walls: Box3[] = [
    { x0: 0, y0: 0, z0: 0, x1: 20, y1: 10, z1: 2, c: 1 },
    { x0: 0, y0: 0, z0: 18, x1: 20, y1: 10, z1: 20, c: 1 },
    { x0: 0, y0: 0, z0: 2, x1: 2, y1: 10, z1: 18, c: 1 },
    { x0: 18, y0: 0, z0: 2, x1: 20, y1: 10, z1: 18, c: 1 },
  ];
  const block: Box3[] = [{ x0: 8, y0: 0, z0: 8, x1: 12, y1: 4, z1: 12, c: 2 }];
  // visible geometry camera-side of the whole group never constrains the cuts
  const beside: Box3[] = [{
    x0: 30,
    y0: 0,
    z0: 8,
    x1: 34,
    y1: 4,
    z1: 12,
    c: 2,
  }];
  const noCut = (c: { x: number; y: number; z: number }) =>
    c.x === Infinity && c.y === Infinity && c.z === Infinity;
  assert(noCut(cutCorner(walls, beside, [k], 1, 1, 1)));
  // straight top-down the rim walls cover only ground, not the block
  assert(noCut(cutCorner(walls, block, [{ x: 0, y: 1, z: 0 }], 1, 1, 1)));
  // and with nothing visible at all there is nothing to reveal
  assert(noCut(cutCorner(walls, [], [k], 1, 1, 1)));
});
// Walls standing on a coextensive visible floor slab: the contact faces under
// the walls must not erase them, but the near walls do front the interior
// floor surface - so they drop whole while the far shell survives, and
// straight top-down (where the walls front no floor at all) nothing is cut.
Deno.test("cutaway: a visible floor opens the room, contact keeps it", () => {
  const s3 = 1 / Math.sqrt(3);
  const k = { x: s3, y: s3, z: s3 };
  const walls: Box3[] = [
    { x0: 0, y0: 0, z0: 0, x1: 20, y1: 10, z1: 2, c: 1 },
    { x0: 0, y0: 0, z0: 18, x1: 20, y1: 10, z1: 20, c: 1 },
    { x0: 0, y0: 0, z0: 2, x1: 2, y1: 10, z1: 18, c: 1 },
    { x0: 18, y0: 0, z0: 2, x1: 20, y1: 10, z1: 18, c: 1 },
  ];
  const floor: Box3[] = [{ x0: 0, y0: -1, z0: 0, x1: 20, y1: 0, z1: 20, c: 3 }];
  const c = cutCorner(walls, floor, [k], 1, 1, 1);
  assert(c.x >= 16 && c.x < 18, `near-x wall must drop whole, got ${c.x}`);
  assert(c.z >= 16 && c.z < 18, `near-z wall must drop whole, got ${c.z}`);
  assert(c.y === Infinity, `far shell must keep its full height, got ${c.y}`);
  const top = cutCorner(walls, floor, [{ x: 0, y: 1, z: 0 }], 1, 1, 1);
  assert(top.x === Infinity && top.y === Infinity && top.z === Infinity);
});
// A solid block standing on a visible floor that runs on behind it: x/z cuts
// would erase it outright, so the volume-optimal choice is a "walls-down"
// y-cut leaving a near-ground stump (whose height tracks the sample-lattice
// pitch). Top-down it fronts only its own contact patch, so it stays whole.
Deno.test("cutaway: a grounded solid keeps a walls-down stump", () => {
  const s3 = 1 / Math.sqrt(3);
  const k = { x: s3, y: s3, z: s3 };
  const block: Box3[] = [
    { x0: 10, y0: 0, z0: 10, x1: 14, y1: 12, z1: 14, c: 1 },
  ];
  const floor: Box3[] = [{ x0: 0, y0: -1, z0: 0, x1: 40, y1: 0, z1: 40, c: 2 }];
  const c = cutCorner(block, floor, [k], 1, 1, 1);
  assert(c.x === Infinity && c.z === Infinity, "stump keeps its footprint");
  assert(c.y >= 1 && c.y <= 6, `stump height tracks the lattice, got ${c.y}`);
  const top = cutCorner(block, floor, [{ x: 0, y: 1, z: 0 }], 1, 1, 1);
  assert(top.x === Infinity && top.y === Infinity && top.z === Infinity);
});
// The budgeted job must produce exactly the same cuts as the one-shot path no
// matter where it is interrupted — render steps it a few units per frame.
Deno.test("cutaway: the sliced aim job matches the one-shot result", () => {
  const s3 = 1 / Math.sqrt(3);
  const k = { x: s3, y: s3, z: s3 };
  const dirs = [k, { x: 0.6, y: 0.53, z: 0.6 }, { x: 0, y: 1, z: 0 }];
  const walls: Box3[] = [
    { x0: 0, y0: 0, z0: 0, x1: 20, y1: 10, z1: 2, c: 1 },
    { x0: 0, y0: 0, z0: 18, x1: 20, y1: 10, z1: 20, c: 1 },
    { x0: 0, y0: 0, z0: 2, x1: 2, y1: 10, z1: 18, c: 1 },
    { x0: 18, y0: 0, z0: 2, x1: 20, y1: 10, z1: 18, c: 1 },
  ];
  const block: Box3[] = [{ x0: 8, y0: 0, z0: 8, x1: 12, y1: 4, z1: 12, c: 2 }];
  const occ: Box3[] = [
    ...block,
    { x0: 0, y0: -1, z0: 0, x1: 200, y1: 0, z1: 200, c: 3 }, // big: gets split
  ];
  const whole = cutCorner(walls, occ, dirs, 1, 1, 1);
  const job = cutJob([walls, block], occ, dirs, 1, 1, 1);
  let steps = 0;
  while (!job.step(() => true)) steps++; // interrupt after every single unit
  assert(steps > 1, "expected the job to be split into multiple units");
  const [w2] = job.cuts();
  assert(
    w2.x === whole.x && w2.y === whole.y && w2.z === whole.z,
    `sliced job diverged: ${JSON.stringify(w2)} != ${JSON.stringify(whole)}`,
  );
});

// ---- the CRDT document layer (src/crdt/doc.ts) ----
// The editor keeps a plain in-memory Node tree and reconciles it into a LoroTree;
// these cover the three properties the sync layer rests on: the round-trip is
// lossless, reconcile is idempotent (which is what stops a remote update echoing
// back), and concurrent edits from two peers converge without violating the box
// disjointness invariant the rest of the engine assumes.
const cObj = (id: string, name: string, boxes: Box3[] = []): ObjectNode => ({
  type: "object",
  id,
  name,
  pos: { x: 1, y: 2, z: 3 },
  rot: 1,
  vis: "visible",
  boxes,
});
const cScene = (id: string, name: string, children: NodeT[]): SceneNode => ({
  type: "scene",
  id,
  name,
  pos: { x: 0, y: 0, z: 0 },
  rot: 0,
  vis: "visible",
  children,
});
const bx = (
  x0: number,
  y0: number,
  z0: number,
  x1: number,
  y1: number,
  z1: number,
  c: number,
): Box3 => ({ x0, y0, z0, x1, y1, z1, c });
// peer sharing a common base — the two-tab / agent-plus-user situation
const fork2 = (base: Uint8Array): [LoroDoc, LoroDoc] => {
  const a = new LoroDoc(), b = new LoroDoc();
  a.import(base);
  b.import(base);
  return [a, b];
};
const syncBoth = (a: LoroDoc, b: LoroDoc): void => {
  const ua = a.export({ mode: "update" }), ub = b.export({ mode: "update" });
  a.import(ub);
  b.import(ua);
};

Deno.test("crdt: Node tree round-trips through the document losslessly", () => {
  const root = cScene("n1", "Project", [
    cObj("n2", "Floor", [bx(0, 0, 0, 40, 1, 30, 0xcb997e)]),
    cScene("n3", "Desk group", [
      cObj("n4", "Desk", [bx(0, 0, 0, 14, 8, 7, 0xd4a373)]),
    ]),
  ]);
  root.children[1].rot = 3;
  (root.children[0] as ObjectNode).vis = "deemphasized";
  const back = build(docFromTree(root));
  assertEquals(JSON.stringify(back), JSON.stringify(root));
});

Deno.test("crdt: reconcile is idempotent, so remote updates cannot echo", () => {
  const root = cScene("n1", "P", [cObj("n2", "A", [bx(0, 0, 0, 2, 2, 2, 7)])]);
  const doc = docFromTree(root);
  assert(!reconcile(doc, root), "an unchanged tree must emit no ops");
  // and again after a snapshot round-trip, which is how a second tab boots
  const loaded = new LoroDoc();
  loaded.import(snapshot(doc));
  const built = build(loaded)!;
  assert(
    !reconcile(loaded, built),
    "a freshly loaded document must emit no ops",
  );
});

Deno.test("crdt: concurrent edits to different objects both survive", () => {
  const root = cScene("n1", "P", [
    cObj("n2", "A", [bx(0, 0, 0, 2, 2, 2, 0x111111)]),
    cObj("n3", "B", [bx(0, 0, 0, 2, 2, 2, 0x222222)]),
  ]);
  const [a, b] = fork2(snapshot(docFromTree(root)));
  const ra = build(a)!;
  (ra.children[0] as ObjectNode).boxes[0].c = 0xff0000; // peer A recolours A
  reconcile(a, ra);
  const rb = build(b)!;
  rb.children[1].pos.x = 99; // peer B slides B
  reconcile(b, rb);
  syncBoth(a, b);
  const ma = build(a)!, mb = build(b)!;
  assertEquals(JSON.stringify(ma), JSON.stringify(mb), "peers must converge");
  assertEquals((ma.children[0] as ObjectNode).boxes[0].c, 0xff0000);
  assertEquals(ma.children[1].pos.x, 99);
});

Deno.test("crdt: a reparent merges with a concurrent rename of the target", () => {
  const root = cScene("n1", "P", [cObj("n2", "A"), cScene("n3", "G", [])]);
  const [a, b] = fork2(snapshot(docFromTree(root)));
  const ra = build(a)!; // peer A drags object A into group G
  const moved = ra.children.shift()!;
  (ra.children[0] as SceneNode).children.push(moved);
  reconcile(a, ra);
  const rb = build(b)!; // peer B renames G at the same time
  rb.children[1].name = "Renamed";
  reconcile(b, rb);
  syncBoth(a, b);
  const ma = build(a)!, mb = build(b)!;
  assertEquals(JSON.stringify(ma), JSON.stringify(mb), "peers must converge");
  assertEquals(ma.children.length, 1, "A moved inside G");
  assertEquals((ma.children[0] as SceneNode).children[0].id, "n2");
  assertEquals(ma.children[0].name, "Renamed", "the rename survived the move");
});

Deno.test("crdt: concurrent geometry edits leave the boxes disjoint", () => {
  // Geometry is stored as ONE opaque last-writer-wins value per object precisely
  // so a merge can never interleave two box lists into overlapping boxes — which
  // would break meshing, picking and every box-algebra assumption. Whichever side
  // wins, materialize() must still find a disjoint set.
  const root = cScene("n1", "P", [
    cObj("n2", "A", [bx(0, 0, 0, 10, 10, 10, 0x111111)]),
  ]);
  const [a, b] = fork2(snapshot(docFromTree(root)));
  const ra = build(a)!;
  const oa = ra.children[0] as ObjectNode;
  oa.boxes = addBox(
    oa.boxes,
    { x0: 2, y0: 2, z0: 2, x1: 8, y1: 8, z1: 8 },
    0xaa,
  );
  reconcile(a, ra);
  const rb = build(b)!;
  const ob = rb.children[0] as ObjectNode;
  ob.boxes = eraseBox(ob.boxes, { x0: 4, y0: 0, z0: 4, x1: 6, y1: 10, z1: 6 });
  reconcile(b, rb);
  syncBoth(a, b);
  const ma = build(a)!, mb = build(b)!;
  assertEquals(JSON.stringify(ma), JSON.stringify(mb), "peers must converge");
  materialize((ma.children[0] as ObjectNode).boxes, "merged object");
});

Deno.test("crdt: a deleted node stays deleted after a merge", () => {
  const root = cScene("n1", "P", [
    cObj("n2", "A"),
    cObj("n3", "B"),
    cObj("n4", "C"),
  ]);
  const [a, b] = fork2(snapshot(docFromTree(root)));
  const ra = build(a)!;
  ra.children = ra.children.filter((c) => c.id !== "n3"); // peer A deletes B
  reconcile(a, ra);
  const rb = build(b)!;
  rb.children[2].name = "C renamed"; // peer B renames C
  reconcile(b, rb);
  syncBoth(a, b);
  const ma = build(a)!, mb = build(b)!;
  assertEquals(JSON.stringify(ma), JSON.stringify(mb), "peers must converge");
  assertEquals(ma.children.map((c) => c.id), ["n2", "n4"]);
  assertEquals(ma.children[1].name, "C renamed");
});
