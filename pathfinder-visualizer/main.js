import { createGrid } from "./grid.js";
import { clearPath, resetGrid } from "./animation.js";
import { startNode, endNode } from "./state.js";
import { bfs } from "./algorithms/bfs.js";

createGrid();

document.getElementById("visualizeBtn").onclick = async () => {
  if (!startNode || !endNode) {
    alert("Place start and end nodes");
    return;
  }
  clearPath();
  await bfs();
};

document.getElementById("clearBtn").onclick = clearPath;
document.getElementById("resetBtn").onclick = resetGrid;
