class ProductService {
  // Dependency Injection ★★★
  // productClient가 어떤 모듈의 인스턴스인지는 중요하지 않음
  constructor(productClient) {
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
