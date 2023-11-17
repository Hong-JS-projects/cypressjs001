import { loginController } from "../../controller/loginController";
import { PSURL, InputType, ButtonType, password } from "../../constant/constant";
import "cypress-xpath";

const demoLogin = new loginController(PSURL.demo107, "", "", ButtonType.button);

describe("Depost", async () => {
  beforeEach(() => {
    // Navigate to 9.1 Deposit page
    cy.wait(5000);
    cy.visit(
      "https://admin-demo-wl.568win.com/goV2/Transaction/Deposit/Waiting"
    );
  });
  it("succeeds when", () => {
    // Login From player site
    // demoLogin.Login({ username: "testbnd01", password: "1234qwer" });
    // cy.wait(2000);
    // cy.visit(`${PSURL.demo107}/deposit/bank-transfer`);

    // Go to BO and login as company account
    // cy.wait(10000);

    cy.xpath('//button[@type="button"]//span//span[text()="Verify"][1]');
    // const firstButton = document.querySelector('//button[@class="el-button el-button--success"][1]');
  });
});
