
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
let MergeSort = function(head) {
  if (!head || !head.next)
    return head;
  let p1 = head, p2 = head.next;
  
  // Find the midpoint
  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  p2 = MergeSort(p1.next);
  p1.next = null;
  p1 = MergeSort(head);
  return merge(p1, p2);
};

function merge(h1, h2) {
  let fakeHead = new ListNode(Number.MIN_VALUE), p = fakeHead;
  while (h1 && h2) {
    if (h1.val < h2.val) {
      p.next = h1;
      h1 = h1.next;
    } else {
      p.next = h2;
      h2 = h2.next;
    }
    p = p.next;
  }
  p.next = h1 ? h1 : h2;
  return fakeHead.next;
}
