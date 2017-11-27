
/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let sortList = function(head) {
  if (!head || !head.next)
    return head;
  quickSort(head, null);
  return head;
};

// 以 head 为 pivot 进行 partition
function partition(head, end) {
  let p = head, q = p.next, val = head.val;

  while (q != end) {
    // 和以 end 为 pivot 不一样的地方在于
    // end 是先 swap 再移动指针，head 是先移动指针再 swap
    if (q.val < val) {
      p = p.next;
      [p.val, q.val] = [q.val, p.val];
    }
    q = q.next;
  }

  [p.val, head.val] = [head.val, p.val];
  return p;
}

// 效率没有 mergeSort 高, 对上百个重复 1 2 3 的数据 TLE了
function quickSort(head, end) {
  if (head != end) {
    let index = partition(head, end);
    quickSort(head, index);
    quickSort(index.next, end);
  }
}
