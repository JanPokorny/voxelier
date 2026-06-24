// Scene import/export as native JSON — the same lossless ser/de form used for
// localStorage persistence, so a round-trip preserves groups, transforms,
// colours and visibility. Export downloads a .json file; import reads one,
// replaces the document and resets the editor to the scene root.
import { S } from "./state.ts";
import { de, flush, ser } from "./persistence.ts";
import { peekUid, seedUid } from "./math.ts";
import { rebuild } from "./render.ts";
import { updateChrome } from "./ui.ts";
import { frameView } from "./camera.ts";
import { clearMeasure } from "./measure.ts";
import type { SceneNode } from "./types.ts";
import type { SerNode } from "./persistence.ts";

export function exportScene(): void {
  const data = JSON.stringify({ uid: peekUid(), root: ser(S.root) });
  const url = URL.createObjectURL(
    new Blob([data], { type: "application/json" }),
  );
  const name = S.root.name || "Project"; // matches the root's name in the scene tree
  // local-time stamp "YYYY-MM-DD HHhMMmSSs"
  const p = (n: number) => String(n).padStart(2, "0");
  const t = new Date();
  const stamp = `${t.getFullYear()}-${p(t.getMonth() + 1)}-${p(t.getDate())} ` +
    `${p(t.getHours())}h${p(t.getMinutes())}m${p(t.getSeconds())}s`;
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name} -- ${stamp}.voxelier.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function importScene(): void {
  const inp = document.createElement("input");
  inp.type = "file";
  inp.accept = "application/json,.json";
  inp.onchange = () => {
    const file = inp.files && inp.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const d = JSON.parse(reader.result as string) as {
          uid?: number;
          root?: SerNode;
        };
        if (!d || !d.root) throw new Error("not a Voxelier scene file");
        seedUid(d.uid || 1);
        S.root = de(d.root) as SceneNode;
        S.path = [S.root];
        S.editObject = null;
        S.selection.clear();
        S.measMode = false; // leave standalone measure mode (its field is now stale)
        clearMeasure();
        rebuild();
        updateChrome();
        frameView();
        flush(); // synchronous baseline undo snapshot for the imported scene
      } catch (e) {
        alert("Import failed: " + (e as Error).message);
      }
    };
    reader.readAsText(file);
  };
  inp.click();
}
