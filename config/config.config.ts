import { defineConfig } from 'cypress'

export default defineConfig({
  video: true,
  defaultCommandTimeout: 5000,
  execTimeout: 5000,
  taskTimeout: 5000,
  pageLoadTimeout: 30000,
  requestTimeout: 5000,
  responseTimeout: 30000,
  screenshotsFolder: 'reports/screenshots',
  videosFolder: 'reports/videos',
  env: {
    allureResultsPath: '../allure-results',
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
})
