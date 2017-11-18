
var findKthLargest = function(nums, k) {
  return findKthSmallest(nums, 0, nums.length - 1, nums.length + 1 - k);
};

function findKthSmallest(nums, begin, end, k) {
  let pivot = partition(nums, begin, end);
  if (pivot + 1 === k) {
    return nums[pivot];
  } else if (pivot + 1 > k) {
    return findKthSmallest(nums, begin, pivot - 1, k);
  } else {
    return findKthSmallest(nums, pivot + 1, end, k);
  }
}

// 以 end 为 pivot
function partition(nums, begin, end) {
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
}

// console.log(findKthLargest([3,2,1,5,6,4], 2));

