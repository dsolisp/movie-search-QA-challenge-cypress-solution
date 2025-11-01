// Poorly organized API utilities
import axios from 'axios'

// Hardcoded base URL - bad practice
const API_BASE = 'http://localhost:3000'

// No error handling, no retries, no timeouts
export const searchMovies = async (query: string, page: number = 1) => {
  const response = await axios.get(`${API_BASE}/movies/search?q=${query}&page=${page}`)
  return response.data
}

export const getFavorites = async () => {
  const response = await axios.get(`${API_BASE}/favorites`)
  return response.data.favorites
}

export const addFavorite = async (movie: any) => {
  const response = await axios.post(`${API_BASE}/favorites`, movie)
  return response.data
}

export const removeFavorite = async (imdbID: string) => {
  const response = await axios.delete(`${API_BASE}/favorites/${imdbID}`)
  return response.data
}

// Unused utility functions
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

export const truncateText = (text: string, length: number) => {
  return text.length > length ? text.substring(0, length) + '...' : text
}
