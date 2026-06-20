# voxelier

A low-fi, browser-based **voxel editor for room design**. Build rooms and
furniture out of ~10 cm voxel cubes, viewed in a true isometric (orthographic)
projection. Everything lives in a single self-contained `index.html` — no build
step.

## Running

Just open `index.html` in a modern browser:

```
# either double-click index.html, or serve it (recommended):
npx http-server -p 8099
# then visit http://localhost:8099/index.html
```

Three.js is loaded from a CDN via an import map, so the first load needs an
internet connection (it's cached afterwards).

## Concepts

- **Voxels** — 1 voxel = 10 cm. Placement is strictly orthogonal (grid-aligned);
  rotation is limited to 90° steps. No shadows or other visual candy — just flat
  face shading so the cubes read as 3D.
- **Objects** — reusable pieces (a chair, a table, a plant…) edited on their own
  in *Object* mode, then dropped into the room as whole units in *Scene* mode.
- **Room** — also built from voxels, but flagged as the room shell. It can be made
  **see-through** so the walls nearest the camera fade away and you can see what's
  inside.
- **16-color muted palette** — a fixed, deliberately desaturated palette suited to
  interiors.

## Modes

| Mode | What you do |
|------|-------------|
| **Scene** | Build the room shell (Wall/Erase/Paint), place & arrange objects (Place/Select). |
| **Object** | Edit a single reusable object voxel-by-voxel (Add/Erase/Paint). |

## Views

- **Iso** — true 2:1 isometric. Rotate in 90° steps with the ⟲ / ⟳ buttons or `Q` / `E`.
- **Bird** — top-down birdseye (great as a floor plan, especially with See-through on).

## Controls

| Action | Control |
|--------|---------|
| Use current tool | **Left mouse** (click or drag to paint) |
| Pan | **Right / middle mouse** drag |
| Zoom | **Mouse wheel** |
| Rotate view 90° | `Q` / `E` |
| Isometric / Birdseye | `1` / `2` |
| Toggle see-through walls | `X` |
| Toggle grid | `G` |
| Switch Scene ⇄ Object | `Tab` |
| Rotate placement / selected object | `R` |
| Delete selected placement | `Delete` / `Backspace` |

## Tools

**Scene mode**

- **Place** — drop the object selected in the Objects list at the cursor (`R` to rotate first).
- **Select** — click a placed object to select it; drag to move, `R` to rotate, `Delete` to remove.
- **Wall** — paint room voxels with the active color.
- **Erase** — remove room voxels.
- **Paint** — recolor existing room voxels.

**Object mode**

- **Add / Erase / Paint** — build the object cube by cube. **Done** returns to the scene.

## Saving

The scene autosaves to `localStorage`. Use **Export** / **Import** to move a scene
as a JSON file, or **Clear** to wipe the room and placements (library objects are kept).

## Tech

- A single `index.html` (inline CSS + ES-module JS).
- [three.js](https://threejs.org/) `OrthographicCamera` for true isometric, with
  `InstancedMesh` per draw layer for the voxels.
- See-through: room voxels on the camera-facing half are split into a faint,
  transparent instanced mesh; in birdseye, everything above the floor fades.
