function BinarySearchTree() {

  let Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  let root = null;

  this.insert = function(key) {

    let newNode = new Node(key);

    //special case - first element
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  let insertNode = function(root, newNode) {
    if (newNode.key < root.key) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        insertNode(root.right, newNode);
      }
    }
  };

  this.getRoot = function() {
    return root;
  };

  this.search = function(key) {

    return searchNode(root, key);
  };

  let searchNode = function(node, key) {

    if (node === null) {
      return false;
    }

    if (key < node.key) {
      return searchNode(node.left, key);

    } else if (key > node.key) {
      return searchNode(node.right, key);

    } else { //element is equal to node.item
      return true;
    }
  };

  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  };

  let inOrderTraverseNode = function (root, callback) {
    if (root !== null) {
      inOrderTraverseNode(root.left, callback);
      callback(root.key);
      inOrderTraverseNode(root.right, callback);
    }
  };

  this.preOrderTraverse = function(callback){
    preOrderTraverseNode(root, callback);
  };

  let preOrderTraverseNode = function (root, callback) {
    if (root !== null) {
      callback(root.key);
      preOrderTraverseNode(root.left, callback);
      preOrderTraverseNode(root.right, callback);
    }
  };

  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback);
  };

  let postOrderTraverseNode = function (root, callback) {
    if (root !== null) {
      postOrderTraverseNode(root.left, callback);
      postOrderTraverseNode(root.right, callback);
      callback(root.key);
    }
  };

  this.min = function() {
    return minNode(root);
  };

  let minNode = function (root) {
    if (root) {
      while (root && root.left !== null) {
        root = root.left;
      }

      return root.key;
    }
    return null;
  };

  this.max = function() {
    return maxNode(root);
  };

  let maxNode = function (root) {
    if (root){
      while (root && root.right !== null) {
        root = root.right;
      }

      return root.key;
    }
    return null;
  };

  this.remove = function(element) {
    root = removeNode(root, element);
  };

  let findMinNode = function(root) {
    while (root && root.left !== null) {
      root = root.left;
    }

    return root;
  };

  let removeNode = function(root, element) {

    if (root === null) {
      return null;
    }

    if (element < root.key) {
      root.left = removeNode(root.left, element);
      return root;

    } else if (element > root.key) {
      root.right = removeNode(root.right, element);
      return root;

    } else { // element is equal to node.item

      // handle 3 special conditions
      // 1 - a leaf node
      // 2 - a node with only 1 child
      // 3 - a node with 2 children

      // case 1
      if (root.left === null && root.right === null) {
        root = null;
        return root;
      }

      // case 2
      if (root.left === null) {
        root = root.right;
        return root;

      } else if (root.right === null) {
        root = root.left;
        return root;
      }

      // case 3
      // 将该节点替换为右子树最小的节点
      let aux = findMinNode(root.right);
      root.key = aux.key;
      root.right = removeNode(root.right, aux.key);
      return root;
    }
  };
}

module.exports = BinarySearchTree;