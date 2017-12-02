
/**
 * @name 最大堆的构造函数
 * @param {number}           capacity      - 容量
 */
function MaxHeap(capacity) {
  if (capacity) {               // 总的容量
    this.capacity = capacity;
  } else {
    this.capacity = 30;
  }
  this.heap = [];               // 堆化数组
}

/**
 * @name 最大堆的向下调整算法：当从最大堆中删除数据时，先删除该数据，然后用最大堆中最后一个的元素插入这个空位；接着，把这个空位尽量往上挪，直到剩余的数据变成一个最大堆
 * @param {number}           current         - 被下调节点的起始位置(一般为0，表示从第1个开始)
 * @param {number}           end             - 截至范围(一般为数组中最后一个元素的索引)
 */
MaxHeap.prototype.filterDown = function(current, end) {
  let l = 2 * current + 1;          // 左孩子的位置
  let temp = this.heap[current];

  while (l <= end) {
    // "l"是左孩子，"l+1"是右孩子
    if (l < end && this.heap[l] < this.heap[l + 1])
      l ++;         // 左右两孩子中选择较大者，即this.heap[l+1]
    if (temp >= this.heap[l])
      break;        // 调整结束
    else {
      this.heap[current] = this.heap[l];
      current = l;
      l = 2 * l + 1;
    }
  }
  this.heap[current] = temp;
};

/**
 * @name 删除最大堆中的data
 * @param {Object}           data          - 删除数据
 * @return {number}          -1/0          - 失败/成功
 */
MaxHeap.prototype.remove = function(data) {
  // 如果"堆"已空，则返回-1
  if (this.heap.length === 0)
    return -1;

  let index = this.getIndex(data);
  if (index === -1)
    return -1;

  this.heap[index] = this.heap[this.heap.length - 1];           // 用最后元素填补
  this.heap.length --;
  this.filterDown(index, this.heap.length - 1);                 // 从index位置开始自上向下调整为最大堆

  return 0;
};

/**
 * @name 最大堆的向上调整算法：将数据data添加到最大堆中。当堆已满的时候，添加失败；否则data添加到最大堆的末尾。然后通过上调算法重新调整数组，使之重新成为最大堆
 * @param {number}           current           - 当前节点的位置
 */
MaxHeap.prototype.filterUp = function(current) {
  let parent = parseInt((current - 1) / 2);
  let temp = this.heap[current];

  while (current > 0) {
    if (this.heap[parent] >= temp)
      break;
    else {
      this.heap[current] = this.heap[parent];
      current = parent;
      parent = parseInt((parent - 1) / 2);
    }
  }
  this.heap[current] = temp;
};

/**
 * @name 将data插入到二叉堆中
 * @param {Object}           data              - 插入数据
 * @return {number}          -1/0              - 失败/成功
 */
MaxHeap.prototype.insert = function(data) {
  // 如果"堆"已满，则返回
  if (this.heap.length === this.capacity)
    return -1;

  this.heap[this.heap.length] = data;             // 将"数组"插在表尾
  this.filterUp(this.heap.length - 1);            // 向上调整堆

  return 0;
};

/**
 * @name 返回data在二叉堆中的索引
 * @param {Object}           data          - 插入数据
 * @return {number}          -1/i          - 不存在/data在堆化数组中的索引
 */
MaxHeap.prototype.getIndex = function(data) {
  for (let i = 0; i < this.heap.length; i ++) {
    if (data === this.heap[i])
      return i;
  }
  return -1;
};

/**
 * @name 打印二叉堆
 */
MaxHeap.prototype.print = function() {
  console.log(this.heap);
};


/**
 * @name 测试最大堆
 */
function test() {
  let maxHeap = new MaxHeap();
  let a = [10, 40, 30, 60, 90, 70, 20, 50, 80];

  console.log("== 依次添加: ");
  for(let i = 0; i < a.length; i ++) {
    process.stdout.write(a[i] + ' ');
    maxHeap.insert(a[i]);
  }
  console.log("\n== 最 大 堆: ");
  maxHeap.print();
  let i = 85;
  maxHeap.insert(i);
  console.log("\n== 添加元素: ", i);
  console.log("\n== 最 大 堆: ");
  maxHeap.print();
  i = 90;
  maxHeap.remove(i);
  console.log("\n== 删除元素: ", i);
  console.log("\n== 最 大 堆: ");
  maxHeap.print();
}

test();
