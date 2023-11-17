import { PSURL } from "../../constant/constant";
import { Register } from "../../controller/PSRegisterCotroller";

import "cypress-xpath";
const register = new Register(
  PSURL.demo185,
  "testbnd0",
  "1234qwer",
  "1234qwer"
);

describe("Register Account", () => {
  register.RegisterWithValidData();
});
