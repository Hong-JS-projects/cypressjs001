import { Address } from "../model/Address";

describe("Senghong Spec", () => {
  const address = new Address();
  it("passes", () => {
    cy.viewport(1300, 900);
    address.address(2001);
    cy.log("Hello Senghong!");
    cy.visit("https://www.youtube.com");
  });
});


describe("Senghong", () => {
  beforeEach(() => {
    it("New Testing", () => {
      cy.log("Hello Senghong!");
    })
  })
})