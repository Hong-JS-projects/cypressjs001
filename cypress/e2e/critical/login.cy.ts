import { BaseURL, ButtonType, password } from "../../constant/constant";
import { loginController } from "../../controller/loginController";
import "cypress-xpath";

const login = new loginController(
  BaseURL.demo185,
  { username: "testbnd0001", password: password },
  ButtonType.button
);
describe("Login", async () => {
  login.loginWithValidData();
  login.loginWithInValidData();
  login.loginWithEmptyData();
});
