import { Home } from "../components/home";
import { ResultsSearch } from "../components/resultsSearch";
const home = new Home();
const resultsSearch = new ResultsSearch();
describe("", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(3000);
    cy.intercept('POST', '/api/filters').as('filterRequest')
  });
  it("User submits search and is redirected to results", () => {
    home.closeDismissSignInfo();
    home.validateAndRandomSelectCityField();
    home.selectStartDate();
    home.selectEndDate();
    home.clickAndValidateSubmit();
    resultsSearch.selectRandomFilter()
    // resultsSearch.selectMultipleRandomFilters(3);
  });
});
