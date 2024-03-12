import { Home } from "../components/home";
const home = new Home()
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
})