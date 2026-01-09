# System Design Document – Pathfinding Visualizer

## 1. Design Overview
The Pathfinding Visualizer follows a modular frontend design using JavaScript ES modules. Each module is responsible for a specific functionality.

## 2. Module Description

### 2.1 State Module
- Stores shared application state
- Maintains grid, start node, and end node

### 2.2 Grid Module
- Creates and renders the grid
- Handles mouse interactions
- Manages wall creation

### 2.3 Animation Module
- Clears paths
- Animates traversal and final path

### 2.4 Algorithm Modules
- Implement BFS, DFS, Dijkstra, and A*
- Use shared state and animation functions

### 2.5 Main Controller
- Initializes the application
- Handles UI events
- Triggers algorithm execution

## 3. Data Flow
User Input → Grid Update → Algorithm Execution → Animation → Output Visualization

## 4. Design Principles
- Separation of concerns
- Reusability
- Readability
- Scalability

## 5. UI Design
The interface is minimal, clean, and focused on clarity. Color coding is used to differentiate node states.

## 6. Future Design Improvements
- Add performance metrics
- Improve mobile responsiveness
- Introduce advanced maze patterns
