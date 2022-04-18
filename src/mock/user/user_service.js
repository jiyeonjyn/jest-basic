class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLoggedIn = false;
  }

  login(id, password) {
    if (!this.isLoggedIn) {
      // userClient를 만들지 않고 userService 안에 네트워크 통신 로직을 넣으면
      // 네트워크 통신에 의존하기 때문에 단위 테스트 어려움
      //return fetch('http://example.com/login/id+password') //
      // .then((response) => response.json());
      return this.userClient
        .login(id, password) //
        .then((data) => (this.isLoggedIn = true));
    }
  }
}

module.exports = UserService;
