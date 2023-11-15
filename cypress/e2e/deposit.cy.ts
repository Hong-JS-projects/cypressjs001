import { DemoLogin, BOLogin } from "../controller/loginCotroller";
import { PSURL } from "../constant/constant";
const demoLogin = new DemoLogin();
describe("Depost", async () => {
  it("succeeds when", () => {
    // Login From player site
    // demoLogin.Login({ username: "testbnd01", password: "1234qwer" });
    // cy.wait(2000);
    // cy.visit(`${PSURL.demo107}/deposit/bank-transfer`);

    // Go to BO and login as company account
    // cy.wait(10000);
    BOLogin();

    // Navigate to 9.1 Deposit page
    cy.wait(5000);
    cy.visit(
      "https://admin-demo-wl.568win.com/goV2/Transaction/Deposit/Waiting"
    );
    cy.wait(2000);
    const test = cy.get("button .el-button .el-button--success").contains('Verify').first();
    cy.log(`${test}`)
  });
});
