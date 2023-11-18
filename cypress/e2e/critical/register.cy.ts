import { BaseURL } from "../../constant/constant";
import { Register } from "../../controller/registerController";

const register = new Register(BaseURL.demo107, {
  username: "test00001",
  password: "1234qwer",
  confirmPassword: "1234qwer",
  currency: 2,
});

describe("Register Account", () => {
  register.RegisterWithValidData();
});
