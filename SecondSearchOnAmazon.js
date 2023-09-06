/// <reference types="cypress" />

describe("Amazon Project", ()=>{

    beforeEach(()=>{
        cy.visit("https://amazon.co.uk")
    })

    it("Search Product", ()=>{

        cy.get("#searchDropdownBox").select("Books", {force:true})

        cy.get("#twotabsearchtextbox").type("Software testing")

        cy.get("#nav-search-submit-button").click()

        cy.get('[data-component-type="s-search-results"]').as("products")


})
})
