function MinimumSpanningTree(graph) {

  this.graph = graph;

  let INF = Number.MAX_SAFE_INTEGER;

  let minKey = function (key, visited) {
    // Initialize min value
    let min = INF, minIndex;

    for (let v = 0; v < this.graph.length; v ++) {
      if (visited[v] == false && key[v] < min) {
        min = key[v];
        minIndex = v;
      }
    }

    return minIndex;
  };

  this.prim = function() {
    let parent = [],
      key = [],
      visited = [],
      length = this.graph.length;

    for (let i = 0; i < length; i ++) {
      key[i] = INF;
      visited[i] = false;
    }

    key[0] = 0;
    parent[0] = -1;

    for (let i = 0; i < length - 1; i ++) {
      let u = minKey(key, visited);
      visited[u] = true;

      for (let v = 0; v < length; v ++) {
        if (this.graph[u][v] && visited[v] == false && this.graph[u][v] < key[v]) {
          parent[v]  = u;
          key[v] = this.graph[u][v];
        }
      }
    }

    return parent;
  };

  let find = function(i, parent) {
    while(parent[i]) {
      i = parent[i];
    }
    return i;
  };

  let union = function(i, j, parent) {
    if(i != j) {
      parent[j] = i;
      return true;
    }
    return false;
  };

  let initializeCost = function() {
    let cost = [], length = this.graph.length;
    for (let i = 0; i < length; i++) {
      cost[i] = [];
      for (let j = 0; j < length; j++) {
        if (this.graph[i][j] == 0) {
          cost[i][j] = INF;
        } else {
          cost[i][j] = this.graph[i][j];
        }
      }
    }
    return cost;
  };

  this.kruskal = function() {

    let length = this.graph.length,
      parent = [], cost,
      ne = 0, a, b, u, v;

    cost = initializeCost();

    while(ne < length-1) {

      for (let i = 0, min = INF; i < length; i ++) {
        for (let j = 0; j < length; j ++) {
          if (cost[i][j] < min) {
            min = cost[i][j];
            a = u = i;
            b = v = j;
          }
        }
      }

      u = find(u, parent);
      v = find(v, parent);

      if (union(u, v, parent)) {
        ne ++;
      }

      cost[a][b] = cost[b][a] = INF;
    }

    return parent;
  }
}