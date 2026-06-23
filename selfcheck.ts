// Self-check (`deno test`) for the coordinate math the editor's voxel placement
// relies on. It imports the real rotY/addv from src/math.js (both pure, no
// three.js) and asserts the world<->object-local round-trip that locToW and
// localGroundCell depend on. If rotY's rotation or the inverse convention
// breaks, placement silently lands on the wrong cell — this fails loudly.
import { assert } from "@std/assert";
import type { Box3, Region, Vec } from "./src/types.ts";
import { addv, key, keyToWorld, parseKey, rotY } from "./src/math.ts";
import {
  addBox,
  boundaryCells,
  buildIndex,
  eraseBox,
  paintBox,
} from "./src/boxes.ts";

const toW = (cell: Vec, off: Vec, rot: number): Vec =>
  addv(rotY(cell, rot), off); // local -> world (locToW)
const toLocal = (w: Vec, off: Vec, rot: number): Vec =>
  rotY({ x: w.x - off.x, y: 0, z: w.z - off.z }, (4 - rot) & 3); // world -> local

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

// keyToWorld fuses parseKey -> rotY -> +off; it must stay bit-identical to the
// composed form the meshing/AABB gather loops used to run.
Deno.test("keyToWorld == addv(rotY(parseKey(k),rot),off)", () => {
  const offs: Vec[] = [{ x: 0, y: 0, z: 0 }, { x: 5, y: 1, z: -3 }, {
    x: -7,
    y: 2,
    z: 9,
  }];
  for (const rot of [0, 1, 2, 3]) {
    for (const off of offs) {
      for (const [x, y, z] of [[0, 0, 0], [3, -1, 4], [-2, 5, 6], [9, 0, -8]]) {
        const k = key(x, y, z);
        const a = addv(rotY(parseKey(k), rot), off),
          b = keyToWorld(k, rot, off);
        assert(
          a.x === b.x && a.y === b.y && a.z === b.z,
          `mismatch rot=${rot} off=${JSON.stringify(off)} cell=${x},${y},${z}`,
        );
      }
    }
  }
});

// The box model is the document representation: add/erase/paint must keep the
// box set disjoint and exactly equal (occupancy + colour) to the cells they'd
// touch, and boundaryCells() must emit precisely the surface cells. Brute-forced
// against a reference voxel map over a stream of random ops.
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
          else if (c < 0) ref.has(k) && ref.set(k, -c); // recolour-if-filled
          else ref.set(k, c);
        }
      }
    }
  };
  let boxes: Box3[] = [];
  for (let step = 0; step < 300; step++) {
    const r = randRegion(), c = ri(1, 5), op = ri(0, 2);
    if (op === 0) (boxes = addBox(boxes, r, c)), fill(r, c);
    else if (op === 1) (boxes = eraseBox(boxes, r)), fill(r, null);
    else (boxes = paintBox(boxes, r, c)), fill(r, -c);
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
  // boundaryCells == occupied cells adjacent to an empty cell
  const has = buildIndex(boxes);
  const refHas = (x: number, y: number, z: number) => ref.has(key(x, y, z));
  const bc = new Map<number, number>();
  for (const cl of boundaryCells(boxes, has)) {
    bc.set(key(cl.x, cl.y, cl.z), cl.c);
  }
  for (let x = -1; x <= N + 1; x++) {
    for (let y = -1; y <= N + 1; y++) {
      for (let z = -1; z <= N + 1; z++) {
        assert(
          has(x, y, z) === refHas(x, y, z),
          "index disagrees with reference",
        );
        if (!refHas(x, y, z)) continue;
        const surf = !refHas(x + 1, y, z) || !refHas(x - 1, y, z) ||
          !refHas(x, y + 1, z) || !refHas(x, y - 1, z) ||
          !refHas(x, y, z + 1) || !refHas(x, y, z - 1);
        const k = key(x, y, z);
        assert(
          surf ? bc.get(k) === ref.get(k) : !bc.has(k),
          `boundary mismatch at ${x},${y},${z}`,
        );
      }
    }
  }
});
