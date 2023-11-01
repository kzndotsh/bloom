// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function solution(root, value) {
  function search(root, value) {
    // if root is null, return null
    if (root === null) return null;
    // if value is less than node's value
    // move left
    else if (value < root.value) return search(root.left, value);
    // if value is more than node's value
    // move right
    else if (value > root.value) return search(root.right, value);
    // if value is equal to node's value
    // return node
    else return root;
  }

  let answer = search(root, value);

  if (answer) {
    return true;
  }
  return false;
}
