import { PSRegister } from "../Interface/register";
export class Register implements PSRegister {
  domain: string;
  username: string;
  password: string;
  confirmPassword: string;

  constructor(
    domain: string,
    username: string,
    password: string,
    confirmPassword: string
  ) {
    this.domain = domain;
    this.username = username;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

  public async RegisterWithValidData() {
    it("Should register successfully", () => {
      cy.visit(this.domain + "/register");
      cy.get('input[type="text"]').first().type(this.username);
      cy.get('input[type="password"]').first().type(this.password);
      cy.get('input[type="password"]').eq(1).type(this.confirmPassword);
      cy.get('input[type="text"]').eq(1).click();
      cy.get('li[class="el-select-dropdown__item"]').eq(4).click();
      cy.wait(4000)
      cy.get(
        'button[class="el-button el-button--primary is-round w-full rounded"]'
      ).click();
      cy.url().should("eq", this.domain + "/");
    });
  }
  RegisterWithInValidData() {
    it("Register with Invalid Data", () => {
      cy.visit(this.domain);
      cy.get("").type(this.username);
      cy.get("").type("");
    });
  }
  RegisterWithEmptyData() {
    it("Register with Invalid Data", () => {
      cy.visit(this.domain);
      cy.get("").type("");
      cy.get("").type("");
      cy.get("").type("");
    });
  }

  RegisterWithNotCurrency() {}
}
