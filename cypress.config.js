const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false, // if false, it disables the autorun of the test cases 
  defaultCommandTimeout: 5000,

  //  Report Configuration
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    overwrite: false, // if true, it deletes the previous HTML files and creates a new one
    charts: true, // adds a chart to the report showing pass and fail test status 
    reportPageTitle: 'Tool Shop - Registration Test Suite',  // this is used to change the report title
    reportFilename: "[name]_[status]-[datetime]-report",  // setting of the name of the report
    timestamp: "shortDate", // date in numbers; longDate shows date (mainly month) in words
    embeddedscreenshots: true, // attaches the screenshot to the HTML report 
    inlineAssets:true, // embeds the contents of the assets folder directly to the HTML reports 
    saveAllAttempts: false, // Only adds the screenshot of the last try of thererun of failed test cases 
    ignoreVideos: false, // If true, ignores the videos and doesn't embed in the report
    videoOnFailOnly: false // If true, attaches the video of the failed test cases only

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
