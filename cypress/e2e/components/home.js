export class Home {
  elements = {
    getSelectCityField: () => cy.get('input[name="ss"]'),
    getCloseDismissSignInfo: () =>
      cy.get('button[aria-label="Dismiss sign-in info."]'),
    getOpenCalendarField: () => cy.get('div[data-testid="searchbox-dates-container"]'),
    getBodyCalendar: () => cy.get('div[data-testid="searchbox-datepicker-calendar"]'),
    getNextMonth: () => cy.get('div[data-testid="searchbox-datepicker-calendar"]').find('button'),
    getSubmitButton: () => cy.get('button[type="submit"]')
  };
  listOptionsCities() {
    return cy.get("ul").find("li[role=option]");
  }
  closeDismissSignInfo = () => {
    this.elements.getCloseDismissSignInfo().then(($element) => {
        if ($element.is(':visible')){
            cy.wrap($element).click()
        }
    })
  };
  typeInSearchField() {
    const query = "San";
    this.elements.getSelectCityField().type(query);
  }
  validateAndRandomSelectCityField = () => {
    this.elements.getSelectCityField().click();
    this.listOptionsCities().then(($suggestions) => {
      const randomIndex = Math.floor(Math.random() * $suggestions.length);
      cy.wrap($suggestions).eq(randomIndex).click();
    });
  };
  openCalendar() {
    this.elements.getOpenCalendarField().click()
  }
  navigateToNextMonth() {
    this.openCalendar()
    this.elements.getNextMonth().click();
  }

  selectDate(day) {
    cy.get("table tbody tr").contains("td", day).click();
  }
  selectStartDate() {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    const startDay = nextMonth.getDate();
    this.openCalendar();
    this.navigateToNextMonth();
    this.selectDate(startDay);
  }
  selectEndDate(daysAfterStart = 7) {
    const today = new Date();
    const endDate = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      daysAfterStart
    );
    const endDay = endDate.getDate();
    this.selectDate(endDay);
  }
  clickAndValidateSubmit = () => {
    this.elements.getSubmitButton().should('be.visible').click()
  }
}
