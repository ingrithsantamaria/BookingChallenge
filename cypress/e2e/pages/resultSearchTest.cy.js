import { Home } from "../components/home";
import { ResultsSearch } from "../components/resultsSearch";
const home = new Home();
const resultsSearch = new ResultsSearch();
describe("", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(3000);
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
  it("User select the first results", () => {
    home.closeDismissSignInfo();
    home.validateAndRandomSelectCityField();
    home.selectStartDate();
    home.selectEndDate();
    home.clickAndValidateSubmit();
    resultsSearch.selectRandomFilter()
    resultsSearch.selectFirstElementWithFilter()
  })
});
