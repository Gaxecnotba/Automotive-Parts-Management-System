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
}
