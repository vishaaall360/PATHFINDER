export const ROWS = 20;
export const COLS = 25;

export let grid = [];
export let startNode = null;
export let endNode = null;

export function setStart(node) {
  startNode = node;
}

export function setEnd(node) {
  endNode = node;
}

export function resetState() {
  startNode = null;
  endNode = null;
}
