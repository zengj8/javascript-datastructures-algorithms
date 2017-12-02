
/**
 * @name 优先队列的构造函数
 * @param {number}           capacity      - 容量
 */
function PriorityQueue(capacity) {
  if (capacity) {               // 总的容量
    this.capacity = capacity;
  } else {
    this.capacity = 30;
  }
  this.queue = [];               // 队列
}

/**
 * @name 优先队列的向下调整算法：当从优先队列中删除数据时，先删除该数据，然后用优先队列中最后一个的元素插入这个空位；接着，把这个空位尽量往上挪，直到剩余的数据变成一个优先队列
 * @param {number}           current         - 被下调节点的起始位置(一般为0，表示从第1个开始)
 * @param {number}           end             - 截至范围(一般为数组中最后一个元素的索引)
 */
PriorityQueue.prototype.filterDown = function(current, end) {
  let l = 2 * current + 1;          // 左孩子的位置
  let temp = this.queue[current];

  while (l <= end) {
    // "l"是左孩子，"l+1"是右孩子
    if (l < end && this.queue[l] < this.queue[l + 1])
      l ++;         // 左右两孩子中选择较大者，即this.queue[l+1]
    if (temp >= this.queue[l])
      break;        // 调整结束
    else {
      this.queue[current] = this.queue[l];
      current = l;
      l = 2 * l + 1;
    }
  }
  this.queue[current] = temp;
};

/**
 * @name 获取并删除优先队列队首元素
 * @return {Object}          - 返回队首元素或空
 */
PriorityQueue.prototype.remove = function() {
  // 如果队列已空，则返回null
  if (this.queue.length === 0)
    return null;

  let ret = this.queue[0];

  this.queue[0] = this.queue[this.queue.length - 1];           // 用最后元素填补
  this.queue.length --;
  this.filterDown(0, this.queue.length - 1);                 // 从队首开始自上向下调整为优先队列

  return ret;
};

/**
 * @name 优先队列的向上调整算法：将数据data添加到优先队列中。当队列已满的时候，添加失败；否则data添加到优先队列的末尾。然后通过上调算法重新调整队列，使之重新成为优先队列
 * @param {number}           current           - 当前节点的位置
 */
PriorityQueue.prototype.filterUp = function(current) {
  let parent = parseInt((current - 1) / 2);
  let temp = this.queue[current];

  while (current > 0) {
    if (this.queue[parent] >= temp)
      break;
    else {
      this.queue[current] = this.queue[parent];
      current = parent;
      parent = parseInt((parent - 1) / 2);
    }
  }
  this.queue[current] = temp;
};

/**
 * @name 将data插入到优先队列中
 * @param {Object}           data              - 插入数据
 * @return {number}          -1/0              - 失败/成功
 */
PriorityQueue.prototype.add = function(data) {
  // 如果队列已满，则返回
  if (this.queue.length === this.capacity)
    return -1;

  this.queue[this.queue.length] = data;             // 将数据插在表尾
  this.filterUp(this.queue.length - 1);             // 向上调整队列

  return 0;
};

/**
 * @name 获取但不删除队首元素
 * @return {Object}          - 返回队首元素或空
 */
PriorityQueue.prototype.peek = function() {
  if (this.queue.length === 0)
    return null;
  return this.queue[0];
};

/**
 * @name 打印优先队列
 */
PriorityQueue.prototype.print = function() {
  console.log(this.queue);
};


/**
 * @name 测试优先队列
 */
function test() {
  let priorityQueue = new PriorityQueue();
  let a = [10, 40, 30, 60, 90, 70, 20, 50, 80];

  console.log("== 依次添加: ");
  for(let i = 0; i < a.length; i ++) {
    process.stdout.write(a[i] + ' ');
    priorityQueue.add(a[i]);
  }
  console.log("\n== 优先队列: ");
  priorityQueue.print();
  
  console.log("\n== 队首: ", priorityQueue.peek());

  let i = 85;
  priorityQueue.add(i);
  console.log("\n== 添加元素: ", i);
  console.log("\n== 优先队列: ");
  priorityQueue.print();

  let element = priorityQueue.remove();
  console.log("\n== 删除元素: ", element);
  console.log("\n== 优先队列: ");
  priorityQueue.print();
}

test();
