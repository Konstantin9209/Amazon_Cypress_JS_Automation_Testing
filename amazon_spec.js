/// <reference types="cypress" />

describe("Amazon Project", () => {
    beforeEach(() => {
        cy.visit("https://www.amazon.in");
    });

    it("Search Product", () => {
        cy.get("#searchDropdownBox").select("Electronics", { force: true });

        cy.get("#twotabsearchtextbox").type("Apple Watch");

        cy.get("#nav-search-submit-button").click();

        cy.get('[data-component-type="s-search-result"]').as("products");

        cy.get("@products")
            .eq(5)
            .invoke("text")
            .then((productText) => {
                cy.log(productText);
            });

        cy.get("@products").each(($el, index, $list) => {
            cy.wrap($el).scrollIntoView();
            cy.log("Index : " + index + " and the product is " + $el.text());
        });
    });
});
