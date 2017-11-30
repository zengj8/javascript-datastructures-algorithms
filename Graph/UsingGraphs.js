let graph = new Graph();

let myVertices = ['A','B','C','D','E','F','G','H','I'];

for (let i = 0; i < myVertices.length; i ++) {
  graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log('********* printing graph ***********');

console.log(graph.toString());

console.log('********* bfs ***********');

function printNode(value) {
  console.log('Visited vertex: ' + value);
}

graph.bfs(myVertices[0], printNode);

console.log('********* dfs ***********');

graph.dfs();

console.log('********* shortest path - BFS ***********');
let shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA.distances);
console.log(shortestPathA.predecessors);

//from A to all other vertices
let fromVertex = myVertices[0];

for (let i = 1; i < myVertices.length; i ++) {
  let toVertex = myVertices[i],
    path = new Stack();
  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  path.push(fromVertex);
  let s = path.pop();
  while (!path.isEmpty()) {
    s += ' - ' + path.pop();
  }
  console.log(s);
}

console.log('********* topological sort - DFS ***********');

// let result = graph.DFS();
// console.log(result.discovery);
// console.log(result.finished);
// console.log(result.predecessors);

graph = new Graph();

myVertices = ['A','B','C','D','E','F'];
for (let i = 0; i < myVertices.length; i ++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');


let result = graph.DFS();
console.log(result.discovery);
console.log(result.finished);
console.log(result.predecessors);

let fTimes = result.finished;
let s = '';
for (let count = 0; count < myVertices.length; count ++) {
  let max = 0;
  let maxName = null;
  for (let i = 0; i < myVertices.length; i ++) {
    if (fTimes[myVertices[i]] > max) {
      max = fTimes[myVertices[i]];
      maxName = myVertices[i];
    }
  }
  s += ' - ' + maxName;
  delete fTimes[maxName];
}
console.log(s);
