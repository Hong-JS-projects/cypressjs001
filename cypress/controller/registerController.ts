import { PSRegister } from "../Interface/register";
import { UserInfo } from "../Interface/userInfo";

export class Register implements PSRegister {
  domain: string;
  username: string;
  password: string;
  confirmPassword: string;
  currency?: number;

  constructor(domain: string, userInfo: UserInfo) {
    this.domain = domain;
    this.username = userInfo.username;
    this.password = userInfo.password;
    this.confirmPassword = userInfo.confirmPassword!;
    this.currency = userInfo.currency!;
  }
  // private methods
  private Register(userInfo: UserInfo) {
    cy.visit(this.domain + "/register");
    cy.get('input[type="text"]').first().type(userInfo.username);
    cy.get('input[type="password"]').first().type(userInfo.password);
    cy.get('input[type="password"]').eq(1).type(userInfo.confirmPassword!);
    cy.get('input[type="text"]').eq(1).click();
    cy.get('li[class="el-select-dropdown__item"]')
      .eq(userInfo.currency!)
      .click();
    cy.wait(4000);
    cy.get(
      'button[class="el-button el-button--primary is-round w-full rounded"]'
    ).click();
    expect(cy.url().should("eq", this.domain + "/"));
  }

  // The method for positive test cases
  RegisterWithValidData() {
    it("Should register successfully", () => {
      this.Register({
        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword,
        currency: this.currency ?? 0,
      });
    });
  }

  RegisterWithInValidData() {
    it("Register with Invalid Data", () => {
      this.Register({
        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword,
        currency: this.currency ?? 0,
      });
    });
  }
  RegisterWithEmptyData() {
    it("Register with Invalid Data", () => {
      this.Register({
        username: "",
        password: "",
        confirmPassword: "",
        currency: this.currency ?? 0,
      });
    });
  }

  RegisterWithNotCurrency() {}
}
