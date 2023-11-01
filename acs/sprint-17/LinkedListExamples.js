import { Node } from "./model";
import { defaultEquals } from "./utils";

export class LinkedList {
  constructor(equals = defaultEquals) {
    this.equals = equals;
    this.head = null;
    this.count = 0;
  }

  add(element) {
    const node = new Node(element);
    if (this.size === 0) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }

    this.count++;
  }

  _isIndexWithinBound(index) {
    return index >= 0 && index <= this.count;
  }

  _getNodeAt(index) {
    if (this._isIndexWithinBound(index)) {
      let currentNode = this.head;
      for (let i = 0; i < index && currentNode !== null; i++) 
      {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
    return undefined;
  }

  getAt(index) {
    const node = this._getNodeAt(index);
    return node && node.data;
  }

  insertAt(element, index) {
    if (this._isIndexWithinBound(index)) {
      const node = new Node(element);

      if (index === 0) {
        const currentNode = this.head;
        node.next = currentNode;
        this.head = node;
      } else {
        const previousNode = this._getNodeAt(index - 1);
        node.next = previousNode.next;
        previousNode.next = node;

      }

      this.count++;

      return true;
    }
    throw new Error(
      `IndexOutOfBoundError: Provided index ${index} is not 
        within bounds[${0} - ${
        this.size
      }] of LinkedList`
    );
  }

  addFirst(element) {
    return this.insertAt(element, 0);
  }

  addLast(element) {
    return this.insertAt(element, this.count);
  }

  removeAt(index) {
    if (this._isIndexWithinBound(index)) {
      let currentNode = this.head;
      if (index === 0) {
        this.head = currentNode.next;
      } else {
        const previousNode = this._getNodeAt(index - 1);
        currentNode = previousNode.next;
        previousNode.next = currentNode.next;
      }
      this.count--;
      return currentNode.data;
    }
    return undefined;
  }

  indexOf(element) {
    let currentNode = this.head;
    for (let i = 0; i < this.count && currentNode != null; 
    i++) {
      if (this.equals(element, currentNode.data)) {
        return i;
      }
      currentNode = currentNode.next;
    }

    return -1;
  }

  remove(element) {
    const elementIndex = this.indexOf(element);
    return this.removeAt(elementIndex);
  }

  isEmpty() {
    return this.size === 0;
  }

  get size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.getAt(this.size - 1);
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  *[Symbol.iterator]() {
    let currentNode = this.head;
    while (currentNode) {
      yield currentNode.data;
      currentNode = currentNode.next;
    }
  }

  toString() {
    return `[${[...this].toString()}]`;
  }
}

