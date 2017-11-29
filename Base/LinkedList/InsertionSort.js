
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
let insertionSort = function(head) {
  if (!head || !head.next)
    return head;
  let dummyHead = new ListNode(), p = head;
  dummyHead.next = head;
  while (p.next) {
    if (p.val < p.next.val) {
      p = p.next;
    } else {
      let temp = p.next, q = dummyHead;
      p.next = p.next.next;
      while (q.next.val < temp.val)
        q = q.next;
      temp.next = q.next;
      q.next = temp;
    }
  }
  return dummyHead.next;
};