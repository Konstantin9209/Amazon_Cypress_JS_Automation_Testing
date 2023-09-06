/// <reference types="cypress" />

describe("Form Elements", function() {

    this.beforeEach(()=>{
cy.visit("https://test.qatechhub.com/form-elements/")
    })
    it("Form Element Test", ()=>{

        cy.get("#wpforms-49-field_1").type("Konstantin")

        cy.get(".wpforms-field-name-last.wpforms-field-required").type("Petkov")

        cy.get("input[type='email']").type("konstantin.z.petkov@gmail.com")

        cy.get("#wpforms-49-field_4").type('07765556134')

        cy.get("input[value='Female']").check()

        cy.get("#wpforms-49-field_5").select("Cypress")

        cy.contains("button", "Submit").click()

        cy.get("#wpforms-confirmation-49").first("p").should("contains.text", "You have successfully filled in the form!")





})

})
    