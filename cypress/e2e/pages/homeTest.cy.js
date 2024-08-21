import { Home } from "../components/home";
const home = new Home()
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe("User clicks on field 'Where are you going'", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(3000)
    })
    it("User clicks on field 'Where are you going'", () => {
        home.closeDismissSignInfo()
        home.typeInSearchField()
        home.validateAndRandomSelectCityField()
    })
    it("User clicks on calendar", () => {
        home.closeDismissSignInfo()
        home.validateAndRandomSelectCityField()
        home.selectStartDate()
        home.selectEndDate()
    })
    it("User clicks on submit button", () => {
        home.closeDismissSignInfo()
        home.validateAndRandomSelectCityField()
        home.selectStartDate()
        home.selectEndDate()
        home.clickAndValidateSubmit()
    })
})