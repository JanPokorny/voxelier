// Scene import/export as native JSON — the same lossless ser/de form used for
// localStorage persistence, so a round-trip preserves groups, transforms,
// colours and visibility. Export downloads a .json file; import reads one,
// replaces the document and resets the editor to the scene root.
import { S } from "./state.ts";
import { flush, sceneFromEnvelope, ser } from "./persistence.ts";
import { newDocument, open } from "./docs.ts";
import { settleEditor } from "./interaction.ts";
import { peekUid } from "./math.ts";

export function sceneEnvelope(): string {
  return JSON.stringify({
    uid: peekUid(),
    root: ser(S.root),
    collapsed: [...S.collapsed],
  });
}

// Hand a Blob to the browser as a file download. The object URL is revoked late:
// revoking right after click() cancels the download in some browsers.
export function download(blob: Blob, name: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

export function exportScene(): void {
  const name = S.root.name || "Project"; // matches the root's name in the scene tree
  // local-time stamp "YYYY-MM-DD HHhMMmSSs"
  const p = (n: number) => String(n).padStart(2, "0");
  const t = new Date();
  const stamp = `${t.getFullYear()}-${p(t.getMonth() + 1)}-${p(t.getDate())} ` +
    `${p(t.getHours())}h${p(t.getMinutes())}m${p(t.getSeconds())}s`;
  download(
    new Blob([sceneEnvelope()], { type: "application/json" }),
    `${name} -- ${stamp}.voxelier.json`,
  );
}

export async function openScene(json: string): Promise<void> {
  const d = JSON.parse(json) as { uid?: number };
  const tree = sceneFromEnvelope(d, false); // do not seed uid before old doc saves
  if (!tree) throw new Error("not a Voxelier scene file");
  settleEditor(); // commit a rename / stamp a lifted selection before the switch
  if (!flush()) throw new Error("could not save the current document");
  // An imported file joins the library as its own document rather than
  // overwriting the open scene; open() resolves once the new lock owns it.
  const fresh = newDocument(tree, d.uid);
  if (!await open(fresh.id, fresh.root, fresh.uid)) {
    throw new Error("could not take the edit lock for the imported document");
  }
}

export function importScene(): void {
  const inp = document.createElement("input");
  inp.type = "file";
  inp.accept = "application/json,.json";
  inp.onchange = () => {
    const file = inp.files && inp.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        await openScene(reader.result as string);
      } catch (e) {
        alert("Import failed: " + (e as Error).message);
      }
    };
    reader.readAsText(file);
  };
  inp.click();
}
