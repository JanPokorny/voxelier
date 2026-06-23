// The example scene shown on first run (no saved document). Returns a fresh root.
// Modelled on plan M.03 at 10 mm per voxel — in the box model the whole room is
// just a handful of colour boxes (the walls a few slabs with the openings carved
// out), so storage and meshing cost track surface area, not volume.
import { DEFAULT_COLORS, newObject, newScene } from "./model.ts";
import { eraseBox, region } from "./boxes.ts";
import type { Box3, ObjectNode, Region, SceneNode } from "./types.ts";

const mm = (v: number): number => Math.floor(v / 10); // 10 mm per voxel
const C = DEFAULT_COLORS;
const object = (name: string, boxes: Box3[]): ObjectNode => {
  const o = newObject();
  o.name = name;
  o.boxes = boxes;
  return o;
};
const rgn = (
  x0: number,
  y0: number,
  z0: number,
  x1: number,
  y1: number,
  z1: number,
): Region => ({ x0, y0, z0, x1, y1, z1 });

export function seed(): SceneNode {
  const W = mm(4465), D = mm(2985), H = mm(2700); // room: 446 x 298 x 270 cells
  const T = mm(150); // walls 15 cm thick

  // --- Floor (brown) ---
  const floor = object("Floor", [region(0, 0, 0, W, 1, D, C[9])]);

  // --- Walls: four 15 cm slabs, then carve two doorways + a window ---
  const dw = mm(800), dh = mm(2100);
  const nearX = W - mm(515) - dw, farX = W - mm(900) - dw;
  let wb: Box3[] = [
    region(0, 1, 0, W, H + 1, T, C[5]), // near wall
    region(0, 1, D - T, W, H + 1, D, C[5]), // far wall
    region(0, 1, T, T, H + 1, D - T, C[5]), // left wall
    region(W - T, 1, T, W, H + 1, D - T, C[5]), // right wall
  ];
  wb = eraseBox(wb, rgn(nearX, 1, 0, nearX + dw, dh + 1, T)); // near door
  wb = eraseBox(wb, rgn(farX, 1, D - T, farX + dw, dh + 1, D)); // far door
  wb = eraseBox(wb, rgn(0, mm(900), mm(600), T, mm(2100), D - mm(600))); // window
  const walls = object("Walls", wb);
  walls.vis = "transparent"; // glass so the furnished interior stays visible

  // --- Bed: legs, mattress, duvet ---
  const BW = mm(1500), BL = mm(2000);
  const bed = object("Bed", [
    region(0, 0, 0, 8, 14, 8, C[7]),
    region(BW - 8, 0, 0, BW, 14, 8, C[7]),
    region(0, 0, BL - 8, 8, 14, BL, C[7]),
    region(BW - 8, 0, BL - 8, BW, 14, BL, C[7]),
    region(0, 14, 0, BW, 20, BL, C[6]), // mattress
    region(2, 20, 0, BW - 2, 24, BL - mm(400), C[10]), // duvet (bare pillow end)
  ]);
  bed.pos = { x: T + 3, y: 1, z: D - T - BL };

  // --- Desk + Computer (a group, turned against the right wall) ---
  const DW = mm(1400), DD = mm(700), DH = mm(740);
  const desk = object("Desk", [
    region(0, DH - 4, 0, DW, DH, DD, C[8]), // top slab
    region(0, 0, 0, 6, DH - 4, 6, C[7]),
    region(DW - 6, 0, 0, DW, DH - 4, 6, C[7]),
    region(0, 0, DD - 6, 6, DH - 4, DD, C[7]),
    region(DW - 6, 0, DD - 6, DW, DH - 4, DD, C[7]),
  ]);
  const MW = mm(600), fx = (MW - 30) >> 1, mid = MW >> 1;
  const comp = object("Computer", [
    region(fx, 0, 0, fx + 30, 2, 18, C[11]), // foot
    region(mid - 2, 2, 7, mid + 2, mm(160), 11, C[11]), // neck
    region(0, mm(160), 6, MW, mm(520), 9, C[13]), // screen
  ]);
  comp.pos = { x: mm(400), y: DH, z: mm(420) };
  const deskGroup = newScene();
  deskGroup.name = "Desk + Computer";
  deskGroup.pos = { x: W - T, y: 1, z: mm(900) };
  deskGroup.rot = 1;
  deskGroup.children = [desk, comp];

  // --- Houseplants: pot, stem, stepped foliage (boxes, so a blocky bush) ---
  const plant = (name: string) =>
    object(name, [
      region(-10, 0, -10, 11, 30, 11, C[4]), // pot
      region(-2, 30, -2, 3, 54, 3, C[14]), // stem
      region(-16, 54, -16, 17, 78, 17, C[14]), // lower foliage
      region(-12, 78, -12, 13, 92, 13, C[14]), // upper foliage
    ]);
  const plantA = plant("Plant"), plantB = plant("Plant");
  plantA.pos = { x: W - T - mm(300), y: 1, z: T + mm(300) };
  plantB.pos = { x: T + mm(300), y: 1, z: T + mm(300) };

  const root = newScene();
  root.children = [floor, walls, bed, deskGroup, plantA, plantB];
  return root;
}
