// API test utilities and constants
export const API_ENDPOINTS = {
  SEARCH: '/movies/search',
  FAVORITES: '/favorites'
} as const

export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400
} as const

export const TEST_DATA = {
  DUPLICATE_MOVIE: {
    imdbID: 'ttdup001',
    Title: 'Duplicate Movie',
    Year: '2025',
    Poster: 'N/A'
  }
} as const

export class ApiHelper {
  static makeRequest(method: string, url: string, options: Partial<Cypress.RequestOptions> = {}) {
    return cy.request({
      method,
      url,
      failOnStatusCode: false,
      ...options
    })
  }

  static addFavorite(movie: any) {
    return this.makeRequest('POST', API_ENDPOINTS.FAVORITES, {
      body: movie,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  static removeFavorite(imdbID: string) {
    return this.makeRequest('DELETE', `${API_ENDPOINTS.FAVORITES}/${imdbID}`)
  }

  static getFavorites() {
    return this.makeRequest('GET', API_ENDPOINTS.FAVORITES)
  }
}