import { BaseURL, ButtonType, password } from "../../utils/constant";
import { loginController } from "../../controller/loginController";
import "cypress-xpath";

const login = new loginController(
  BaseURL.demo107,
  { username: "automatedtest01", password: password },
  ButtonType.button
);
describe("Login", async () => {
  login.loginWithValidData();
  // login.loginWithInValidData();
  // login.loginWithEmptyData();
});
