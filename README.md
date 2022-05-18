# jest-basic

## Unit test and TDD

- Test Pyramid : Unit test > Integration test > E2E test
- TDD(Test Driven Development)
  - Create a failing test and implement features

<br>

## How to use jest

- [https://jestjs.io/](https://jestjs.io/)
  ```bash
  $ npm init --yes
  $ (sudo) npm install jest --global
  $ npm install --save-dev jest
  $ npm run test
  $ npm run test [실행하려는 테스트 파일]
  ```
- `package.json`
  ```json
  {
    "scripts": {
        "test": "jest --watchAll" // 모든 파일이 변경될 때마다 테스트 코드 실행
        "test": "jest --watch" // 파일에 수정 사항이 있을 때마다 테스트 코드 실행(git init 필수)
        "test": "jest --watchAll --verbose" // verbose 옵션 : 테스트 결과에 describe, test name이  보이도록
    }
  }
  ```
- APIs
  - Globals
    - beforeEach, beforeAll, afterEach, afterAll
    - describe, test, it
  - Expect
    - expect
    - toBe, toEqual, toHaveBeenCalledTimes, toHaveBeenCalledWith, etc.
- Async logic test - 4 ways
  - 비동기 코드 테스트 시 끝나는 시점 명시(DoneCallback) : slow
  - 비동기 코드를 return
  - async-await
  - return-resolves and return-rejects
- Mock
  - jest.mock([모듈 파일 위치])
  - jest.fn([함수 구현])
  - mock 구현(함수 대체)
    ```js
    실제모듈.mockImplementation(()=>{
        // 함수 대체
        return {
            함수명: mock 함수
        }
    })
    ```
  - Stub objects
    - 실제 ProductClient와 동일한 인터페이스를 가지면서 네트워크 통신을 필요로 하지 않는 테스트용 class

<br>

## Writing test code is a kind of documentation

- Example
  ```
  Stack
      ✓ is created empty (2 ms)
      ✓ allows to push item (1 ms)
      pop
          ✓ throws an error if stack is empty (7 ms)
          ✓ returns the last pushed item and removes it from the stack (1 ms)
      peek
          ✓ throws an error if stack is empty
          ✓ returns the last pushed item and removes it from the stack (1 ms)
  ```
