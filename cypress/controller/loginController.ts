import { PSLogin } from "../Interface/login";
import { UserInfo } from "../Interface/userInfo";
import { BaseURL, InputType } from "../constant/constant";

export class loginController implements PSLogin {
  domain: string;
  username: string;
  password: string;
  button: string;

  constructor(domain: string, userInfo: UserInfo, button: string) {
    this.domain = domain;
    this.username = userInfo.username;
    this.password = userInfo.password;
    this.button = button;
  }
  // Private methods for login
  private Login(userInfo: UserInfo) {
    cy.visit(this.domain + "/login");
    cy.get(InputType.text).type(userInfo.username);
    cy.get(InputType.password).type(userInfo.password);
    cy.get(this.button).click();
    cy.wait(4000);
    cy.url().should("eq", this.domain + "/");
  }
  LoginToken() {
    this.Login({ username: this.username, password: this.password });
  }

  loginWithValidData() {
    it("should login successfully", () => {
      this.Login({ username: this.username, password: this.password });
    });
  }

  loginWithInValidData() {
    it("should login failed", () => {
      this.Login({ username: this.username, password: "" });
    });
  }

  loginWithEmptyData() {
    it("should fail login with empty", () => {
      this.Login({ username: "", password: "" });
    });
  }

  // BO lostin token
  BOLogin(userInfo: UserInfo) {
    cy.visit(BaseURL.boDemo + "/login");
    cy.get('input[name="Username"]').type(userInfo.username);
    cy.get('input[name="Password"]').type(userInfo.password);
    cy.get('input[type="submit"]').click();
  }
}
