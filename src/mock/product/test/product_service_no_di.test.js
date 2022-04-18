// No dependency injection ver. (BAD) - mock을 남용하는 예시
// 의존성 필요한 모듈 전체를 mock 처리
// 모듈에서 사용할 함수를 mock 함수로 구현 후 대체
const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');

jest.mock('../product_client'); // 임의의 product_client module

describe('ProductService', () => {
  // 임의의 비동기 함수
  const fetchItems = jest.fn(async () => [
    { item: '🥛', available: true },
    { item: '🍌', available: false },
  ]);
  // mock 구현(함수 대체)
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear(); // jest.config.js에서 clearMocks: false일 때 수동 clear를 위해 필요
    ProductClient.mockClear(); // jest.config.js에서 clearMocks: false일 때 수동 clear를 위해 필요
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: '🥛', available: true }]);
  });

  it('test', async () => {
    const items = await productService.fetchAvailableItems();

    // jest.config.js에서 clearMocks: true -> fetchAvailableItems 한 번 호출
    // jest.config.js에서 clearMocks: false -> fetchAvailableItems 두 번 호출(it()이 두 번 존재)
    expect(fetchItems).toHaveBeenCalledTimes(1);

    // expect의 인자로는 mock or spy function만 가능
  });
});
