// Scene import/export as native JSON — the same lossless ser/de form used for
// localStorage persistence, so a round-trip preserves groups, transforms,
// colours and visibility. Export downloads a .json file; import reads one,
// replaces the document and resets the editor to the scene root.
import { S } from './state.js';
import { ser, de, save } from './persistence.js';
import { peekUid, seedUid } from './math.js';
import { rebuild } from './render.js';
import { updateChrome } from './ui.js';
import { frameView } from './camera.js';
import { clearMeasure } from './measure.js';

export function exportScene() {
  const data = JSON.stringify({ uid: peekUid(), root: ser(S.root) });
  const url = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
  const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
  const a = document.createElement('a');
  a.href = url; a.download = `voxelier-${stamp}.json`; a.click();
  URL.revokeObjectURL(url);
}

export function importScene() {
  const inp = document.createElement('input');
  inp.type = 'file'; inp.accept = 'application/json,.json';
  inp.onchange = () => {
    const file = inp.files && inp.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const d = JSON.parse(reader.result);
        if (!d || !d.root) throw new Error('not a Voxelier scene file');
        seedUid(d.uid || 1); S.root = de(d.root);
        S.path = [S.root]; S.context = S.root; S.editObject = null; S.selection.clear();
        clearMeasure(); rebuild(); updateChrome(); frameView(); save();   // save() records an undo step
      } catch (e) {
        alert('Import failed: ' + e.message);
      }
    };
    reader.readAsText(file);
  };
  inp.click();
}
