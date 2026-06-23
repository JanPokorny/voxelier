// The example scene shown on first run (no saved document). Returns a fresh root.
// Modelled on architectural plan M.03 at 10 mm per voxel (plan sizes in mm,
// floored): a higher-resolution room than the old toy scene, for perf testing.
import { DEFAULT_COLORS, newObject, newScene } from "./model.ts";
import { key } from "./math.ts";
import type { SceneNode } from "./types.ts";

const mm = (v: number): number => Math.floor(v / 10); // 10 mm per voxel

export function seed(): SceneNode {
  // --- Room M.03: 4465 x 2985 floor, 2700 tall, two doorways + a window ---
  const W = mm(4465), D = mm(2985), H = mm(2700); // 446 x 298 x 270 voxels
  const room = newObject();
  const set = (x: number, y: number, z: number, c: number) =>
    room.voxels.set(key(x, y, z), DEFAULT_COLORS[c]);
  const del = (x: number, y: number, z: number) =>
    room.voxels.delete(key(x, y, z));
  for (let x = 0; x < W; x++) for (let z = 0; z < D; z++) set(x, 0, z, 3); // floor
  for (let y = 1; y <= H; y++) { // 1-voxel perimeter walls
    for (let x = 0; x < W; x++) {
      set(x, y, 0, 2);
      set(x, y, D - 1, 2);
    }
    for (let z = 0; z < D; z++) {
      set(0, y, z, 2);
      set(W - 1, y, z, 2);
    }
  }
  const dw = mm(800), dh = mm(2100); // doorway: 800 wide, 2100 tall
  const doorX = (x0: number, z: number) => { // opening in a z-facing wall
    for (let y = 1; y <= dh; y++) {
      for (let x = x0; x < x0 + dw; x++) del(x, y, z);
    }
  };
  doorX(W - mm(515) - dw, 0); // near wall, 515 from the right
  doorX(W - mm(900) - dw, D - 1); // far wall, 900 from the right
  for (let y = mm(900); y < mm(2100); y++) { // window band in the left wall
    for (let z = mm(600); z < D - mm(600); z++) del(0, y, z);
  }

  // --- Bed: a mattress slab on four legs, in the far-left corner ---
  const bed = newObject();
  const bv = (x: number, y: number, z: number, c: number) =>
    bed.voxels.set(key(x, y, z), DEFAULT_COLORS[c]);
  const BW = mm(1500), BL = mm(2000); // 150 x 200 voxels
  for (const [lx, lz] of [[0, 0], [BW - 8, 0], [0, BL - 8], [BW - 8, BL - 8]]) {
    for (let x = 0; x < 8; x++) {
      for (let z = 0; z < 8; z++) {
        for (let y = 0; y < 14; y++) bv(lx + x, y, lz + z, 7);
      }
    }
  }
  for (let x = 0; x < BW; x++) { // mattress
    for (let z = 0; z < BL; z++) for (let y = 14; y < 20; y++) bv(x, y, z, 6);
  }

  // --- assemble ---
  room.name = "Room M.03";
  room.vis = "transparent"; // walls glass so the interior stays visible
  bed.name = "Bed";
  bed.pos = { x: 3, y: 1, z: D - 1 - BL }; // on the floor, against the far-left

  const root = newScene();
  root.children = [room, bed];
  return root;
}
