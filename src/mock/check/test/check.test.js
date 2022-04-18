const check = require('../check');

describe('check', () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn(); // 임의의 onSuccess 함수
    onFail = jest.fn(); // 임의의 onFail 함수
  });

  it('should call onSuccess when predicate is true', () => {
    check(() => true, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1); // 호출된 횟수가 1인가
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // expect(onSuccess.mock.calls[0][0]).toBe('yes'); // 첫 번째로 호출된 함수의 첫 번째 인자가 'yes'인가
    expect(onSuccess).toHaveBeenCalledWith('yes');
    // expect(onFail.mock.calls.length).toBe(0); // 호출된 횟수가 0인가
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it('should call onFail when predicate is false', () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith('no');
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
