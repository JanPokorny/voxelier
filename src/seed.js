// The example scene shown on first run (no saved document). Returns a fresh root.
import { newObject, newScene, DEFAULT_COLORS } from './model.js';
import { key } from './math.js';

export function seed() {
  // --- Room object (60 x 46 floor, 34 tall, with a doorway) ---
  const room = newObject(); const rv = (x, y, z, c) => room.voxels.set(key(x, y, z), DEFAULT_COLORS[c]);
  const W = 60, D = 46, H = 34;
  for (let x = 0; x < W; x++) for (let z = 0; z < D; z++) rv(x, 0, z, 3);                 // floor
  for (let y = 1; y <= H; y++) {
    for (let x = 0; x < W; x++) { rv(x, y, 0, 2); rv(x, y, D - 1, 2); }
    for (let z = 0; z < D; z++) { rv(0, y, z, 2); rv(W - 1, y, z, 2); }
  }
  const dw = 14, dh = 26, dx = Math.floor((W - dw) / 2);                            // doorway in front wall
  for (let y = 1; y <= dh; y++) for (let x = dx; x < dx + dw; x++) room.voxels.delete(key(x, y, 0));

  // --- Desk object (30 x 16 x 18) ---
  const desk = newObject(); const dv = (x, y, z, c) => desk.voxels.set(key(x, y, z), DEFAULT_COLORS[c]);
  for (let x = 0; x < 30; x++) for (let z = 0; z < 16; z++) dv(x, 17, z, 9);              // top
  for (const [lx, lz] of [[0, 0], [28, 0], [0, 14], [28, 14]]) for (let y = 0; y < 17; y++) { dv(lx, y, lz, 7); dv(lx + 1, y, lz, 7); dv(lx, y, lz + 1, 7); dv(lx + 1, y, lz + 1, 7); }

  // --- Computer object (monitor on a stand) ---
  const comp = newObject(); const cv = (x, y, z, c) => comp.voxels.set(key(x, y, z), DEFAULT_COLORS[c]);
  for (let x = 0; x < 6; x++) for (let z = 0; z < 5; z++) cv(x + 6, 0, z, 11);              // foot
  for (let y = 1; y < 5; y++) { cv(8, y, 2, 11); cv(9, y, 2, 11); }                          // neck
  for (let x = 0; x < 18; x++) for (let y = 5; y < 16; y++) { cv(x, y, 1, 11); cv(x, y, 0, 13); } // screen (back/face)

  // --- Chair object (10 x 10 seat, modest back; backrest at local z=0) ---
  const chair = newObject(); const hv = (x, y, z, c) => chair.voxels.set(key(x, y, z), DEFAULT_COLORS[c]);
  const CS = 10;
  for (let x = 0; x < CS; x++) for (let z = 0; z < CS; z++) hv(x, 9, z, 13);             // seat (top at y=10)
  for (const [lx, lz] of [[1, 1], [CS - 2, 1], [1, CS - 2], [CS - 2, CS - 2]]) for (let y = 0; y < 9; y++) hv(lx, y, lz, 7); // legs
  for (let x = 0; x < CS; x++) for (let y = 10; y < 20; y++) hv(x, y, 0, 13);           // backrest

  // --- Plant object (pot + foliage) ---
  const plant = newObject(); const pv = (x, y, z, c) => plant.voxels.set(key(x, y, z), DEFAULT_COLORS[c]);
  for (let y = 0; y < 9; y++) for (let x = 0; x < 10; x++) for (let z = 0; z < 10; z++)
    if (y === 0 || x === 0 || x === 9 || z === 0 || z === 9) pv(x, y, z, 9);            // pot shell
  for (let y = 9; y < 14; y++) pv(4, y, 4, 14);                                          // stem
  for (let y = 14; y < 30; y++) for (let x = -1; x < 11; x++) for (let z = -1; z < 11; z++) {
    if (Math.hypot(x - 4, (y - 22) * 0.8, z - 4) < 6) pv(x, y, z, 14);                  // foliage blob
  }

  // --- assemble into one named tree ---
  room.name = 'Room'; room.pos = { x: 0, y: 0, z: 0 }; room.vis = 'transparent';        // walls transparent by default
  desk.name = 'Desk'; desk.pos = { x: 0, y: 0, z: 0 };
  comp.name = 'Computer'; comp.pos = { x: 6, y: 18, z: 4 };
  const dws = newScene(); dws.name = 'Desk + Computer'; dws.pos = { x: 6, y: 1, z: 30 };
  dws.children = [desk, comp];
  chair.name = 'Chair'; chair.pos = { x: 16, y: 1, z: 20 }; chair.rot = 0;   // in front of the desk, facing it
  plant.name = 'Plant'; plant.pos = { x: 46, y: 1, z: 6 };

  const root = newScene(); root.children = [room, dws, chair, plant];
  return root;
}
