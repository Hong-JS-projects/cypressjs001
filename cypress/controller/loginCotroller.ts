import { PSURL, InputType, ButtonType, password } from "../constant/constant";
interface dataLogin {
  username: string;
  password?: string;
}

export class DemoLogin {
  Login(dataLogin: dataLogin) {
    cy.visit(PSURL.demo107 + "/login");
    cy.get(InputType.text).type(dataLogin.username);
    cy.get(InputType.password).type(dataLogin.password!);
    cy.get(ButtonType.button).click();

  }

  validLogin() {
    it("Login with valid username and password", () => {
      this.Login({ username: "testbnd01", password: "1234qwer" });
    });
  }
  invalidPassword() {
    it("Login with Invalid username and password", () => {
      this.Login({ username: "testbnd01", password: "1234qwer1" });
    });
  }
  invalidUserName() {
    it("Login with Invalid username and password", () => {
      this.Login({ username: "testbnd012", password: "1234qwer" });
    });
  }
}


export const BOLogin = ()=>{
    cy.visit("https://admin-demo-wl.568win.com/login");
    cy.get(InputType.text).type('KHQADemoTesting')
    cy.get(InputType.password).type(password)
    cy.get(ButtonType.submit).click()
    
}