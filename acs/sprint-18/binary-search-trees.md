Basic tree terminology:

Node - Each single object or data point.
Root - The first and uppermost node in the tree from which all other nodes are derived from.
Edge - A connection between two nodes.
Parent - The immediate ancestor of a lower node.
child - The immediate descendant of a higher node.
Siblings - Two nodes on the same depth with the same parent.
Leafs - The bottommost nodes with no children.
Depth - The height of the tree measured in levels with the number of edges away from the root, so level 2 is only two edges away from the root.
Breadth - The width of the tree measured by the number of leafs.
Subtree - A node and its descendants which could be treated as an independent tree. For example, if we created a dictionary as a tree and used a search algorithm that looked at each item alphabetically we could use the node for section of the first letter as the root instead of looking at every item in the tree.

Notes on binary search trees:

- Each node has no more than two children
- These two children are often called left child and right child
- The value of left child is always less than the value of the parent node
- The value of right child is always greater than the value of the parent node
- A Binary tree is represented by a pointer to the topmost node (commonly known as the “root”) of the tree.
- If the tree is empty, then the value of the root is NULL.

Example node:

```javascript
class Node {
  constructor(value) {
    this.value = value; // value of the node
    this.left = null; // left child
    this.right = null; // right child
  }
}
```

Base requirements for a binary search tree:

- Adding a new value of the tree
- Finding for a value in the tree
- Removing a value from the tree
- Traversing the tree

The logic of deleting a node can be divided into three cases:

- Removing a node that doesn't have children
- Removing a node that has only one child
- Removing a node that has two children

Other operations:

- Finding the minimum value of the tree
- Finding the maximum value of the tree
- Finding the height of the tree
- Finding the number of nodes in the tree
- Finding the number of edges in the tree
- Find the level of a node in the tree

---

### Traversal:

Ways for traversing the binary search tree:

- Inorder traversal

Traverse the left subtree
Visit the root of the tree
Traverse the right subtree

```javascript
inOrder() {
  if (this.root === null) return null;
  const nodeList = [];
  const traverse = function(current) {
    if (current.left) traverse(current.left);
    nodeList.push(current.data);
    if (current.right) traverse(current.right);
  };
  traverse(this.root);
  return nodeList;
};

inOrder() {
  let visited = [],
      current = this.root;

  let traverse = node => {
    if (node.left) traverse(node.left);
    visited.push(node.val);
    if (node.right) traverse(node.right);
  };

  traverse(current);
  return visited;
}

const inorder = (root) => {
    const nodes = []
    if (root) {
        inorder(root.left)
        nodes.push(root.val)
        inorder(root.right)
    }
    return nodes
}
```

If root property is empty then return null
Create the variable nodeList to store the node value
Create the method traverse, this method takes a node as an argument
The traverse method is recursively called for all elements of the tree according to the algorithm that we announced earlier
And as a result, we return the nodeList variable

- Postorder traversal

Traverse the left subtree
Traverse the right subtree
Visit the root of the tree

```javascript
postOrder() {
  if (this.root === null) return null;
  const nodeList = [];
  const traverse = function(current) {
    if (current.left) traverse(current.left);
    if (current.right) traverse(current.right);
    nodeList.push(current.data);
  };
  traverse(this.root);
  return nodeList;
};

postOrder() {
  let visited = [],
      current = this.root;

  let traverse = node => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node.val);
  };

  traverse(current);
  return visited;
}

const postorder = (root) => {
    const nodes = []
    if (root) {
        postorder(root.left)
        postorder(root.right)
        nodes.push(root.val)
    }
    return nodes
}
```

If root property is empty then return null
Create the variable nodeList to store the node value
Create the method traverse, this method takes a node as an argument
The traverse method is recursively called for all elements of the tree according to the algorithm that we announced earlier
And as a result, we return the nodeList variable

- Preorder traversal

Visit the root of the tree
Traverse the left subtree
Traverse the right subtree

```javascript
preOrder() {
  if (this.root === null) return null;
  const nodeList = [];
  const traverse = function(current) {
    nodeList.push(current.data);
    if (current.left) traverse(current.left);
    if (current.right) traverse(current.right);
  };
  traverse(this.root);
  return nodeList;
}

preOrder() {
  let visited = [],
      current = this.root;

  let traverse = node => {
    visited.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(current);
  return visited;
}

const preorder = (root) => {
    const nodes = []
    if (root) {
        nodes.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }
    return nodes
}
```

If root property is empty then return null
Create the variable nodeList to store the node value
Create the method traverse, this method takes a node as an argument
The traverse method is recursively called for all elements of the tree according to the algorithm that we announced earlier
And as a result, we return the nodeList variable

---

- Breadth-First Search

Breadth-first search is characterized by the fact that it focuses on every item, from left to right, on every level before moving to the next.

There are three main parts to this, the current node, our list of visited nodes, and a basic queue for keeping track of which nodes we need to look at (we’ll just use an array since it’ll never get very long).

- Depth-First Search

Depth-first searches are more concerned with completing a traversal down the whole side of the tree to the leafs than completing every level.

There are three main ways to handle this, preOrder, postOrder, and inOrder but they’re just very slight modifications of each other to change the output order. Better yet, we don’t even need to worry about a queue anymore.

Depth-first traversal involves traversing a tree from top to bottom. They are implemented in a FILO manner (First In Last Out), like the stack data structure. The left sub-trees are traversed first, then the right sub-trees.

---

What is a Valid Binary Search Tree?

A valid binary search tree (BST) has ALL left children with values less than the parent node, and ALL right children with values greater than the parent node.

To verify if a tree is a valid binary search tree:

Define the min and max value the current node can have
If a node's value is not within those bounds, return false
Recursively validate the node's left children, with the max bound set to the node's value
Recursively validate the node's right children, with the min bound set to the node's value

---

Common questions:

Find Nodes at “k” Distance from the Root.
Check if given Preorder, In-order and Post order traversals are of the same tree.
Print postorder traversals from given Preorder traversals.
Implement Pre-order traversal without using recursion
Can you do iterative Preorder traversal of a binary tree without recursion?
What are advantages and disadvantages of BST?

References:

https://dev.to/alexandrshy/data-structures-binary-search-tree-in-javascript-3om9
https://dev.to/alexandrshy/data-structures-binary-search-tree-in-javascript-part-2-practice-18ei
https://weekendtutorial.com/binary-tree-the-best-5-coding-questions-you-must-solve/
https://www.digitalocean.com/community/tutorials/js-binary-search-trees
https://www.digitalocean.com/community/tutorials/js-tree-traversal
https://www.digitalocean.com/community/tutorials/js-trees
https://www.geeksforgeeks.org/binary-tree-data-structure/
https://medium.com/swlh/how-to-solve-a-js-binary-search-tree-problem-585673fc3287
https://itnext.io/data-structures-in-js-binary-trees-react-app-5443b951a46b
https://www.freecodecamp.org/news/binary-tree-algorithms-for-javascript-beginners/
https://jarednielsen.com/data-structure-tree-traversal/
https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/
https://www.30secondsofcode.org/js/s/data-structures-binary-tree/
https://www.30secondsofcode.org/js/s/data-structures-binary-search-tree/
https://www.geeksforgeeks.org/difference-between-binary-tree-and-binary-search-tree/
https://4db.github.io/2018/07/24/binary-tree-es6/
https://learnersbucket.com/tutorials/data-structures/tree-data-structure-in-javascript/
https://www.educative.io/blog/tree-traversal-algorithms
https://initjs.org/implement-a-binary-search-tree-in-javascript-952a44ee7c26
https://skilled.dev/course/binary-search-trees
