// Minimal Cypress support file
// Place global configuration and behavior that modifies Cypress here.
// This file is required by Cypress by default. It's intentionally minimal
// because these tests are API-only and don't need browser helpers.

import 'cypress-xpath'
import { HomePage, FavoritesPage } from '../page-objects'

// For component testing
import { mount } from '@cypress/react'

export {}

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
      homePage: () => HomePage
      favoritesPage: () => FavoritesPage
    }
  }
}

Cypress.Commands.add('mount', mount)
Cypress.Commands.add('homePage', () => new HomePage())
Cypress.Commands.add('favoritesPage', () => new FavoritesPage())
