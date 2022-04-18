const fetchProduct = require('../async.js');

// 비동기  테스트
describe('Async', () => {
  // 비동기 코드 테스트 시 끝나는 시점 명시(DoneCallback) : 더 느림
  it('async-done', (done) => {
    fetchProduct().then((item) => {
      // object를 비교할 때는 toEqual 사용
      expect(item).toEqual({ item: 'Milk', price: 200 });
      done();
    });
  });

  // 비동기 코드를 return : 더 빠르고 깔끔
  it('async-return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
  });

  // async-await : 더 빠르고 깔끔
  it('async-await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  // return-resolves : promise의 resolve 테스트
  it('async-resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({ item: 'Milk', price: 200 });
  });

  // return-rejects : promise의 reject 테스트
  it('async-resolves', () => {
    return expect(fetchProduct('error')).rejects.toEqual('network error');
  });
});
