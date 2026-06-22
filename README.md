# voxelier

A lo-fi, browser-based **voxel scene editor** (1 voxel = 1 cm), in a true isometric
projection. Everything is a single self-contained `index.html` — no build step.

**Live demo:** https://janpokorny.github.io/voxelier/

## Model

Things nest like SVG groups in Inkscape:

- **object** — a set of voxels. A *singular unit*: copying an object gives an
  independent duplicate (editing one never changes the other — there are no
  shared instances/prefabs).
- **scene** — a group of objects and sub-scenes. The whole document is one root scene.

Any object or sub-scene can be given a **name** and a **visibility** of
**visible / transparent / invisible** (inherited by everything inside it).

The example that opens is a room: a **transparent** **Room** object (the shell), a
**Desk + Computer** sub-scene holding separate **Desk** and **Computer** objects,
a **Chair**, and a **Plant**.

## The tree

The right-hand panel is a collapsible tree of the whole scene — like a file
explorer — with a preview thumbnail for every object and sub-scene. For each row:

- **click** to select it, **double-click** to enter it (descend into a sub-scene,
  or edit an object's voxels), **double-click the name** to rename;
- the visibility button cycles **◉ visible → ◐ transparent → ⦰ invisible**;
- the **▸ / ▾** triangle collapses or expands a sub-scene;
- **drag rows** to reorder and reparent (VSCode-style): drop a piece **onto** a
  group to nest it inside (= grouping), or back out to a parent / the root to
  un-nest — world position is preserved. The **⊞ Group** tool makes a new empty
  group to drag things into.

A **transparent** object/scene still lives in 3D — it casts and receives shadows,
and depth-interleaves with everything else — but it's drawn as a single glass-like
surface (only the exterior faces, back-face culled) so it never shows individual
cubes. **Transparent pieces are not directly interactable** (you can't click or
drag them in the canvas — use the tree); that's why the room walls recede yet
never get in the way. Solid (visible) pieces get baked **edge ambient occlusion**
so their form reads clearly.

## Editing — the mode is implicit

There's no mode switch; what you can do depends on what you've entered (like
double-clicking into a group in Inkscape):

- **Inside a scene** you arrange its contents: select, move, rotate, delete,
  copy/cut/paste, **group** a selection into a sub-scene, or **ungroup** one.
- **Inside an object** you paint voxels (add / erase / paint).

**Double-click** a piece to enter it. **Esc** / the **↑ Up** button goes back up.

## Controls

| | |
|---|---|
| Select / deselect | **left-click** a piece / empty space (Shift-click to multi-select) |
| Pan the view | **left-drag** on empty space (or middle-drag) |
| Move the selected piece | **left-drag** starting on it · **Shift** = up/down instead of the floor plane |
| Orbit / rotate the view | **right-drag** on empty space |
| Rotate the selected piece 90° | **right-drag** starting on it (snaps) · or `R` |
| Enter a piece / go up | **double-click** / `Esc` |
| New object · new Group · Duplicate | `N` · ⊞ tool · `Ctrl+D` (copy/cut/paste `Ctrl+C/X/V`) |
| Group / reparent | **drag rows in the tree** |
| Delete | `Delete` |
| Zoom | **wheel** |
| View: Isometric / Birdseye / Free | `1` / `2` / `3` (Free = arbitrary orbit) · `F` fit |

Placement is orthogonal and piece rotation is limited to 90° steps. Isometric and
birdseye are fixed orthographic angles (90°-stepped); **Free** orbits to any angle.
The floor is a fixed semi-transparent black plane.
Soft shadows are drawn for depth. The document autosaves to `localStorage`.

## Colours

There's no fixed palette — the swatches show the scene's own colours, most-used
first (up to 15), and the **…** swatch opens every scene colour plus a picker for
any RGB value. Voxels store arbitrary 24-bit colours.

## Tech

- One `index.html` (inline CSS + ES-module JS); [three.js](https://threejs.org/)
  loaded from a CDN via an import map (first load needs a connection).
- `OrthographicCamera`; voxels render as per-object surface meshes (exterior faces
  only) — opaque ones bake edge AO into vertex colours, transparent ones are glass;
  the object being voxel-edited uses an instanced mesh for precise picking.

## Running

Open `index.html` in a modern browser, or serve it: `npx http-server` and visit the
printed URL.

## Deploying

GitHub Pages, via `.github/workflows/deploy.yml` (no build step — it just publishes
`index.html`):

- pushes to **main** publish to the site root → https://janpokorny.github.io/voxelier/
- every **pull request** publishes a live preview to
  `…/pr-preview/pr-<N>/` and the workflow comments the URL on the PR (removed when
  the PR closes).

Both share the `gh-pages` branch, which Pages serves via *Settings → Pages → Deploy
from a branch → `gh-pages` / `root`*. (PR previews only work for branches in this
repo, not forks, since the workflow needs write access.)
