// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

class BST {
  constructor() {
    this.value = null;
  }

  insert(value) {
    // create a new node
    // initalize with value
    let newNode = new Tree(value);

    // if value is null
    // add node to tree
    // set as value
    if (this.value === null) {
      this.value = newNode;
    } else {
      // if value is not null
      // find correct position
      // add the new node
      this.insertNode(this.value, newNode);
    }
  }

  insertNode(node, newNode) {
    // if the value is less than the node value
    // move left of the tree
    if (newNode.value < node.value) {
      // if left is null, insert here
      if (node.left === null) {
        node.left = newNode;
      } else {
        // if left is not null
        // recur until null is found
        this.insertNode(node.left, newNode);
      }
    }

    // if the value is more than the node value
    // move right of the tree
    else {
      // if right is null, insert here
      if (node.right === null) {
        node.right = newNode;
      } else {
        // if right is not null
        // recur until null is found
        this.insertNode(node.right, newNode);
      }
    }
  }
}

function solution(values) {
  let answer = new BST();

  for (let val of values) {
    answer.insert(val);
  }

  return answer.value;
}
