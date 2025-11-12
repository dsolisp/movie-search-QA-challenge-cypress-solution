import { HomePage, FavoritesPage } from '../page-objects'

describe('Movie Search UI Tests', () => {
  beforeEach(() => {
    new HomePage().visit()
  })

  it('should load the home page', () => {
    cy.contains('Movie Search').should('be.visible')
    cy.get('input[placeholder="Search movies..."]').should('be.visible')
  })

  it('should search and display results', () => {
    new HomePage()
      .searchForMovie('batman')
      .getMovieCards()
      .should('have.length.greaterThan', 0)
  })

  it('should add and remove favorites', () => {
    new HomePage()
      .searchForMovie('batman')
      .addFirstMovieToFavorites()

    cy.contains('Remove from Favorites').should('be.visible')

    new HomePage().removeFirstMovieFromFavorites()
    cy.contains('Add to Favorites').should('be.visible')
  })

  it('should navigate to favorites page', () => {
    new HomePage()
      .searchForMovie('batman')
      .addFirstMovieToFavorites()

    new FavoritesPage()
      .visit()
      .getFavoriteCards()
      .should('have.length', 1)

    new FavoritesPage().removeFirstFavorite()
    cy.contains('No favorites yet').should('be.visible')
  })

  it('should load more movies', () => {
    new HomePage()
      .searchForMovie('batman')
      .loadMoreMovies()
      .getMovieCards()
      .should('have.length.greaterThan', 10)
  })

  it('should handle no results', () => {
    new HomePage()
      .searchForMovie('nonexistentmovie12345')
      .getMovieCards()
      .should('not.exist')
  })
})