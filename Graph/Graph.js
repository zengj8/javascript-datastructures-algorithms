function Graph() {

  let vertices = [];

  let adjList = new Dictionary();

  this.addVertex = function(v) {
    vertices.push(v);
    adjList.set(v, []); // initialize adjacency list with array as well;
  };

  this.addEdge = function(v, w) {
    adjList.get(v).push(w);
    // adjList.get(w).push(v); // commented to run the improved DFS with topological sorting
  };

  this.toString = function() {
    let s = '';
    for (let i = 0; i < vertices.length; i ++) {
      s += vertices[i] + ' -> ';
      let neighbors = adjList.get(vertices[i]);
      for (let j = 0; j < neighbors.length; j ++) {
        s += neighbors[j] + ' ';
      }
      s += '\n';
    }
    return s;
  };

  let initializeColor = function() {
    let color = {};
    for (let i = 0; i < vertices.length; i ++) {
      color[vertices[i]] = 'white';
    }
    return color;
  };

  this.bfs = function(v, callback) {

    let color = initializeColor(),
      queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      let u = queue.dequeue(),
        neighbors = adjList.get(u);
      color[u] = 'grey';
      for (let i = 0; i < neighbors.length; i ++) {
        let w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          queue.enqueue(w);
        }
      }
      color[u] = 'black';
      if (callback) {
        callback(u);
      }
    }
  };

  this.dfs = function(callback) {

    let color = initializeColor();

    for (let i = 0; i < vertices.length; i ++) {
      if (color[vertices[i]] === 'white') {
        dfsVisit(vertices[i], color, callback);
      }
    }
  };

  let dfsVisit = function(u, color, callback) {

    // grey被发现，刚从队列中拿出来
    // black已被探索，已将所有邻接点加入队列
    // white未被访问，刚要加入队列
    color[u] = 'grey';
    if (callback) {
      callback(u);
    }
    console.log('Discovered ' + u);
    let neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i ++) {
      let w = neighbors[i];
      if (color[w] === 'white') {
        dfsVisit(w, color, callback);
      }
    }
    color[u] = 'black';
    console.log('explored ' + u);
  };


  this.BFS = function(v) {

    // d[u]:v到u的距离
    // pred[u]:u的前缀点
    let color = initializeColor(),
      queue = new Queue(),
      d = {},
      pred = {};
    queue.enqueue(v);

    for (let i = 0; i < vertices.length; i ++) {
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }

    while (!queue.isEmpty()) {
      let u = queue.dequeue(),
        neighbors = adjList.get(u);
      color[u] = 'grey';
      for (let i = 0; i < neighbors.length; i ++) {
        let w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          d[w] = d[u] + 1;
          pred[w] = u;
          queue.enqueue(w);
        }
      }
      color[u] = 'black';
    }

    return {
      distances: d,
      predecessors: pred
    };
  };

  let time = 0;
  this.DFS = function() {

    // d[u]:顶点u的发现时间
    // f[u]:u的完成探索时间即顶点被标注为黑色是的时间
    // p[u]:顶点u的前溯点
    // 其中 1 <= d[u] < f[u] <= 2|V|
    let color = initializeColor(),
      d = {},
      f = {},
      p = {};
    time = 0;

    for (let i = 0; i < vertices.length; i ++) {
      f[vertices[i]] = 0;
      d[vertices[i]] = 0;
      p[vertices[i]] = null;
    }

    for (let i = 0; i < vertices.length; i ++) {
      if (color[vertices[i]] === 'white') {
        DFSVisit(vertices[i], color, d, f, p);
      }
    }

    return {
      discovery: d,
      finished: f,
      predecessors: p
    };
  };

  let DFSVisit = function(u, color, d, f, p) {

    console.log('discovered ' + u);
    color[u] = 'grey';
    d[u] = ++ time;
    let neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i ++) {
      let w = neighbors[i];
      if (color[w] === 'white') {
        p[w] = u;
        DFSVisit(w, color, d, f, p);
      }
    }
    color[u] = 'black';
    f[u] = ++ time;
    console.log('explored ' + u);
  };
}