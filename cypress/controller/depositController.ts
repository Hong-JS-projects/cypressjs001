import { DepositField } from "../Interface/deposit";
import { BaseURL } from "../constant/constant";

export class PlayerDeposit {
  bName: string;
  BAN: number;
  amount: number;

  constructor(deposit: DepositField) {
    this.bName = deposit.bankName;
    this.BAN = deposit.bankAccNumber;
    this.amount = deposit.amount;
  }

  PlayerDepost(domain: string) {
    cy.visit(domain + "/deposit/bank-transfer");
    const bankName = cy.get('input[class="el-input__inner"]').eq(0);
    const bankNumber = cy.get('input[class="el-input__inner"]').eq(1);
    if (bankName.should("be.empty") && bankNumber.should("be.empty")) {
      cy.get('input[class="el-input__inner"]').eq(2).type("100");
    } else {
      bankName.type("testing");
      bankNumber.type("123452");
      cy.get('input[class="el-input__inner"]').eq(2).type("100");
    }
    cy.get('button[class="el-button el-button--primary is-round"]').click();
    expect(cy.url().should("eq", domain + "/transaction-history/deposit"));
  }
}
