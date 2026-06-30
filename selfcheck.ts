// Self-check (`deno test`) for the coordinate math the editor's voxel placement
// relies on. It imports the real rotY/addv from src/math.ts (both pure, no
// three.js) and re-derives the world<->object-local transform here (the real
// locToW/localGroundCell pull in three.js + global state, so they can't be
// imported) to assert rotY is its own inverse under a negated rotation — the
// property those two functions are built on. If rotY's rotation or the inverse
// convention breaks, placement silently lands on the wrong cell — this fails loudly.
import { assert } from "@std/assert";
import type { Box3, Region, Vec } from "./src/types.ts";
import { addv, key, rotY } from "./src/math.ts";
import { addBox, buildIndex, eraseBox, fillBox } from "./src/boxes.ts";
import { rigidRotateWorld } from "./src/shear.ts";

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
    return rigidRotateWorld(bs, deg, 1, (mnx + mxx) / 2, (mnz + mxz) / 2, (x, y, z) => ({
      x,
      y,
      z,
    }));
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
      eachCell(b, (x, y, z) =>
        s.add(`${x - mnx},${y - mny},${z - mnz}:${b.c}`));
    }
    return s;
  };
  for (const sh of shapes) {
    const base = count(sh);
    for (let deg = 0; deg < 360; deg += 15) {
      const r = rotY90(sh, deg);
      materialize(r, `shear ${deg}°`); // asserts disjoint
      assert(count(r) === base, `count drift at ${deg}° (${count(r)} != ${base})`);
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
