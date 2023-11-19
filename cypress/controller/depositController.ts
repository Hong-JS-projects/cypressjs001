import { DepositField } from "../Interface/deposit";
import { BaseURL } from "../utils/constant";
import { getIframeBody } from "../utils/helper";
export class DepositController implements DepositField {
  bankName: string;
  bankAccName: number;
  amount: number;

  constructor(deposit: DepositField) {
    this.bankName = deposit.bankName!;
    this.bankAccName = deposit.bankAccNumber!;
    this.amount = deposit.amount;
  }

  PlayerDepost(domain: string) {
    cy.visit(domain + "/deposit/bank-transfer");
    // check if the player used deposited
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

  // Verify deposit transaction
  verifyAndApproveDeposit() {
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
}
