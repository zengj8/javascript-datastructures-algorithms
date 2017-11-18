let BinarySearchTree = require('./BinarySearchTree.js');

let tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

function printNode(node) {
  process.stdout.write(node.key.toString() + ' ');
}


// 基本思想：用栈模拟函数递归时的行为，没轮到的时候先存到栈里


function inOrderTraverse(root, callback) {
  if (!root) return;
  let nodes = [], cur = root, stack = [];
  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      nodes.push(cur);
      cur = cur.right;
    }
  }
  console.log('********* in-order transverse ***********');
  for (let i = 0; i < nodes.length; i ++)
    callback(nodes[i]);
  console.log();
}

function preOrderTraverse(root, callback) {
  if (!root) return;
  let nodes = [], cur = root, stack = [];
  while (stack.length || cur) {
    if (cur) {
      nodes.push(cur);
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop().right;
    }
  }
  console.log('********* pre-order transverse ***********');
  for (let i = 0; i < nodes.length; i ++)
    callback(nodes[i]);
  console.log();
}

// 先序输出的时候是【根左右】，后序输出是【左右根】
// 所以只需要按照先序遍历非递归的方法，输出的时候改改顺序即可
// 按【根右左】的顺序push到栈中，然后倒序输出
function postOrderTraverse(root, callback) {
  if (!root) return;
  let nodes = [], cur = root, stack = [];
  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      nodes.push(cur);
      cur = cur.right;
    } else {
      cur = stack.pop().left;
    }
  }
  nodes = nodes.reverse();
  console.log('********* post-order transverse ***********');
  for (let i = 0; i < nodes.length; i ++)
    callback(nodes[i]);
  console.log();
}

// 按上面的思路改进：用栈实现先根后右左的处理
// 因为左必须在右前，所以想到先跟后右左，最后倒序输出的办法
function postOrderTraverse_1(root, callback) {
  if (!root) return;
  let stack = [];
  stack.push(root);
  let node = null, nodes = [];
  while (stack.length) {
    node = stack.pop();
    nodes.push(node);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  nodes = nodes.reverse();
  console.log('********* post-order transverse ***********');
  for (let i = 0; i < nodes.length; i ++)
    callback(nodes[i]);
  console.log();
}

inOrderTraverse(tree.getRoot(), printNode);
preOrderTraverse(tree.getRoot(), printNode);
postOrderTraverse(tree.getRoot(), printNode);
postOrderTraverse_1(tree.getRoot(), printNode);

