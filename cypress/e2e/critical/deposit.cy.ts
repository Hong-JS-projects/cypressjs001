import { loginController } from "../../controller/loginController";
import { BaseURL, ButtonType, password } from "../../utils/constant";
import { DepositController } from "../../controller/depositController";

const url: string = BaseURL.demo107;
const login = new loginController(
  url,
  { username: "testbnd04", password: password },
  ButtonType.button
);

const depost = new DepositController({
  amount: 2,
  bankAccNumber: 423,
  bankName: "newAccount",
});

describe("Depost", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    login.LoginToken();
    login.BOLogin({ username: "KHQADemoTesting", password: "1234qwer" });
  });
  //
  // it("Player depost and do cancel", () => {
  //   depost.playerDeposit(url);
  //   depost.playerCancelDeposit(url);
  //   cy.wait(4000);
  // });
  //
  it("Should be able player deposit and operator approved", () => {
    depost.playerDeposit(url);
    // Operator verify and Approve transaction
    depost.operatorVerifyAndApproveDeposit();
    // cy.visit(url + "/wallet");
  });
});
