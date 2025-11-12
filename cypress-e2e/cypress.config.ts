import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },
    supportFile: 'cypress/support/e2e.ts'
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    },
    specPattern: 'cypress/component/**/*.cy.{js,ts,jsx,tsx}',
    supportFile: 'cypress/support/component.ts'
  },
  video: false,
  fixturesFolder: 'cypress/fixtures'
})
