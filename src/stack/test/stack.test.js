const Stack = require('../stack.js');

// 테스트 코드 작성은 일종의 문서화
// Stack
// ✓ is created empty (2 ms)
// ✓ allows to push item (1 ms)
// pop
//   ✓ throws an error if stack is empty (7 ms)
//   ✓ returns the last pushed item and removes it from the stack (1 ms)
// peek
//   ✓ throws an error if stack is empty
//   ✓ returns the last pushed item and removes it from the stack (1 ms)

// 테스트 코드 작성으로 리팩토링 유리
// 버그가 발생하는 상황의 테스트 코드를 작성하여 버그 수정 유리, 같은 버그 재발생 방지

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  // 실패하는 테스트 하나 만들고 구현하기 반복
  it('is created empty', () => {
    expect(stack.size()).toBe(0);
  });

  it('allows to push item', () => {
    stack.push('🍊');
    expect(stack.size()).toBe(1); // Good

    // 테스트 코드는 내부 구현 사항을 테스트 해서는 안 된다!
    // expect(stack.array).toHaveLength(1); // Bad : array라는 변수명 바뀔 수 있음, 배열로 구현된 것이 아닐 수 있음
    // expect(stack.array).toContain('🍊'); // Bad : array라는 변수명 바뀔 수 있음, 배열로 구현된 것이 아닐 수 있음
    // 제공되는 interface를 이용해서 테스트해야 함
  });

  describe('pop', () => {
    it('throws an error if stack is empty', () => {
      // 콜백함수 전달 -> toThrow로 에러 테스트
      expect(() => stack.pop()).toThrow('Stack is empty');
    });

    it('returns the last pushed item and removes it from the stack', () => {
      stack.push('🍌');
      stack.push('🍎');
      expect(stack.size()).toBe(2);
      expect(stack.pop()).toBe('🍎');
      expect(stack.size()).toBe(1);
      expect(stack.pop()).toBe('🍌');
      expect(stack.size()).toBe(0);
    });
  });

  describe('peek', () => {
    it('throws an error if stack is empty', () => {
      expect(() => stack.peek()).toThrow('Stack is empty');
    });

    it('returns the last pushed item and removes it from the stack', () => {
      stack.push('🍌');
      stack.push('🍎');
      expect(stack.size()).toBe(2);
      expect(stack.peek()).toBe('🍎');
      expect(stack.size()).toBe(2);
    });
  });
});
