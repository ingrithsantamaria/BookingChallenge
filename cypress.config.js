const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    pageLoadTimeout: 1200000,
    baseUrl: "https://www.booking.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
