import { loginController } from "../../controller/loginController";
import { BaseURL, ButtonType, password } from "../../constant/constant";
import "cypress-xpath";
import { PlayerDeposit } from "../../controller/depositController";

const login = new loginController(
  BaseURL.demo185,
  { username: "testbnd002", password: password },
  ButtonType.button
);

const playerDeposit = new PlayerDeposit({
  amount: 10,
  bankAccNumber: 423,
  bankName: "JustTesting",
});

describe("Depost", () => {
  it("Depost", () => {
    login.LoginToken();
    cy.wait(4000)
    playerDeposit.PlayerDepost(BaseURL.demo185)
    cy.wait(4000)
    login.BOLogin({ username: "KHQADemoTesting", password: "1234qwer" });

    cy.wait(4000);
    cy.visit(BaseURL.boDemo + "/goV2/Transaction/Deposit/Waiting");
    const getIframeDocument = () => {
      return (
        cy
          .get("iframe")
          // Cypress yields jQuery element, which has the real
          // DOM element under property "0".
          // From the real DOM iframe element we can get
          // the "document" element, it is stored in "contentDocument" property
          // Cypress "its" command can access deep properties using dot notation
          // https://on.cypress.io/its
          .its("0.contentDocument")
          .should("exist")
      );
    };
    const getIframeBody = () => {
      // get the document
      return (
        getIframeDocument()
          // automatically retries until body is loaded
          .its("body")
          .should("not.be.undefined")
          // wraps "body" DOM element to allow
          // chaining more Cypress commands, like ".find(...)"
          .then(cy.wrap)
      );
    };
    getIframeBody()
      .find('button[class="el-button el-button--success"]')
      .first()
      .click();
    // getIframeBody()
    //   .find(' button[class="el-button el-button--primary"]')
    //   .should("have.text", "Verified")
    //   .click();

    // login.LoginToken()
  });
});
