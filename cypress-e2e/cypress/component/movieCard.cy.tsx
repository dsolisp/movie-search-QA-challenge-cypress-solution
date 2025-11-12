import MovieCard from '../../src/MovieCard'

describe('MovieCard Component', () => {
  const mockMovie = {
    imdbID: 'tt0111161',
    Title: 'The Shawshank Redemption',
    Year: '1994',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg'
  }

  it('renders movie title and year', () => {
    const onToggleFavorite = cy.stub()
    cy.mount(<MovieCard movie={mockMovie} onToggleFavorite={onToggleFavorite} isFavorite={false} />)

    cy.contains(mockMovie.Title).should('be.visible')
    cy.contains(mockMovie.Year).should('be.visible')
  })

  it('displays movie poster image', () => {
    const onToggleFavorite = cy.stub()
    cy.mount(<MovieCard movie={mockMovie} onToggleFavorite={onToggleFavorite} isFavorite={false} />)

    cy.get('img').should('have.attr', 'alt', mockMovie.Title)
  })

  it('shows Add to Favorites button when not favorite', () => {
    const onToggleFavorite = cy.stub()
    cy.mount(<MovieCard movie={mockMovie} onToggleFavorite={onToggleFavorite} isFavorite={false} />)

    cy.get('button').should('contain', 'Add to Favorites')
  })

  it('shows Remove from Favorites button when favorite', () => {
    const onToggleFavorite = cy.stub()
    cy.mount(<MovieCard movie={mockMovie} onToggleFavorite={onToggleFavorite} isFavorite={true} />)

    cy.get('button').should('contain', 'Remove from Favorites')
  })

  it('calls onToggleFavorite when button is clicked', () => {
    const onToggleFavorite = cy.stub()
    cy.mount(<MovieCard movie={mockMovie} onToggleFavorite={onToggleFavorite} isFavorite={false} />)

    cy.get('button').click()
    cy.wrap(onToggleFavorite).should('have.been.calledOnceWith', mockMovie)
  })

  it('handles image error gracefully', () => {
    const onToggleFavorite = cy.stub()
    const badMovie = { ...mockMovie, Poster: 'invalid-url' }
    cy.mount(<MovieCard movie={badMovie} onToggleFavorite={onToggleFavorite} isFavorite={false} />)

    cy.get('img').invoke('trigger', 'error')
    cy.get('img').should('have.attr', 'src', '/placeholder.jpg')
  })
})