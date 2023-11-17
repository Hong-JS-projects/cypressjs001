import { PSURL, ButtonType, password } from "../../constant/constant";
import "cypress-xpath";
import { loginController } from "../../controller/loginController";


const login = new loginController(PSURL.demo185, 'testbnd00', password, ButtonType.button);
describe("Login", () => {
  login.loginWithValidData()
  login.loginWithInValidData()
  login.loginWithEmptyData()
});
