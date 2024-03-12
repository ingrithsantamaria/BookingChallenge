import 'cypress-wait-until'
export class ResultsSearch {
  elements = {
    getOptionsFilter: () => cy.get('div input[type="checkbox"]'),
    getFirstElementWithFilter: () => cy.get('div[data-testid="property-card"]').eq(0)
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
    this.elements.getFirstElementWithFilter().find('div[data-testid="recommended-units"]').click()
  }

}
