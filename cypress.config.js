const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  pageLoadTimeout: 10000,
    baseUrl: 'https://www.saucedemo.com/',
   // defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
    },
  },
});
