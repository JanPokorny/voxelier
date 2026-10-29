// The undo stack itself, kept free of DOM/render imports so selfcheck can
// exercise it headlessly. history.ts captures and restores snapshots around it.
export type Snap = {
  rootJSON: string;
  uid: number;
  pathIds: string[];
  selection: string[];
  editId: string | null;
  collapsed: string[];
};

const MAX = 200; // cap on retained snapshots
const stack: Snap[] = [];
let index = -1; // position of the current state within stack

// A different document — or a remote edit no local snapshot contains — makes the
// stack unreplayable: drop it, and let the caller flush a fresh baseline.
export function reset(): void {
  stack.length = 0;
  index = -1;
}
export const top = (): Snap | undefined => stack[index];
export function push(snap: Snap): void {
  stack.length = index + 1; // drop any redo tail
  stack.push(snap);
  if (stack.length > MAX) stack.shift();
  index = stack.length - 1;
}
export function replaceTop(snap: Snap): void {
  if (index >= 0) stack[index] = snap;
}
export const back = (): Snap | null => index > 0 ? stack[--index] : null;
export const forward = (): Snap | null =>
  index < stack.length - 1 ? stack[++index] : null;
