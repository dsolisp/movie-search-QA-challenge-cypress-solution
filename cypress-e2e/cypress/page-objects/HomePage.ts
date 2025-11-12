export class HomePage {
  private xpaths = {
    searchInput: '//input[@placeholder="Search movies..."]',
    searchButton: '//button[@type="submit"]',
    movieCard: '//*[@id="__next"]/div/div[1]/div',
    loadMoreButton: '//button[contains(text(), "Load More")]'
  }

  visit() {
    cy.visit('http://localhost:3001/')
    cy.contains('Movie Search').should('be.visible')
    return this
  }

  searchForMovie(query: string) {
    cy.xpath(this.xpaths.searchInput).clear().type(query)
    cy.xpath(this.xpaths.searchButton).click()
    return this
  }

  getMovieCards() {
    return cy.xpath(this.xpaths.movieCard)
  }

  addFirstMovieToFavorites() {
    cy.xpath(`${this.xpaths.movieCard}//button[contains(text(), "Add to Favorites")]`).eq(0).click()
    return this
  }

  removeFirstMovieFromFavorites() {
    cy.xpath(`${this.xpaths.movieCard}//button[contains(text(), "Remove from Favorites")]`).eq(0).click()
    return this
  }

  loadMoreMovies() {
    cy.xpath(this.xpaths.loadMoreButton).click()
    return this
  }

  navigateToFavorites() {
    cy.visit('http://localhost:3001/favorites')
    return this
  }
}
