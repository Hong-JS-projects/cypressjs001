import { Address } from "./Address";

export class User {
  public function1() {
    it("New test case 00002", () => {
      cy.log("From Class Test");
    });
  }

  public newAddress() {
    const address = new Address();
    address.address();
  }

  public function2(name?: string, age?: number) {
    describe("Class Test", () => {
      it("New test case 00003", () => {
        cy.visit("https://e24market.com/auth/login");
        if (name !== undefined) {
          cy.log(`${name.length}` + ": " + age);
        } else {
          cy.log("Please enter a name and age");
        }

        switch (name?.length) {
          case 13:
            cy.log("The name length is " + name.length);
            break;

          default:
            cy.log("Sorry!!😍😍");
        }
      });
    });
  }
}

export function function3() {
  cy.log("Testing exporters");
}
