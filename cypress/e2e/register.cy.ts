import { PSURL } from "../constant/constant"

describe("Register Account", () => {
    it('Register Account with valid email', () => {
        cy.visit(PSURL.demo107+'/register')
        
    })
})