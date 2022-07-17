/// <reference types="cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it.only("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        //The following will fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // makeupLink.click();
        // skincareLink.click();

      //  The following will pass
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click().then(function(linkText){
        //     cy.log("Clicked on link using text: " + linkText.text())
        // });
 
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skincareLink.click().then(function(linkText){
        //     cy.log("Clicked on link using text: " + linkText.text())
        // });

        //Recommended Approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click().should('contain', 'Makeup').then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text()) });
    

        cy.get("a[href*='product/category&path=']").contains("Skincare").click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text()) });


    });


    it("Navigating to specific skinkare pages", () => {
        cy.visit("https://automationteststore.com/")
            
        cy.get("a[href*='product/category&path=']").contains("Skincare").click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text()) });
        
        const header = cy.get("h1 .maintext").then(($headerText) =>{
            const headerText = $headerText.text()
            cy.log("Found header text :"+ headerText);
            expect(headerText).is.eq('Skincare');

        })
    });
                
            it("Validate properties of the Contact Us Page", () => {
                cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        
                //Uses cypress commands and chaining
                cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
        
                //JQuery Approach
                
                cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
                    const firstNameText = text.find('#field_11').text();
                    expect(firstNameText).to.contain('First name');
            
                       //Embedded commands (Closure)

                    cy.get('#field_11').then(fnText => {
                        cy.log(fnText.text())
                        cy.log(fnText)
                    })
                })
         


    });

});