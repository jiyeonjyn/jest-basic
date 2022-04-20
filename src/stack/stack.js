// class Stack {
//   constructor() {
//     this.array = [];
//   }

//   //TypeError: stack.size is not a function -> size 구현
//   size() {
//     return this.array.length;
//   }

//   // TypeError: stack.push is not a function -> push 구현
//   push(item) {
//     this.array.push(item);
//   }

//   pop() {
//     if (this.array.length === 0) throw new Error('Stack is empty');
//     return this.array.pop();
//   }

//   peek() {
//     if (this.array.length === 0) throw new Error('Stack is empty');
//     return this.array[this.size() - 1];
//   }
// }

class Node {
  constructor(item, next) {
    this.item = item; // 마지막 아이템
    this.next = next; // node(직전 아이템, node(직전 아이템, node(...)))
  }
}

class Stack {
  constructor() {
    // stack에서는 index가 굳이 필요하지 않으므로 배열 사용할 필요 없음
    this._size = 0; // size 함수와 구분
    this.head = null;
  }

  size() {
    return this._size;
  }

  push(item) {
    // item과 이전 노드를 노드에 담아 head로 지정
    const node = new Node(item, this.head);
    this.head = node;
    this._size++;
  }

  pop() {
    if (this.head === null) throw new Error('Stack is empty');
    // 노드에서 item 꺼내서 리턴, 이전 노드로 head 변경
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.item;
  }

  peek() {
    if (this.head === null) throw new Error('Stack is empty');
    return this.head.item;
  }
}

module.exports = Stack;
