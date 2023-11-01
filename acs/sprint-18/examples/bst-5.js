const BinarySearchTree = function () {
  const Node = function (key) {
    (this.key = key), (this.left = null), (this.right = null);
  };

  let root = null;

  let insertNode = function (node, newNode) {
    //If new value is less than the current
    if (newNode.key < node.key) {
      //If left is empty
      if (node.left === null) {
        node.left = newNode;
      } else {
        //Check for descendants
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        //If right is empty
        node.right = newNode;
      } else {
        //Check for descendants
        insertNode(node.right, newNode);
      }
    }
  };

  this.insert = function (key) {
    let newNode = new Node(key);
    //If no root then add at root
    if (root == null) {
      root = newNode;
    } else {
      //Find the appropriate place to insert the new node
      insertNode(root, newNode);
    }
  };

  this.search = (key, node = root) => {
    //If no element then return false
    if (node === null) {
      return false;
    }

    //Else recursively check if the key is present at any descendants
    if (key < node.key) {
      //Check the left descendants
      return this.search(key, node.left);
    } else if (key > node.key) {
      //Check the right descendants
      return this.search(key, node.right);
    } else {
      return true;
    }
  };

  this.min = (node = root) => {
    if (node) {
      //Return the left most descendant's value
      while (node && node.left !== null) {
        node = node.left;
      }

      return node.key;
    }

    return null;
  };

  this.max = (node = root) => {
    if (node) {
      //Return the right most descendant's value
      while (node && node.right !== null) {
        node = node.right;
      }

      return node.key;
    }

    return null;
  };

  this.remove = (key) => {
    root = removeNode(root, key);
  };

  const removeNode = (node, key) => {
    if (node === null) {
      return null;
    }

    //Recursively find the node with given key
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      //When a node is found with the given key
      //There are three different cases which need to be handled

      //Node is leaf or with no child
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      //Node with one child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      //Node with two child
      let aux = this.min(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };
};
