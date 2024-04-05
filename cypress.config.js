const { defineConfig } = require("cypress");

module.exports = defineConfig({
    chromeWebSecurity: false,
    e2e: {
        baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
        "specPattern": "cypress/**/*.{feature,features}",
        defaultCommandTimeout: 10000,
        video: true,
        screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
          console.log(config.env)
          return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
