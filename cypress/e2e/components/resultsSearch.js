import 'cypress-wait-until'
export class ResultsSearch {
  elements = {
    getOptionsFilter: () => cy.get('div input[type="checkbox"]'),
    getFirstElementWithFilter: () => cy.get('div[data-testid="property-card"]').eq(0),
    getAvailabilityButton: () => cy.get('button[data-testid="reviews-block-availability"]')
  };
  selectRandomFilter() {
    this.elements.getOptionsFilter().then(($checkboxes) => {
      const randomIndex = Math.floor(Math.random() * $checkboxes.length);
      cy.wrap($checkboxes[randomIndex])
        .click()
        cy.waitUntil(() => this.elements.getOptionsFilter().then($el => $el.length > 0))
    });
  }
  selectMultipleRandomFilters(count = 2) {
    this.elements.getOptionsFilter().then(($checkboxes) => {
      cy.wrap($checkboxes).should("have.length.at.least", count);
      const shuffledIndices = Cypress._.shuffle(
        Cypress._.range($checkboxes.length)
      );
      const indicesToSelect = shuffledIndices.slice(0, count);
      indicesToSelect.forEach((index) => {
        cy.wrap($checkboxes[index])
          .click()
          cy.waitUntil(() => this.elements.getOptionsFilter().then($el => $el.length > 0))
      });
    });
  }
  selectFirstElementWithFilter = () => {
    this.elements.getFirstElementWithFilter().find('img[data-testid="image"]').eq(0).click({force:true})
  }
  openFirstItem = (selectorLink) => {
    cy.get(selectorLink).eq(0).find('a[data-testid="property-card-desktop-single-image"]').invoke('removeAttr', 'target').click()
  }
  validateWindow = () => {
    cy.url().should('include', '/hotel')
    this.elements.getAvailabilityButton().should('be.visible')
  }
}
