import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Favorites() {
  const [favorites, setFavorites] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Load favorites - inefficient re-fetching
  useEffect(() => {
    loadFavorites()
  }, [])

  const loadFavorites = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:3000/favorites')
      setFavorites(response.data.favorites || [])
    } catch (err) {
      console.log('Failed to load favorites')
    } finally {
      setLoading(false)
    }
  }

  // Remove favorite - no confirmation
  const removeFavorite = async (imdbID: string) => {
    try {
      await axios.delete(`http://localhost:3000/favorites/${imdbID}`)
      setFavorites(favorites.filter(fav => fav.imdbID !== imdbID))
    } catch (err) {
      console.log('Failed to remove favorite')
    }
  }

  if (loading) {
    return <div>Loading favorites...</div>
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>My Favorites</h1>
      
      {favorites.length === 0 ? (
        <p>No favorites yet. <a href="/">Go search for movies!</a></p>
      ) : (
        <div>
          {favorites.map((fav, index) => (
            <div key={index} style={{ 
              border: '1px solid #ccc', 
              padding: '15px', 
              margin: '10px 0',
              display: 'flex',
              alignItems: 'center'
            }}>
              <img 
                src={fav.Poster !== 'N/A' ? fav.Poster : '/placeholder.jpg'} 
                alt={fav.Title}
                style={{ width: '100px', height: '150px', marginRight: '20px' }}
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.jpg'
                }}
              />
              <div style={{ flex: 1 }}>
                <h3>{fav.Title}</h3>
                <p>{fav.Year}</p>
                <button 
                  onClick={() => removeFavorite(fav.imdbID)}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '8px 16px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
