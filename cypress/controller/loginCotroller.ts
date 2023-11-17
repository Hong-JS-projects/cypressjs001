import { PSLogin } from "../Interface/login";
import { InputType } from "../constant/constant";

export class loginController implements PSLogin {
  domain: string;
  username: string;
  password: string;
  button: string;
  constructor(
    domain: string,
    username: string,
    password: string,
    button: string
  ) {
    this.domain = domain;
    this.username = username;
    this.password = password;
    this.button = button;
  }
  loginWithValidData() {
    it("should login successfully", () => {
      cy.visit(this.domain + "/login");
      cy.get(InputType.text).type(this.username);
      cy.get(InputType.password).type(this.password);
      cy.get(this.button).click();
      cy.wait(4000);
      cy.url().should('eq', this.domain+'/')
    });
  }
  loginWithInValidData() {
    it("should login failed", () => {
      cy.visit(this.domain + "/login");
      cy.get(InputType.text).type(this.username);
      cy.get(InputType.password).type('1111');
      cy.get(this.button).click();
      cy.url().should('eq', this.domain+'/')
    });
  }
  loginWithEmptyData() {
    it("should fail login with empty", () => {
      cy.visit(this.domain + "/login");
      cy.get(InputType.text).type('');
      cy.get(InputType.password).type('');
      cy.get(this.button).click();
      cy.url().should('eq', this.domain+'/')
    });
  }
}
