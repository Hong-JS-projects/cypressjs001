import { PSURL } from "../../constant/constant";
import { Register } from "../../controller/registerController";


const register = new Register(
  PSURL.demo185,
  "testbnd001",
  "1234qwer",
  "1234qwer"
);

describe("Register Account", () => {
  register.RegisterWithValidData();
});
