const Stack = require('../stack.js');

describe('Stack', () => {
  describe('Test push by length', () => {
    it('is 2 after new Stack() -> push(1) -> push(1)', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(1);
      expect(stack.length).toBe(2);
    });

    it('is 3 after new Stack(undefined) -> push(1) -> push(1)', () => {
      const stack = new Stack(undefined);
      stack.push(1);
      stack.push(1);
      expect(stack.length).toBe(3);
    });

    it('is 3 after new Stack(1) -> push(1) -> push(1)', () => {
      const stack = new Stack(undefined);
      stack.push(1);
      stack.push(1);
      expect(stack.length).toBe(3);
    });

    it('is 1 after new Stack([1, 1, 1])', () => {
      const stack = new Stack([1, 1]);
      expect(stack.length).toBe(1);
    });

    it('is 3 after new Stack(1, 1, 1)', () => {
      const stack = new Stack(1, 1, 1);
      expect(stack.length).toBe(3);
    });
  });

  describe('Test pop', () => {
    let stack;
    beforeEach(() => {
      stack = new Stack();
    });

    it('returns undefined right after constructed without args (doing length check)', () => {
      expect(stack.pop()).toBe(undefined);
      expect(stack.length).toBe(0);
    });

    it('returns 2, 1, undefined orderly after push(1) -> push(2) (doing length check)', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).toEqual(2);
      expect(stack.length).toBe(1);
      expect(stack.pop()).toBe(1);
      expect(stack.length).toBe(0);
      expect(stack.pop()).toBe(undefined);
      expect(stack.length).toBe(0);
    });

    it('returns [1, 2] after push([1, 2])', () => {
      stack.push([1, 2]);
      expect(stack.pop()).toEqual([1, 2]);
    });

    it('returns 2, 1, undefined orderly after push(1, 2)', () => {
      stack.push(1, 2);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
      expect(stack.pop()).toBe(undefined);
    });
  });
});
