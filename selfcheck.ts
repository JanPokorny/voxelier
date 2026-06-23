// Self-check (`deno test`) for the coordinate math the editor's voxel placement
// relies on. It imports the real rotY/addv from src/math.js (both pure, no
// three.js) and asserts the world<->object-local round-trip that locToW and
// localGroundCell depend on. If rotY's rotation or the inverse convention
// breaks, placement silently lands on the wrong cell — this fails loudly.
import { assert } from "@std/assert";
import type { Vec } from "./src/types.ts";
import { addv, key, keyToWorld, parseKey, rotY } from "./src/math.ts";

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
