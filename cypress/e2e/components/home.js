export class Home {
    elements = {
    getSelectCityField: () => cy.get('input[name="ss"]'),
    getCloseDismissSignInfo: () => cy.get('button[aria-label="Dismiss sign-in info."]')
    }
    listOptionsCities(){
        return cy.get('ul').find('li[role=option]')
    }
    closeDismissSignInfo = () => {
        this.elements.getCloseDismissSignInfo().click()
    }
    // validateAndRandomSelectCityField = () => {
    //     this.elements.getSelectCityField().should('be.visible').click()
    //     this.listOptionsCities.then((listOptionsCities) => {
    //         const randomOptions = Cypress._.sample(listOptionsCities);
    //         randomOptions.click();
    //       });
    // }
    typeInSearchField() {
        const query = "San"
        this.elements.getSelectCityField().type(query)
    }
    validateAndRandomSelectCityField = () => {
        this.elements.getSelectCityField().click()
        this.listOptionsCities().then($suggestions => {
            const randomIndex = Math.floor(Math.random() * $suggestions.length)
            cy.wrap($suggestions).eq(randomIndex).click()
        })
    }
}