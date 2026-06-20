# voxelier

A lo-fi, browser-based **voxel scene editor** (1 voxel = 1 cm), in a true isometric
projection. Everything is a single self-contained `index.html` — no build step.

**Live demo:** https://voxelier-xmyv5z.surge.sh

## Model

There are only two kinds of things, nested like SVG groups in Inkscape:

- **object** — a set of voxels. A *singular unit*: copying an object gives an
  independent duplicate (editing one never changes the other — there are no
  shared instances/prefabs).
- **scene** — a group of objects and sub-scenes.

The example that opens is a room: the room shell is just an object like any other,
a *Desk-with-computer* sub-scene holds separate **desk** and **computer** objects,
plus a **chair** and a **plant**.

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
| Deemphasise selection | `X` (or the **◐ Deemph.** tool) |
| Toggle grid | `G` |

Placement is strictly orthogonal and rotation is limited to 90° steps. Birdseye is
an axis-aligned top-down view (a clean floor plan). Soft shadows are drawn for depth.
The scene autosaves to `localStorage`.

### Deemphasised pieces

Any object or group can be **deemphasised** (the room walls are, by default). A
deemphasised piece still lives in 3D — it casts and receives shadows — but it's
drawn to a separate, lower layer, so it can **never appear in front of** the
ordinary pieces (much like a game compositing the player onto its own buffer). The
result is that walls stay solid and shadow-casting yet never hide what's inside.

## Tech

- One `index.html` (inline CSS + ES-module JS); [three.js](https://threejs.org/)
  loaded from a CDN via an import map (first load needs a connection).
- `OrthographicCamera` for true isometric; one `InstancedMesh` per pickable unit,
  so clicks resolve to whole objects/sub-scenes; voxel editing raycasts the single
  edited object.

## Running

Open `index.html` in a modern browser, or serve it: `npx http-server` and visit the
printed URL.
