import { DemoLogin } from "../controller/loginCotroller";

const myLogin = new DemoLogin();
describe("Login", () => {
//   myLogin.invalidPassword();
//   myLogin.invalidUserName();
  myLogin.validLogin();
});
