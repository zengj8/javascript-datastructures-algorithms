/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 判断链表是否成环
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = function(head) {
  if (!head || !head.next) {
    return false;
  }
  let node = head;
  while (node) {
    if (node.next === head) {
      return true;
    }
    let temp = node.next;
    node.next = head;
    node = temp;
  }
  return false;
};

/**
 * 判断链表是否成环，如果不成环返回 null，否则求环的起始节点
 * 要求不使用额外空间，不更新链表
 * @param {ListNode} head
 * @return {ListNode}
 */
let detectCycle = function(head) {
  if (!head || !head.next ) {
    return null;
  }
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let tmp = head;
      while (tmp != slow) {
        tmp = tmp.next;
        slow = slow.next;
      }
      return slow;
    }
  }
  return null;
};

/**
 * 求两个单链表相交的起始节点
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
let getIntersectionNode = function(headA, headB) {
  if (!headA || !headB)
    return null;
  let a = headA, b = headB;
  while (a != b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};
