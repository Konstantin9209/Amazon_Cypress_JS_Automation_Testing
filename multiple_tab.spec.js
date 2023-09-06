/// <reference types="cypress" />

describe("Multiple window handle", ()=>{

    beforeEach(()=>{
        cy.visit("https://test.qatechhub.com/window-handling/")
    })
    
    it("TC#1 - Verify href and target attributes", ()=>{

        cy.contains("a", "Click Here").as('button')

        cy.get("@button").should("have.attr", "href").and("equal", "https://qatechhub.com/")
  
        cy.get("@button").should("have.attr", "target").and("equal", "_blank")

    })
})