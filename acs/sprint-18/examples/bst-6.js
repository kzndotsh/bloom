//Node
class Node {
  constructor(key) {
    (this.key = key), (this.left = null), (this.right = null);
  }
}

//BST
class BST {
  constructor() {
    this.root = null;
  }

  insertNode = (node, newNode) => {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  };

  //Insert
  insert = (key) => {
    let newNode = new Node(key);

    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  };

  //Search
  search = (key, node = this.root) => {
    if (node === null) {
      return false;
    }

    if (key < node.key) {
      return this.search(key, node.left);
    } else if (key > node.key) {
      return this.search(key, node.right);
    } else {
      return true;
    }
  };

  //Min
  min = (node = this.root) => {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }

      return node.key;
    }

    return null;
  };

  //Max
  max = (node = this.root) => {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }

      return node.key;
    }

    return null;
  };

  //Remove
  remove = (key) => {
    this.root = this.removeNode(this.root, key);
  };

  removeNode = (node, key) => {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = this.min(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  };
}
