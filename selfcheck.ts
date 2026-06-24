// Self-check (`deno test`) for the coordinate math the editor's voxel placement
// relies on. It imports the real rotY/addv from src/math.ts (both pure, no
// three.js) and asserts the world<->object-local round-trip that locToW and
// localGroundCell depend on. If rotY's rotation or the inverse convention
// breaks, placement silently lands on the wrong cell — this fails loudly.
import { assert } from "@std/assert";
import type { Box3, Region, Vec } from "./src/types.ts";
import { addv, key, rotY } from "./src/math.ts";
import { addBox, buildIndex, eraseBox, fillBox } from "./src/boxes.ts";

const toW = (cell: Vec, off: Vec, rot: number): Vec =>
  addv(rotY(cell, rot), off); // local -> world (locToW)
const toLocal = (w: Vec, off: Vec, rot: number): Vec =>
  rotY({ x: w.x - off.x, y: 0, z: w.z - off.z }, -rot); // world -> local (inverse rotation)

Deno.test("voxel placement round-trip", () => {
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
  let s = 12345;
  const rnd = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  const ri = (a: number, b: number) => a + Math.floor(rnd() * (b - a + 1));
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
  const fill = (r: Region, c: number | null) => {
    for (let x = r.x0; x < r.x1; x++) {
      for (let y = r.y0; y < r.y1; y++) {
        for (let z = r.z0; z < r.z1; z++) {
          const k = key(x, y, z);
          if (c === null) ref.delete(k);
          else ref.set(k, c);
        }
      }
    }
  };
  let boxes: Box3[] = [];
  for (let step = 0; step < 300; step++) {
    const r = randRegion(), c = ri(1, 5), op = ri(0, 1);
    if (op === 0) (boxes = addBox(boxes, r, c)), fill(r, c);
    else (boxes = eraseBox(boxes, r)), fill(r, null);
  }
  // disjoint + occupancy/colour identical to the reference
  const got = new Map<number, number>();
  for (const b of boxes) {
    for (let x = b.x0; x < b.x1; x++) {
      for (let y = b.y0; y < b.y1; y++) {
        for (let z = b.z0; z < b.z1; z++) {
          const k = key(x, y, z);
          assert(!got.has(k), `boxes overlap at ${x},${y},${z}`);
          got.set(k, b.c);
        }
      }
    }
  }
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
  let s = 999;
  const rnd = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  const ri = (a: number, b: number) => a + Math.floor(rnd() * (b - a + 1));
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
      for (let x = b.x0; x < b.x1; x++) {
        for (let y = b.y0; y < b.y1; y++) {
          for (let z = b.z0; z < b.z1; z++) {
            ref.set(key(x, y, z), b.c);
            cells.push({ x, y, z });
          }
        }
      }
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
    // actual: fillBox returns null when nothing changes (orig === newC here)
    const out = fillBox(boxes, seed.x, seed.y, seed.z, newC) ?? boxes;
    const got = new Map<number, number>();
    for (const b of out) {
      for (let x = b.x0; x < b.x1; x++) {
        for (let y = b.y0; y < b.y1; y++) {
          for (let z = b.z0; z < b.z1; z++) {
            const k = key(x, y, z);
            assert(!got.has(k), `fillBox produced overlap at ${x},${y},${z}`);
            got.set(k, b.c);
          }
        }
      }
    }
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
