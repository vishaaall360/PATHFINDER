import { ROWS, COLS, grid, setStart, setEnd, startNode, endNode } from "./state.js";

const gridEl = document.getElementById("grid");
let mouseDown = false;

document.addEventListener("mousedown", () => mouseDown = true);
document.addEventListener("mouseup", () => mouseDown = false);

export function createGrid() {
  grid.length = 0;
  gridEl.innerHTML = "";

  for (let r = 0; r < ROWS; r++) {
    let row = [];
    for (let c = 0; c < COLS; c++) {
      const cell = document.createElement("div");
      cell.className = "node";
      cell.onmousedown = e => e.preventDefault();

      cell.addEventListener("mousedown", () => clickCell(r, c));
      cell.addEventListener("mouseenter", () => dragWall(r, c));

      gridEl.appendChild(cell);

      row.push({
        row: r,
        col: c,
        element: cell,
        wall: false,
        visited: false,
        parent: null
      });
    }
    grid.push(row);
  }
}

function clickCell(r, c) {
  const node = grid[r][c];

  if (!startNode) {
    setStart(node);
    node.element.classList.add("start");
    return;
  }

  if (!endNode && node !== startNode) {
    setEnd(node);
    node.element.classList.add("end");
  }
}

function dragWall(r, c) {
  if (!mouseDown) return;
  const node = grid[r][c];
  if (node === startNode || node === endNode) return;
  node.wall = true;
  node.element.classList.add("wall");
}
