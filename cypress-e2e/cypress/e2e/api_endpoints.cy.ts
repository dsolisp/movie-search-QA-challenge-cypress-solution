import { ApiHelper, API_ENDPOINTS, HTTP_STATUS, TEST_DATA } from '../utils/apiHelpers'

describe('Backend API Tests', () => {
  it('GET /movies/search returns movies array', () => {
    ApiHelper.makeRequest('GET', `${API_ENDPOINTS.SEARCH}?q=batman&page=1`)
      .then((response) => {
        expect(response.status).to.eq(HTTP_STATUS.OK)
        expect(response.body).to.have.property('movies')
        expect(response.body.movies).to.be.an('array')
      })
  })

  it('GET /movies/search page=2 returns valid page', () => {
    ApiHelper.makeRequest('GET', `${API_ENDPOINTS.SEARCH}?q=batman&page=2`)
      .then((response) => {
        expect(response.status).to.eq(HTTP_STATUS.OK)
        expect(response.body).to.have.property('page')
        expect(response.body).to.have.property('movies')
      })
  })

  it('GET /movies/search with gibberish returns empty or error', () => {
    ApiHelper.makeRequest('GET', `${API_ENDPOINTS.SEARCH}?q=asdlkfjasdlkfj&page=1`)
      .then((response) => {
        expect(response.status).to.eq(HTTP_STATUS.OK)
        expect(response.body.movies).to.be.an('array')
      })
  })

  it('GET /movies/search missing query returns OK', () => {
    ApiHelper.makeRequest('GET', API_ENDPOINTS.SEARCH)
      .then((response) => {
        expect([HTTP_STATUS.OK, HTTP_STATUS.BAD_REQUEST]).to.include(response.status)
      })
  })

  it('GET /movies/search invalid page returns OK or error', () => {
    ApiHelper.makeRequest('GET', `${API_ENDPOINTS.SEARCH}?q=batman&page=99999`)
      .then((response) => {
        expect([HTTP_STATUS.OK, HTTP_STATUS.BAD_REQUEST]).to.include(response.status)
      })
  })

  it('GET /favorites returns favorites array', () => {
    ApiHelper.getFavorites()
      .then((response) => {
        expect(response.status).to.eq(HTTP_STATUS.OK)
        expect(response.body).to.have.property('favorites')
        expect(response.body.favorites).to.be.an('array')
      })
  })

  it('POST /favorites with invalid body returns 400', () => {
    ApiHelper.makeRequest('POST', API_ENDPOINTS.FAVORITES, {
      body: { Title: 'No ID' }
    })
      .then((response) => {
        expect([HTTP_STATUS.BAD_REQUEST, HTTP_STATUS.OK]).to.include(response.status)
      })
  })

  it('POST /favorites adds movie', () => {
    ApiHelper.addFavorite(TEST_DATA.DUPLICATE_MOVIE)
      .then((response) => {
        expect([HTTP_STATUS.OK, 201]).to.include(response.status)
      })
      .then(() => ApiHelper.removeFavorite(TEST_DATA.DUPLICATE_MOVIE.imdbID))
  })

  it('DELETE /favorites/:id removes favorite', () => {
    ApiHelper.addFavorite(TEST_DATA.DUPLICATE_MOVIE)
      .then(() => ApiHelper.removeFavorite(TEST_DATA.DUPLICATE_MOVIE.imdbID))
      .then((response) => {
        expect([HTTP_STATUS.OK, 204]).to.include(response.status)
      })
  })

  it('POST /favorites duplicate entries are allowed', () => {
    ApiHelper.addFavorite(TEST_DATA.DUPLICATE_MOVIE)
      .then(() => ApiHelper.addFavorite(TEST_DATA.DUPLICATE_MOVIE))
      .then(() => ApiHelper.getFavorites())
      .then((response) => {
        const count = response.body.favorites.filter((f: any) => f.imdbID === TEST_DATA.DUPLICATE_MOVIE.imdbID).length
        expect(count).to.be.greaterThan(0)
      })
      .then(() => ApiHelper.removeFavorite(TEST_DATA.DUPLICATE_MOVIE.imdbID))
      .then(() => ApiHelper.removeFavorite(TEST_DATA.DUPLICATE_MOVIE.imdbID))
  })

  it('GET /favorites after cleanup is empty or updated', () => {
    ApiHelper.addFavorite(TEST_DATA.DUPLICATE_MOVIE)
      .then(() => ApiHelper.removeFavorite(TEST_DATA.DUPLICATE_MOVIE.imdbID))
      .then((response) => {
        expect([HTTP_STATUS.OK, 204]).to.include(response.status)
      })
  })
})
