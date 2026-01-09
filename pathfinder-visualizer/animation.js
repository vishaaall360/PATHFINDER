import { grid, resetState } from "./state.js";
import { createGrid } from "./grid.js";

export function clearPath() {
  grid.flat().forEach(n => {
    n.visited = false;
    n.parent = null;
    n.element.classList.remove("visited", "path");
  });
}

export function resetGrid() {
  resetState();
  createGrid();
}

export async function drawPath(endNode) {
  let cur = endNode;
  while (cur.parent) {
    cur.element.classList.add("path");
    cur = cur.parent;
    await sleep(30);
  }
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}
