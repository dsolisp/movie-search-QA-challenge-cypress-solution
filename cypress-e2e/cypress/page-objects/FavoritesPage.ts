export class FavoritesPage {
  private xpaths = {
    favoriteCard: '(//*[@id="__next"]//div[contains(@style, "border")])',
    removeButton: '//button[contains(text(), "Remove from Favorites")]',
    noFavoritesMessage: '//div[contains(text(), "No favorites yet")]'
  }

  visit() {
    cy.visit('http://localhost:3001/favorites')
    cy.contains('My Favorites').should('be.visible')
    return this
  }

  getNoFavoritesMessage() {
    return cy.xpath(this.xpaths.noFavoritesMessage)
  }

  getFavoriteCards() {
    return cy.xpath(this.xpaths.favoriteCard)
  }

  removeFirstFavorite() {
    cy.xpath(`(${this.xpaths.favoriteCard})[1]//button[contains(text(), "Remove from Favorites")]`).click()
    return this
  }
}