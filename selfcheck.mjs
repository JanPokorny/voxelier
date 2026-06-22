// Runnable self-check (node selfcheck.mjs) for the coordinate math the editor's
// voxel placement relies on. It imports the real rotY/addv from src/math.js
// (both pure, no three.js) and asserts the world<->object-local round-trip that
// locToW and localGroundCell depend on. If rotY's rotation or the inverse
// convention breaks, placement silently lands on the wrong cell — this fails
// loudly instead.
import assert from 'node:assert';
import { addv, rotY } from './src/math.js';

const toW = (cell, off, rot) => addv(rotY(cell, rot), off);                  // local -> world (locToW)
const toLocal = (w, off, rot) => rotY({ x: w.x - off.x, y: 0, z: w.z - off.z }, (4 - rot) & 3); // world -> local

for (const rot of [0, 1, 2, 3])
  for (const off of [{ x: 0, y: 0, z: 0 }, { x: 5, y: 1, z: -3 }, { x: -7, y: 2, z: 9 }])
    for (const cell of [{ x: 0, y: 0, z: 0 }, { x: 3, y: 0, z: 4 }, { x: -2, y: 0, z: 6 }]) {
      const back = toLocal(toW(cell, off, rot), off, rot);   // === so -0 matches 0
      assert.ok(back.x === cell.x && back.z === cell.z,
        `round-trip failed at rot=${rot} off=${JSON.stringify(off)} cell=${JSON.stringify(cell)}`);
    }
console.log('selfcheck OK');
