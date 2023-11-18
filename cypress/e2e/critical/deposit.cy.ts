import { loginController } from "../../controller/loginController";
import { BaseURL, ButtonType, password } from "../../utils/constant";
import "cypress-xpath";
import { DepositController } from "../../controller/depositController";

const url: string = BaseURL.demo107;
const login = new loginController(
  url,
  { username: "automatedtest01", password: password },
  ButtonType.button
);

const depost = new DepositController({
  amount: 2,
  bankAccNumber: 423,
  bankName: "JustTesting",
});

describe("Depost", () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720)
  })
  it("Should be able player deposit and operator approved", () => {
    login.LoginToken();
    cy.wait(3000);
    depost.PlayerDepost(url);
    cy.wait(3000);
    login.BOLogin({ username: "KHQADemoTesting", password: "1234qwer" });
    // Operator verify and Approve transaction
    depost.verifyAndApproveDeposit();

    login.LoginToken();
    cy.visit(url + "/wallet");
  });
});
