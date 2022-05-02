const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootData = null;
  }

  root() {
    return this.rootData;
  }
  
  add(data) {
    let newNode = new Node(data);
    if (this.rootData === null) {
        this.rootData = newNode;
    } else {
        this.addNode(this.rootData, newNode);
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
    return hasData(data, this.rootData);
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
    return findData(data, this.rootData);
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



  remove(data ) {
    return removeData(this.rootData, data);

    function removeData(node, data) {
      if (node === null) {
        return null
      } else if (data < node.data) {
        node.left = removeData(node.left, data)
        return node
      } else if  (data > node.data) {
        node.right = removeData(node.right, data)
        return node
      } else {
        
        //no child
        if (node.left ===null && node.right===null) {
          node = null; 
          return node
        };
        
        //one child
        if (node.left === null) {
          node = node.right;
          return node
        };
        if (node.right === null) {
          node = node.left;
          return node
        };
      };
      
      //two child
      let minNodeRight =  minData(node.right);
        function minData(node) {
          if (node.left === null) {
            return node.data
          } else return minData(node.left)  
        }
        node.data = minNodeRight;
        node.right = removeData(node.right, minNodeRight);
        return node     
    };     
  }
  
  min() {
    return minData(this.rootData);
    function minData(node) {
      if (node.left === null) {
        return node.data
      } else return minData(node.left)  
    }
  }

  max() {
    return maxData(this.rootData);
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