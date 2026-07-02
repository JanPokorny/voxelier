// Terse element factory: create <tag>, assign the given properties (className,
// innerHTML, textContent, onclick, title, draggable…), append any children.
export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props: Partial<HTMLElementTagNameMap[K]> = {},
  ...kids: (globalThis.Node | string)[]
): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  Object.assign(e, props);
  if (kids.length) e.append(...kids);
  return e;
}
