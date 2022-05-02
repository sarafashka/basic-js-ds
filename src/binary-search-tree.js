const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root
  }
  
  add(data) {
    let newNode = new Node(data);
    if (this.root === null) {
        this.root = newNode;
    } else {
        this.addNode(this.root, newNode);
    }
  }
  
  addNode(node, newNode) {
    if (newNode.data < node.data) {
        node.left === null ? node.left = newNode : this.addNode(node.left, newNode);
 
    } else {
        node.right === null ?  node.right = newNode : this.addNode(node.right, newNode);
    }
  }
  
  has(data) {
    return hasData(data, this.root);
    function hasData(data, node) {
      if (node === null) {
        return false
      } else if (data < node.data) {
        return hasData(data, node.left)
      } else if (data > node.data) {
        return hasData(data, node.right)
      } else {
        return true
      }
    }
  }

  find(data) {
    return findData(data, this.root);
    function findData(data, node) {
      if (node === null) {
        return null
      } else if (data < node.data) {
        return findData(data, node.left)
      } else if (data > node.data) {
        return findData(data, node.right)
      } else {
        return node
      }
   }
  }



  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    return minData(this.root);
    function minData(node) {
      if (node.left === null) {
        return node.data
      } else return minData(node.left)  
    }
  }

max() {
    return maxData(this.root);
    function maxData(node) {
      if (node.right === null) {
        return node.data
      } else return maxData(node.right)  
    }
  }
}

module.exports = {
  BinarySearchTree
};