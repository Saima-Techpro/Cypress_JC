const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 5000,

  //  Report Configuration
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    overwrite: true, // if true, it deletes the previous HTML files and creates a new one
    charts: true, // adds a chart to the report showing pass and fail test status 
    reportPageTitle: 'Tool Shop - Registration Test Suite',  // this is used to change the report title
    reportFilename: "[name]_[status]-[datetime]-report",
    timestamp: "shortDate",
    embeddedscreenshots: true


  },


  screenshotOnRunFailure:true, // Takes a screenshot if the test fails
  trashAssetsBeforeRuns:false, // Deletes the previous assets (leftover screenshots, videos from previous runs)
  video: true, // Records the video of the test run automatically

retries: {
    runMode:0, // When tests are run via the CLI (like npx cypress run), Cypress will not retry failed tests.
    openMode:0, // When tests are run via the interactive GUI (like npx cypress open), Cypress will also not retry failed tests.
},


  e2e: {
    baseUrl: "https://practicesoftwaretesting.com/", 
    env: {
      register: "auth/register",
      login: "auth/login"
    },
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
