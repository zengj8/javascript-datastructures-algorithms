let ArrayList = require('./SortingAlgorithm.js');

function createNonSortedArray(size){
  let array = new ArrayList();

  for (let i = size; i> 0; i--){
    array.insert(i);
  }

  return array;
}

function createRandomNonSortedArray(){
  let array = new ArrayList();

  array.insert(3);
  array.insert(5);
  array.insert(1);
  array.insert(6);
  array.insert(4);
  array.insert(7);
  array.insert(2);

  return array;
}

function printArray(array){
  console.log(array.toString());
}

function createNonSortedArrayAndPrint(size){
  let array = createNonSortedArray(size);
  printArray(array);

  return array;
}

console.log('********** Bubble Sort **********');

let array = createNonSortedArrayAndPrint(5);

array.bubbleSort();

printArray(array);

console.log('********** Modified Bubble Sort **********');

array = createNonSortedArrayAndPrint(5);

array.modifiedBubbleSort();

printArray(array);

console.log('********** Selection Sort **********');

array = createNonSortedArrayAndPrint(5);

array.selectionSort();

printArray(array);

console.log('********** Insertion Sort **********');

array = createNonSortedArrayAndPrint(5);

array.insertionSort();

printArray(array);

console.log('********** Merge Sort **********');

array = createNonSortedArrayAndPrint(8);

array.mergeSort();

printArray(array);

console.log('********** Quick Sort **********');
array = createRandomNonSortedArray();

printArray(array);

array.quickSort();

printArray(array);

console.log('********** Heap Sort **********');
array = createRandomNonSortedArray();

printArray(array);

array.heapSort();

printArray(array);

console.log('********** Shell Sort **********');
array = createRandomNonSortedArray();

printArray(array);

array.shellSort();

printArray(array);

console.log('********** Counting Sort **********');

array = createNonSortedArrayAndPrint(8);

array.countingSort();

printArray(array);

console.log('********** Bucket Sort **********');

array = createNonSortedArrayAndPrint(8);

array.bucketSort(3);

printArray(array);

console.log('********** Radix Sort **********');

array = new ArrayList();

array.insert(30);
array.insert(52);
array.insert(13);
array.insert(25);
array.insert(31);
array.insert(23);
array.insert(2);

array.radixSort();

console.log('Result: ');
printArray(array);
