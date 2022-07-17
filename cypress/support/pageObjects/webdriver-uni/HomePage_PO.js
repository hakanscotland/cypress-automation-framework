class homePage_PO {
    visitHompage() {
        cy.visit(Cypress.env("webdriveruni_homepage"));
    }

    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
    }
}
export default homePage_PO;