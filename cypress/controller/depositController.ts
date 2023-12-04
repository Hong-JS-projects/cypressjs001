import { Deposit } from "../Interface/deposit";
import { BaseURL } from "../utils/constant";
import { getIframeBody } from "../utils/helper";

export class DepositController implements Deposit {
  bankName: string;
  bankAccName: number;
  amount: number;

  constructor(deposit: Deposit) {
    this.bankName = deposit.bankName!;
    this.bankAccName = deposit.bankAccNumber!;
    this.amount = deposit.amount;
  }
  //

  playerDeposit(domain: string) {
    cy.visit(domain + "/deposit/bank-transfer");
    // check if the player has already bank account
    cy.wait(3000);
    cy.get('input[class="el-input__inner"]')
      .eq(0)
      .then((bName) => {
        if (bName.attr("disabled")) {
          cy.get('input[class="el-input__inner"]').eq(2).type(`${this.amount}`);
        } else {
          cy.get('input[class="el-input__inner"]').eq(0).type(this.bankName);
          cy.get('input[class="el-input__inner"]')
            .eq(1)
            .type(`${this.bankAccName}`);
          cy.get('input[class="el-input__inner"]').eq(2).type(`${this.amount}`);
        }
      });

    cy.get('button[class="el-button el-button--primary is-round"]').click();
    expect(cy.url().should("eq", domain + "/transaction-history/deposit"));
  }
  // Player cancel deposit
  playerCancelDeposit(domain: string) {
    cy.visit(domain + "/transaction-history");
    cy.visit(domain + "/transaction-history/deposit");
    cy.get(
      'button[class="el-button el-button--danger el-button--small is-plain is-round"]'
    ).click();
  }

  // Verify deposit transaction
  operatorVerifyAndApproveDeposit() {
    cy.visit(BaseURL.boDemo + "/goV2/Transaction/Deposit/Waiting");
    // Verify deposit
    getIframeBody()
      .find('button[class="el-button el-button--success"]')
      .first()
      .click();
    getIframeBody()
      .find(' button[class="el-button el-button--primary"]')
      .should("have.text", "Verified")
      .click();
    // Approved deposit
    cy.wait(3000);
    cy.visit(BaseURL.boDemo + "/goV2/Transaction/Deposit/Verified");
    getIframeBody()
      .find('button[class="el-button el-button--success"]')
      .first()
      .click();
    getIframeBody()
      .find(' button[class="el-button el-button--primary"]')
      .should("have.text", "Approved")
      .click();
    cy.wait(3000);
  }

  //Player reject deposit requested
  operatorRejectDeposit() { }
}
