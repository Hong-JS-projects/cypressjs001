import { PSURL, ButtonType, password } from "../../constant/constant";
import "cypress-xpath";
import { loginController } from "../../controller/loginCotroller";

const login = new loginController(PSURL.demo185, 'testbnd01', password, ButtonType.button);

describe("Login", () => {
  login.loginWithValidData()
  login.loginWithInValidData()
  login.loginWithEmptyData()
});
