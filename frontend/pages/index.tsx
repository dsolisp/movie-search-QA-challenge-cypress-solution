import { useState, useEffect } from 'react'
import axios from 'axios'

// Global variables - terrible practice
let searchTimeout: any = null;
let currentPage = 1;
let allMovies: any[] = [];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [favorites, setFavorites] = useState<any[]>([])

  // Load favorites on mount - inefficient
  useEffect(() => {
    loadFavorites()
  }, [])

  // Load favorites function - no error handling
  const loadFavorites = async () => {
    try {
      const response = await axios.get('http://localhost:3000/favorites')
      setFavorites(response.data.favorites || [])
    } catch (err) {
      console.log('Failed to load favorites')
    }
  }

  // Search function - poorly implemented
  const handleSearch = (e: any) => {
    e.preventDefault()
    if (!searchTerm.trim()) return
    
    setLoading(true)
    setError('')
    
    // Hardcoded API call
    axios.get(`http://localhost:3000/movies/search?q=${searchTerm}&page=1`)
      .then(response => {
        const data = response.data
        allMovies = data.movies || []
        setMovies(data.movies || [])
        currentPage = 1
        setLoading(false)
      })
      .catch(err => {
        setError('Search failed')
        setLoading(false)
      })
  }

  // Load more movies - broken pagination
  const loadMore = () => {
    if (loading) return
    
    setLoading(true)
    currentPage++
    
    axios.get(`http://localhost:3000/movies/search?q=${searchTerm}&page=${currentPage}`)
      .then(response => {
        const data = response.data
        const newMovies = data.movies || []
        allMovies = [...allMovies, ...newMovies]
        setMovies(allMovies)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
      })
  }

  // Add to favorites - no duplicate checking
  const addToFavorites = async (movie: any) => {
    try {
      await axios.post('http://localhost:3000/favorites', movie)
      setFavorites([...favorites, movie])
    } catch (err) {
      console.log('Failed to add favorite')
    }
  }

  // Remove from favorites - inefficient
  const removeFromFavorites = async (imdbID: string) => {
    try {
      await axios.delete(`http://localhost:3000/favorites/${imdbID}`)
      setFavorites(favorites.filter(fav => fav.imdbID !== imdbID))
    } catch (err) {
      console.log('Failed to remove favorite')
    }
  }

  // Check if movie is favorite - inefficient
  const isFavorite = (imdbID: string) => {
    return favorites.some(fav => fav.imdbID === imdbID)
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Movie Search</h1>
      
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
          style={{ padding: '10px', marginRight: '10px', width: '300px' }}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ marginTop: '20px' }}>
        {movies.map((movie, index) => (
          <div key={index} style={{ 
            border: '1px solid #ccc', 
            padding: '10px', 
            margin: '10px 0',
            display: 'flex',
            alignItems: 'center'
          }}>
            <img 
              src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'} 
              alt={movie.Title}
              style={{ width: '100px', height: '150px', marginRight: '20px' }}
              onError={(e) => {
                e.currentTarget.src = '/placeholder.jpg'
              }}
            />
            <div>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <button 
                onClick={() => isFavorite(movie.imdbID) ? removeFromFavorites(movie.imdbID) : addToFavorites(movie)}
                style={{
                  backgroundColor: isFavorite(movie.imdbID) ? 'red' : 'green',
                  color: 'white',
                  padding: '5px 10px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {isFavorite(movie.imdbID) ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {movies.length > 0 && (
        <button 
          onClick={loadMore}
          disabled={loading}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: 'blue', 
            color: 'white', 
            border: 'none',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}

      <div style={{ marginTop: '40px' }}>
        <h2>Favorites ({favorites.length})</h2>
        {favorites.map((fav, index) => (
          <div key={index} style={{ 
            border: '1px solid #ccc', 
            padding: '10px', 
            margin: '10px 0' 
          }}>
            <h4>{fav.Title} ({fav.Year})</h4>
            <button 
              onClick={() => removeFromFavorites(fav.imdbID)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '5px 10px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
