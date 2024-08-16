class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  pop() {
    if (!this.head) return null;
    if (this.size === 1) {
      this.head = null;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.size--;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) return null;
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
  }

  insertAt(index, value) {
    if (index < 0 || index > this.size) return null;
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const newNode = new Node(value);
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    newNode.next = current;
    previous.next = newNode;
    this.size++;
  }
}

module.exports = LinkedList;
