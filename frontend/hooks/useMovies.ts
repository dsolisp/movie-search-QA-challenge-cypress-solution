// Poorly implemented custom hook with multiple issues
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

interface Movie {
  imdbID: string
  Title: string
  Year: string
  Poster: string
}

interface UseMoviesReturn {
  movies: Movie[]
  loading: boolean
  error: string | null
  searchMovies: (query: string) => void
  loadMore: () => void
  hasMore: boolean
}

// Global state - terrible practice
let globalMovies: Movie[] = []
let globalPage = 1
let globalQuery = ''
let globalTotalResults = 0

export function useMovies(): UseMoviesReturn {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasMore, setHasMore] = useState(true)

  // Inefficient search function
  const searchMovies = useCallback((query: string) => {
    if (!query.trim()) return
    
    setLoading(true)
    setError(null)
    globalQuery = query
    globalPage = 1
    globalMovies = []
    
    // No debouncing
    axios.get(`http://localhost:3000/movies/search?q=${query}&page=1`)
      .then(response => {
        const data = response.data
        globalMovies = data.movies || []
        globalTotalResults = data.totalResults || 0
        setMovies(globalMovies)
        setHasMore(globalPage < (data.totalPages || 1))
        setLoading(false)
      })
      .catch(err => {
        setError('Search failed')
        setLoading(false)
      })
  }, [])

  // Broken load more function
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return
    
    setLoading(true)
    globalPage++
    
    axios.get(`http://localhost:3000/movies/search?q=${globalQuery}&page=${globalPage}`)
      .then(response => {
        const data = response.data
        const newMovies = data.movies || []
        globalMovies = [...globalMovies, ...newMovies]
        setMovies(globalMovies)
        setHasMore(globalPage < (data.totalPages || 1))
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
      })
  }, [loading, hasMore])

  // Memory leak - no cleanup
  useEffect(() => {
    return () => {
      // No cleanup
    }
  }, [])

  return {
    movies,
    loading,
    error,
    searchMovies,
    loadMore,
    hasMore
  }
}
