import { grid, startNode, endNode } from "../state.js";
import { drawPath } from "../animation.js";

export async function bfs() {
  let q = [startNode];
  startNode.visited = true;

  while (q.length) {
    let cur = q.shift();
    if (cur === endNode) {
      drawPath(endNode);
      return;
    }

    for (let [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]) {
      let r = cur.row + dr;
      let c = cur.col + dc;
      if (grid[r]?.[c] && !grid[r][c].visited && !grid[r][c].wall) {
        let n = grid[r][c];
        n.visited = true;
        n.parent = cur;
        n.element.classList.add("visited");
        q.push(n);
        await new Promise(r => setTimeout(r, 15));
      }
    }
  }
}
