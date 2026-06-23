// The example scene shown on first run (no saved document). Returns a fresh root.
// Modelled on architectural plan M.03 at 10 mm per voxel (plan sizes in mm,
// floored): a furnished, higher-resolution room for perf testing. Floor and
// walls are separate objects; furniture lives in its own objects/group.
import { DEFAULT_COLORS, newObject, newScene } from "./model.ts";
import { key } from "./math.ts";
import type { ObjectNode, SceneNode } from "./types.ts";

const mm = (v: number): number => Math.floor(v / 10); // 10 mm per voxel
// build an object by painting voxels through set(x, y, z, paletteIndex)
const object = (
  name: string,
  fill: (set: (x: number, y: number, z: number, c: number) => void) => void,
): ObjectNode => {
  const o = newObject();
  o.name = name;
  fill((x, y, z, c) => o.voxels.set(key(x, y, z), DEFAULT_COLORS[c]));
  return o;
};

export function seed(): SceneNode {
  const W = mm(4465), D = mm(2985), H = mm(2700); // room: 446 x 298 x 270 voxels
  const T = mm(150); // walls 15 cm thick

  // --- Floor (brown) ---
  const floor = object("Floor", (set) => {
    for (let x = 0; x < W; x++) for (let z = 0; z < D; z++) set(x, 0, z, 9);
  });

  // --- Walls: 15 cm thick, two doorways + a window. Stored hollow (only the
  // exposed faces) so a solid-looking thick wall isn't millions of voxels:
  // solid() describes the full thick wall analytically, and we keep a cell only
  // when one of its neighbours is empty (i.e. it's a visible surface). ---
  const dw = mm(800), dh = mm(2100); // doorway: 800 wide, 2100 tall
  const nearX = W - mm(515) - dw, farX = W - mm(900) - dw; // door x-starts
  const winZ0 = mm(600), winZ1 = D - mm(600), winY0 = mm(900), winY1 = mm(2100);
  const inHole = (x: number, z: number) =>
    x >= T && x < W - T && z >= T && z < D - T;
  const inOpening = (x: number, y: number, z: number) =>
    (y <= dh && z < T && x >= nearX && x < nearX + dw) || // near-wall door
    (y <= dh && z >= D - T && x >= farX && x < farX + dw) || // far-wall door
    (x < T && z >= winZ0 && z < winZ1 && y >= winY0 && y < winY1); // window
  const solid = (x: number, y: number, z: number) =>
    y >= 1 && y <= H && x >= 0 && x < W && z >= 0 && z < D &&
    !inHole(x, z) && !inOpening(x, y, z);
  const walls = object("Walls", (set) => {
    for (let x = 0; x < W; x++) {
      for (let z = 0; z < D; z++) {
        if (inHole(x, z)) continue; // interior: not part of the wall ring
        for (let y = 1; y <= H; y++) {
          if (
            solid(x, y, z) &&
            (!solid(x + 1, y, z) || !solid(x - 1, y, z) ||
              !solid(x, y, z + 1) || !solid(x, y, z - 1) || !solid(x, y + 1, z))
          ) set(x, y, z, 5);
        }
      }
    }
  });
  walls.vis = "transparent"; // glass so the furnished interior stays visible

  // --- Bed: mattress + duvet on a legged frame, far-left corner ---
  const BW = mm(1500), BL = mm(2000);
  const bed = object("Bed", (set) => {
    for (
      const [lx, lz] of [[0, 0], [BW - 8, 0], [0, BL - 8], [BW - 8, BL - 8]]
    ) { // legs
      for (let x = 0; x < 8; x++) {
        for (let z = 0; z < 8; z++) {
          for (let y = 0; y < 14; y++) set(lx + x, y, lz + z, 7);
        }
      }
    }
    for (let x = 0; x < BW; x++) { // mattress
      for (let z = 0; z < BL; z++) {
        for (let y = 14; y < 20; y++) set(x, y, z, 6);
      }
    }
    for (let x = 2; x < BW - 2; x++) { // duvet (leaves the pillow end bare)
      for (let z = 0; z < BL - mm(400); z++) {
        for (let y = 20; y < 24; y++) set(x, y, z, 10);
      }
    }
  });
  bed.pos = { x: T + 3, y: 1, z: D - T - BL };

  // --- Desk + Computer (a group, to exercise the scene tree) ---
  const DW = mm(1400), DD = mm(700), DH = mm(740); // desk 1400 x 700 x 740
  const desk = object("Desk", (set) => {
    for (let x = 0; x < DW; x++) { // top slab
      for (let z = 0; z < DD; z++) {
        for (let y = DH - 4; y < DH; y++) set(x, y, z, 8);
      }
    }
    for (
      const [lx, lz] of [[0, 0], [DW - 6, 0], [0, DD - 6], [DW - 6, DD - 6]]
    ) { // legs
      for (let x = 0; x < 6; x++) {
        for (let z = 0; z < 6; z++) {
          for (let y = 0; y < DH - 4; y++) set(lx + x, y, lz + z, 7);
        }
      }
    }
  });
  const comp = object("Computer", (set) => {
    const MW = mm(600), fx = (MW - 30) >> 1, sy0 = mm(160), sy1 = mm(520);
    for (let x = 0; x < 30; x++) { // foot
      for (let z = 0; z < 18; z++) {
        for (let y = 0; y < 2; y++) set(x + fx, y, z, 11);
      }
    }
    for (let y = 2; y < sy0; y++) { // neck
      for (let x = (MW >> 1) - 2; x < (MW >> 1) + 2; x++) {
        for (let z = 7; z < 11; z++) set(x, y, z, 11);
      }
    }
    for (let x = 0; x < MW; x++) { // screen panel (face / back)
      for (let y = sy0; y < sy1; y++) {
        set(x, y, 6, 12);
        set(x, y, 7, 13);
        set(x, y, 8, 13);
      }
    }
  });
  comp.pos = { x: mm(400), y: DH, z: mm(420) }; // on the desk top, toward the back
  const deskGroup = newScene();
  deskGroup.name = "Desk + Computer";
  deskGroup.pos = { x: W - T, y: 1, z: mm(900) }; // against the right wall
  deskGroup.rot = 1; // turned 90° so its long edge runs along the wall
  deskGroup.children = [desk, comp];

  // --- Houseplants: a cylindrical pot, a stem and a foliage blob ---
  const plant = (name: string) =>
    object(name, (set) => {
      const PR = 10, FR = 18, FCY = 72; // pot radius, foliage radius, foliage centre y
      for (let y = 0; y < 30; y++) { // pot
        for (let x = -PR; x <= PR; x++) {
          for (let z = -PR; z <= PR; z++) {
            if (x * x + z * z <= PR * PR) set(x, y, z, 4);
          }
        }
      }
      for (let y = 30; y < FCY; y++) set(0, y, 0, 14); // stem
      for (let x = -FR; x <= FR; x++) { // foliage
        for (let y = -FR; y <= FR; y++) {
          for (let z = -FR; z <= FR; z++) {
            if (x * x + y * y + z * z <= FR * FR) set(x, FCY + y, z, 14);
          }
        }
      }
    });
  const plantA = plant("Plant"), plantB = plant("Plant");
  plantA.pos = { x: W - T - mm(300), y: 1, z: T + mm(300) }; // front-right
  plantB.pos = { x: T + mm(300), y: 1, z: T + mm(300) }; // front-left

  // --- assemble ---
  const root = newScene();
  root.children = [floor, walls, bed, deskGroup, plantA, plantB];
  return root;
}
