// Poorly implemented component with multiple issues
import { useState, useEffect } from 'react'

interface Movie {
  imdbID: string
  Title: string
  Year: string
  Poster: string
}

interface MovieCardProps {
  movie: Movie
  onToggleFavorite: (movie: Movie) => void
  isFavorite: boolean
}

export default function MovieCard({ movie, onToggleFavorite, isFavorite }: MovieCardProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  // Inefficient re-renders on every prop change
  useEffect(() => {
    setIsLoading(true)
    setImageError(false)
  }, [movie.imdbID]) // Missing dependencies

  // Inline styles - bad practice
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: isFavorite ? '#ffe6e6' : '#ffffff'
  }

  const imageStyle = {
    width: '100px',
    height: '150px',
    marginRight: '20px',
    objectFit: 'cover' as const
  }

  const buttonStyle = {
    backgroundColor: isFavorite ? 'red' : 'green',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px'
  }

  // No error boundary
  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  // Inefficient click handler
  const handleClick = () => {
    // No debouncing or loading state
    onToggleFavorite(movie)
  }

  return (
    <div style={cardStyle}>
      <div style={{ position: 'relative' }}>
        {isLoading && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100px',
            height: '150px',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            Loading...
          </div>
        )}
        <img
          src={imageError ? '/placeholder.jpg' : movie.Poster}
          alt={movie.Title}
          style={imageStyle}
          onError={handleImageError}
          onLoad={handleImageLoad}
          // No lazy loading
        />
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>
          {movie.Title}
        </h3>
        <p style={{ margin: '0 0 10px 0', color: '#666' }}>
          {movie.Year}
        </p>
        <button
          onClick={handleClick}
          style={buttonStyle}
          // No disabled state during loading
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  )
}
