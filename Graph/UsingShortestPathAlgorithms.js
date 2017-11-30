// adjacent matrix
let graph = [[0, 2, 4, 0, 0, 0],
             [0, 0, 2, 4, 2, 0],
             [0, 0, 0, 0, 3, 0],
             [0, 0, 0, 0, 0, 2],
             [0, 0, 0, 3, 0, 2],
             [0, 0, 0, 0, 0, 0]];            

let shortestPath = new ShortestPath(graph);

console.log("********* Dijkstra's Algorithm - Shortest Path ***********");

let dist = shortestPath.dijkstra(0);

for (let i = 0; i < dist.length; i ++) {
  console.log(i + '\t\t' + dist[i]);
}

console.log("********* Floyd-Warshall Algorithm - All-Pairs Shortest Path ***********");

let INF = Number.MAX_SAFE_INTEGER;
graph = [[0, 2, 4, INF, INF, INF],
        [INF, 0, 2, 4, 2, INF],
        [INF, INF, 0, INF, 3, INF],
        [INF, INF, INF, 0, INF, 2],
        [INF, INF, INF, 3, 0, 2],
        [INF, INF, INF, INF, INF, 0]];

shortestPath = new ShortestPath(graph);

dist = shortestPath.floydWarshall();

let s = '';
for (let i = 0; i < dist.length; ++ i) {
  s = '';
  for (let j = 0; j < dist.length; ++ j) {
    if (dist[i][j] === INF)
      s += "INF ";
    else
      s += dist[i][j]+"   ";
  }
  console.log(s);
}
