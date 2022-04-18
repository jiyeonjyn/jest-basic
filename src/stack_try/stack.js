class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  header;
  length = 0;
  constructor(...args) {
    this.push(...args);
  }

  push(...args) {
    args.map((arg) => {
      const node = new Node(arg, this.header);
      this.header = node;
      this.length += 1;
    });
  }

  pop() {
    if (this.header == null) return undefined;

    const value = this.header.value;
    this.header = this.header.next;
    this.length -= 1;
    return value;
  }
}

module.exports = Stack;
