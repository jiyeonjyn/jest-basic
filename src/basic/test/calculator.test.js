const Calculator = require('../calculator.js');

// test('add', () => {
//   const cal = new Calculator();
//   expect(cal.value).toBe(0);
// });

describe('Calculator', () => {
  // test, it 모두 가능(calculator를 가리킴)
  // 각 테스트마다 새로운 object 만들어서 테스트(테스트의 독립성 유지)
  // -> 코드 중복 피하는 법? beforeEach, afterEach 사용
  // beforeEach, afterEach : 각 테스트 실행 전/후에 실행됨
  // beforAll, afterAll : 모든 테스트가 실행되기 전에, 모든 테스트가 실행된 후에 실행됨

  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('adds', () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it('add should throw an error if value is greater than 100', () => {
    // expect(() => {
    //   cal.add(101);
    // }).toThrow();
    // expect(() => {
    //   cal.add(101);
    // }).toThrow(Error);
    // expect(() => {
    //   cal.add(101);
    // }).toThrow('Value can not be greater than 100');
    expect(() => {
      cal.add(101);
    }).toThrow(/100/);
  });

  it('subtracts', () => {
    cal.subtract(2);
    expect(cal.value).toBe(-2);
  });

  it('multiplies', () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('4 / 4 === 1', () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
