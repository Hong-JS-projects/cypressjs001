import { BaseURL } from "../../utils/constant";
import { RegisterController } from "../../controller/registerController";

const register = new RegisterController(BaseURL.demo107, {
  username: "automatedtest01",
  password: "1234qwer",
  confirmPassword: "1234qwer",
  currency: 1,
});

describe("Register Account", () => {
  register.RegisterWithValidData();
});
