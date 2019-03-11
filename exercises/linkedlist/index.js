// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    } else {
      let node = this.head;
      while (node) {
        if (!node.next) {
          return node;
        }
        node = node.next;
      }
    }
  }

  clear() {
    return this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    } else {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      this.head = null;
      return;
    } else {
      let previous = this.head;
      let node = this.head.next;
      while(node.next) {
        previous = node;
        node = node.next;
      }
      previous.next = null;
    }
  }

  insertLast(data) {
    let last = this.getLast()
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
    // if (!this.head) {
    //   let newNode = new Node(data);
    //   return this.head = newNode;
    // }
    //
    // let newNode = new Node(data);
    // last.next = newNode;
  }

  getAt(i) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (i == counter) {
        return node;
      }
      node = node.next
      counter++;
    }
    return null;
  }

  removeAt(i) {
    if (!this.head) {
      return;
    }
    if (i === 0) {
      this.head = this.head.next;
      return;
    }
    let previous = this.getAt(i - 1);
    if(!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, i) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (i === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let previous = this.getAt(i - 1) || this.getLast();
    let node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
