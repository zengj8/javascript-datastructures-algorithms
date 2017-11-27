function ArrayList() {

  let array = [];

  this.insert = function (item) {
    array.push(item);
  };

  let swap = function (array, index1, index2) {
    let aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
    //ES2015 swap - Firefox only, for other browser, uncomment code above and coment line below
    //[array[index1], array[index2]] = [array[index2], array[index1]];
  };

  this.toString = function () {
    return array.join();
  };

  this.array = function () {
    return array;
  };

  this.bubbleSort = function () {
    let length = array.length;

    for (let i = 0; i < length; i ++) {
      console.log('--- ');
      for (let j = 0; j < length - 1; j ++) {
        console.log('compare ' + array[j] + ' with ' + array[j + 1]);
        if (array[j] > array[j + 1]) {
          console.log('swap ' + array[j] + ' with ' + array[j + 1]);
          swap(array, j, j + 1);
        }
      }
    }
  };

  this.modifiedBubbleSort = function () {
    let length = array.length;

    for (let i = 0; i < length; i ++) {
      console.log('--- ');
      for (let j = 0; j < length - 1 - i; j ++) {
        console.log('compare ' + array[j] + ' with ' + array[j + 1]);
        if (array[j] > array[j + 1]) {
          console.log('swap ' + array[j] + ' with ' + array[j + 1]);
          swap(array, j, j + 1);
        }
      }
    }

  };

  this.selectionSort = function () {
    let length = array.length,
      indexMin;

    for (let i = 0; i < length - 1; i ++) {
      indexMin = i;
      console.log('index ' + array[i]);
      for (let j = i; j < length; j ++) {
        if (array[indexMin] > array[j]) {
          console.log('new index min ' + array[j]);
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        console.log('swap ' + array[i] + ' with ' + array[indexMin]);
        swap(array, i, indexMin);
      }
    }
  };

  this.insertionSort = function () {
    let length = array.length,
      j, temp;
    for (let i = 1; i < length; i ++) {
      j = i;
      temp = array[i];
      console.log('to be inserted ' + temp);
      while (j > 0 && array[j - 1] > temp) {
        console.log('shift ' + array[j - 1]);
        array[j] = array[j - 1];
        j--;
      }
      console.log('insert ' + temp);
      array[j] = temp;
    }
  };

  // 插入排序在排序小型数组时性能不错，所以可以用来排序桶内的数
  let insertionSort_ = function (array) {
    let length = array.length,
      j, temp;
    for (let i = 1; i < length; i ++) {
      j = i;
      temp = array[i];
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
  };

  this.mergeSort = function () {
    array = mergeSortRec(array);
  };

  let mergeSortRec = function (array) {

    let length = array.length;

    if (length === 1) {
      console.log(array);
      return array;
    }

    let mid = Math.floor(length / 2),
      left = array.slice(0, mid),
      right = array.slice(mid, length);

    return merge(mergeSortRec(left), mergeSortRec(right));
  };

  let merge = function (left, right) {
    let result = [],
      il = 0,
      ir = 0;

    while (il < left.length && ir < right.length) {

      if (left[il] < right[ir]) {
        result.push(left[il ++]);
      } else {
        result.push(right[ir ++]);
      }
    }

    while (il < left.length) {
      result.push(left[il ++]);
    }

    while (ir < right.length) {
      result.push(right[ir ++]);
    }

    console.log(result);

    return result;
  };

  this.quickSort = function () {
    quick(array, 0, array.length - 1);
  };

  // 创建两个指针分别指向数组第一项和最后一项
  // 移动左指针直到找到一个比 pivot 大的元素，接着移动右指针知道找到一个比 pivot 小的元素，然后 swap
  // 重复这个过程，直到左指针超过了右指针
  // 这时比 pivot 小的值都排在 pivot 之前；比 pivot 大的值都排在 pivot 之后
  let partition = function (array, left, right) {

    let pivot = array[Math.floor((right + left) / 2)],
      i = left,
      j = right;

    console.log('pivot is ' + pivot + '; left is ' + left + '; right is ' + right);

    while (i <= j) {
      while (array[i] < pivot) {
        i ++;
        console.log('i = ' + i);
      }

      while (array[j] > pivot) {
        j --;
        console.log('j = ' + j);
      }

      if (i <= j) {
        console.log('swap ' + array[i] + ' with ' + array[j]);
        swap(array, i, j);
        i ++;
        j --;
      }
    }

    return i;
  };

  // 以 end 为 pivot, 初始化两个指针指向 begin, low左边的都是比 end 小的, 最后的 low 就是所求的 partition
  let partition2 = function (nums, begin, end) {
    let low = begin, l = begin, r = end;
    while (l < r) {
      if (nums[l] < nums[r]) {
        [nums[l], nums[low]] = [nums[low], nums[l]];
        low ++;
      }
      l ++;
    }
    [nums[low], nums[r]] = [nums[r], nums[low]];
    return low;
  };

  let quick = function (array, left, right) {

    let index;

    if (array.length > 1) {

      index = partition(array, left, right);

      if (left < index - 1) {
        quick(array, left, index - 1);
      }

      if (index < right) {
        quick(array, index, right);
      }
    }
    return array;
  };

  // 构建大根堆，升序
  this.heapSort = function () {
    let heapSize = array.length;

    buildHeap(array);

    while (heapSize > 1) {
      heapSize--;
      console.log('swap (' + +array[0] + ',' + array[heapSize] + ')');
      swap(array, 0, heapSize);
      console.log('heapify ' + array.join());
      heapify(array, heapSize, 0);
    }
  };

  // 构建大根堆
  let buildHeap = function (array) {
    console.log('building heap');
    let heapSize = array.length;
    for (let i = Math.floor(array.length / 2); i >= 0; i --) {
      heapify(array, heapSize, i);
    }
    console.log('heap created: ' + array.join());
  };

  let heapify = function (array, heapSize, i) {
    let left = i * 2 + 1,
      right = i * 2 + 2,
      largest = i;

    if (left < heapSize && array[left] > array[largest]) {
      largest = left;
    }

    if (right < heapSize && array[right] > array[largest]) {
      largest = right;
    }

    console.log('Heapify Index = ' + i + ' and Heap Size = ' + heapSize);

    if (largest !== i) {
      console.log('swap index ' + i + ' with ' + largest + ' (' + +array[i] + ',' + array[largest] + ')');
      swap(array, i, largest);
      console.log('heapify ' + array.join());
      heapify(array, heapSize, largest);
    }
  };

  // 希尔排序
  // 该方法的基本思想是：
  // 先将整个待排元素序列分割成若干个子序列（由相隔某个"增量"的元素组成的）分别进行直接插入排序，
  // 然后依次缩减增量再进行排序，待整个序列中的元素基本有序（增量足够小）时，再对全体元素进行一次直接插入排序。
  // 因为直接插入排序在元素基本有序的情况下（接近最好情况），效率是很高的，因此希尔排序在时间效率上比前两种方法有较大提高。
  this.shellSort = function () {
    let n = array.length;
    for (let gap = parseInt(n / 2); gap > 0; gap = parseInt(gap / 2))
      for (let i = gap; i < n; i ++)
        for (let j = i - gap; j >= 0 && array[j] > array[j + gap]; j -= gap)
          swap(array, j, j + gap);
  };

  // 计数排序
  this.countingSort = function () {

    let i,
      maxValue = this.findMaxValue(),
      sortedIndex = 0,
      counts = new Array(maxValue + 1);

    for (i = 0; i < array.length; i ++) {
      if (!counts[array[i]]) {
        counts[array[i]] = 0;
      }
      counts[array[i]] ++;
    }

    console.log('Frequencies: ' + counts.join());

    for (i = 0; i < counts.length; i ++) {
      while (counts[i] > 0) {
        array[sortedIndex ++] = i;
        counts[i] --;
      }
    }
  };

  this.bucketSort = function (bucketSize) {

    let i,
      minValue = this.findMinValue(),
      maxValue = this.findMaxValue(),
      BUCKET_SIZE = 5;

    console.log('minValue ' + minValue);
    console.log('maxValue ' + maxValue);

    bucketSize = bucketSize || BUCKET_SIZE;
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = new Array(bucketCount);
    console.log('bucketSize = ' + bucketCount);
    for (i = 0; i < buckets.length; i ++) {
      buckets[i] = [];
    }

    for (i = 0; i < array.length; i ++) {
      buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
      console.log('pushing item ' + array[i] + ' to bucket index ' + Math.floor((array[i] - minValue) / bucketSize));
    }

    array = [];
    for (i = 0; i < buckets.length; i ++) {
      insertionSort_(buckets[i]);

      console.log('bucket sorted ' + i + ': ' + buckets[i].join());

      for (let j = 0; j < buckets[i].length; j ++) {
        array.push(buckets[i][j]);
      }
    }
  };

  // 基数排序（分布式排序）
  this.radixSort = function (radixBase) {

    let i,
      minValue = this.findMinValue(),
      maxValue = this.findMaxValue();

    radixBase = radixBase || 10;

    // 和两个数比大小一样，从个位开始排序
    let significantDigit = 1;
    while (((maxValue - minValue) / significantDigit) >= 1) {
      console.log('radix sort for digit ' + significantDigit);
      array = countingSortForRadix(array, radixBase, significantDigit, minValue);
      console.log(array.join());
      significantDigit *= radixBase;
    }
  };

  let countingSortForRadix = function (array, radixBase, significantDigit, minValue) {
    let i, countsIndex,
      counts = new Array(radixBase),
      aux = new Array(radixBase);

    for (i = 0; i < radixBase; i ++) {
      counts[i] = 0;
    }

    for (i = 0; i < array.length; i ++) {
      countsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
      counts[countsIndex] ++;
    }

    for (i = 1; i < radixBase; i ++) {
      counts[i] += counts[i - 1];
    }

    // 保证稳定排序
    for (i = array.length - 1; i >= 0; i --) {
      countsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
      aux[-- counts[countsIndex]] = array[i];
    }

    for (i = 0; i < array.length; i ++) {
      array[i] = aux[i];
    }

    return array;
  };

  this.findMaxValue = function() {
    let max = array[0];
    for (let i = 1; i < array.length; i ++) {
      if (max < array[i]){
        max = array[i];
      }
    }

    return max;
  };

  this.findMinValue = function() {
    let min = array[0];
    for (let i = 1; i < array.length; i ++) {
      if (min > array[i]){
        min = array[i];
      }
    }

    return min;
  };
}

module.exports = ArrayList;