# 🧭 Pathfinding Visualizer

This project is an interactive Pathfinding Visualizer built using HTML, CSS, and JavaScript with a modular ES module architecture. It allows users to place start and end nodes, draw obstacles, and visualize how different pathfinding algorithms explore a grid to find the shortest path. The application provides real-time animated feedback, making it a useful learning tool for understanding graph traversal and shortest-path algorithms used in real-world navigation and AI systems.

## Features
- Interactive grid-based interface
- Place start and end nodes using mouse clicks
- Draw walls (obstacles) by dragging the mouse
- Visualize multiple pathfinding algorithms
- Real-time animated exploration and path rendering
- Clean and responsive user interface

## Algorithms Implemented
- Breadth First Search (BFS)
- Depth First Search (DFS)
- Dijkstra’s Algorithm
- A* (A-Star) Algorithm

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES Modules)

## Project Structure
pathfinding-visualizer/
├── index.html
├── style.css
├── main.js
├── state.js
├── grid.js
├── animation.js
├── algorithms/
│   ├── bfs.js
│   ├── dfs.js
│   ├── dijkstra.js
│   └── astar.js
├── maze/
│   └── randomMaze.js
└── README.md

## How to Run the Project
1. Clone the repository:
   git clonegit clone https://github.com/vishaaall360/PATHFINDER.git

2. Navigate into the project folder:
   cd pathfinding-visualizer

3. Start a local development server:
   python -m http.server

4. Open your browser and visit:
   http://localhost:8000

Important: Do not open index.html directly using file:// because ES modules require an HTTP server.

## How to Use
- Click on any cell to place the Start node
- Click on another cell to place the End node
- Click and drag across the grid to create walls
- Select an algorithm from the dropdown menu
- Click the Visualize button to see the algorithm in action
- Use Clear Path to remove the animation
- Use Reset Grid to clear everything

## Learning Outcomes
- Understanding of graph traversal algorithms
- Visualization of shortest-path computation
- Hands-on experience with modular JavaScript
- Practical exposure to algorithm animation and UI interaction

## Future Enhancements
- Maze generation algorithms
- Speed control slider
- Diagonal movement support
- Weighted nodes
- Mobile responsiveness
- Deployment using GitHub Pages

## License
This project is licensed under the MIT License.

## Author
S.VISHAAL 
GitHub: https://github.com/vishaall360
