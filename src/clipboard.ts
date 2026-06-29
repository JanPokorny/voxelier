// A small shared clipboard for the two things the editor can copy: scene-tree
// nodes and voxel data (a normalised box list, min corner at the origin). It
// tracks which kind was copied last so paste can pick the right behaviour in
// either editing mode (see commands.ts / select.ts).
import type { Box3, Node } from "./types.ts";

export type ClipKind = "node" | "vox" | null;
let kind: ClipKind = null;
let nodes: Node[] = [];
let voxels: Box3[] = [];

export const clipKind = (): ClipKind => kind;

export function setNodeClip(ns: Node[]): void {
  nodes = ns;
  if (ns.length) kind = "node";
}
export const getNodeClip = (): Node[] => nodes;

export function setVoxClip(bs: Box3[]): void {
  voxels = bs;
  if (bs.length) kind = "vox";
}
export const getVoxClip = (): Box3[] => voxels;
