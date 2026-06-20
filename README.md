# voxelier

A lo-fi, browser-based **voxel scene editor** (1 voxel = 1 cm), in a true isometric
projection. Everything is a single self-contained `index.html` — no build step.

**Live demo:** https://voxelier-xmyv5z.surge.sh

## Model

Things nest like SVG groups in Inkscape:

- **object** — a set of voxels. A *singular unit*: copying an object gives an
  independent duplicate (editing one never changes the other — there are no
  shared instances/prefabs).
- **scene** — a group of objects and sub-scenes.
- **layer** — a named top-level scene with its own visibility. You edit within one
  active layer at a time; the rest render as a backdrop.

The example that opens has two layers: a **Room** layer (the room shell, set to
*deemphasised*) and an active **Furniture** layer holding a *Desk-with-computer*
sub-scene (separate **desk** and **computer** objects), a **chair**, and a **plant**.

## Layers

Each layer is **visible**, **hidden**, or **deemphasised** — cycle a layer's state
with the dot button in the Layers panel (● visible → ◐ deemphasised → ○ hidden).
Click a layer's name to make it active (you edit its contents); double-click to
rename; **＋** adds one, **×** deletes.

A **deemphasised** layer still lives in 3D — it casts and receives shadows — but
it's drawn to a separate, lower render layer, so it can **never appear in front
of** the ordinary layers (much like a game compositing the player onto its own
buffer). That's why the room walls stay solid and shadow-casting yet never hide
what's inside.

## Editing — the mode is implicit

There's no mode switch; what you can do depends on what you've entered (like
double-clicking into a group in Inkscape):

- **Inside a scene** you arrange its contents: select, move, rotate, delete,
  copy/cut/paste, **group** a selection into a sub-scene, or **ungroup** one.
- **Inside an object** you paint voxels (add / erase / paint) with the 16-colour
  muted palette.

**Double-click** a piece to enter it (a sub-scene to descend into it, an object to
edit its voxels). **Esc** / the **↑ Up** button goes back up a level.

## Controls

| | |
|---|---|
| Select | **click** (Shift-click to multi-select) |
| Move selection | **drag** (on the floor plane) · `[` / `]` lower / raise |
| Enter a piece | **double-click** |
| Go up a level | `Esc` |
| New object | `N` |
| Duplicate | `Ctrl+D` · copy / cut / paste `Ctrl+C` / `Ctrl+X` / `Ctrl+V` |
| Group / Ungroup | `Ctrl+G` / `Ctrl+Shift+G` |
| Rotate 90° | `R` (scene selection) |
| Delete | `Delete` / `Backspace` |
| Pan / zoom | **right-drag** / **wheel** |
| Rotate view 90° | `Q` / `E` |
| Isometric / Birdseye | `1` / `2` |
| Fit to view | `F` |
| Toggle grid | `G` |
| Layer visibility / active / rename | Layers panel (top-right) |

Placement is strictly orthogonal and rotation is limited to 90° steps. Birdseye is
an axis-aligned top-down view (a clean floor plan). Soft shadows are drawn for depth.
The document autosaves to `localStorage`.

## Tech

- One `index.html` (inline CSS + ES-module JS); [three.js](https://threejs.org/)
  loaded from a CDN via an import map (first load needs a connection).
- `OrthographicCamera` for true isometric; one `InstancedMesh` per pickable unit,
  so clicks resolve to whole objects/sub-scenes; voxel editing raycasts the single
  edited object.

## Running

Open `index.html` in a modern browser, or serve it: `npx http-server` and visit the
printed URL.
