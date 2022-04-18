// 재사용이 가능함(only 테스트용)
// mock이 아니라 실제 class임
// 실제 ProductClient와 동일한 인터페이스를 가지면서 네트워트 통신을 필요로 하지 않음
class StubProductClient {
  async fetchItems() {
    return [
      { item: '🥛', available: true },
      { item: '🍌', available: false },
    ];
  }
}

module.exports = StubProductClient;
