function ShortestPath(graph) {

  this.graph = graph;

  let INF = Number.MAX_SAFE_INTEGER;

  let minDistance = function(dist, visited) {

    let min = INF,
      minIndex = -1;

    for (let v = 0; v < dist.length; v ++) {
      if (visited[v] == false && dist[v] <= min) {
        min = dist[v];
        minIndex = v;
      }
    }

    return minIndex;
  };

  this.dijkstra = function(src) {

    let dist = [],
      visited = [],
      length = this.graph.length;

    for (let i = 0; i < length; i ++) {
      dist[i] = INF;
      visited[i] = false;
    }

    dist[src] = 0;

    for (let i = 0; i < length - 1; i ++) {

      let u = minDistance(dist, visited);

      visited[u] = true;

      for (let v = 0; v < length; v ++) {
        if (!visited[v] && this.graph[u][v] != 0 && dist[u] != INF && dist[u] + this.graph[u][v] < dist[v]) {
          dist[v] = dist[u] + this.graph[u][v];
        }
      }
    }

    return dist;
  };

  this.floydWarshall = function() {

    let dist = [],
      length = this.graph.length;

    for (let i = 0; i < length; i++){
      dist[i] = [];
      for (let j = 0; j < length; j++){
        dist[i][j] = this.graph[i][j];
      }
    }

    for (let k = 0; k < length; k++){
      for (let i = 0; i < length; i++){
        for (let j = 0; j < length; j++){
          if (dist[i][k] + dist[k][j] < dist[i][j]){
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }

    return dist;
  }
}