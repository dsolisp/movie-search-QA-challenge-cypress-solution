# Backend - Movie Search API

## Setup

```bash
# Install dependencies
npm install

# Create environment file
cp env.example .env

# Edit .env and add your OMDb API key
# OMDB_API_KEY=your_actual_api_key_here

# Start the server
npm start
```

## API Endpoints

### Movies
- `GET /movies/search?q={query}&page={page}` - Search movies
- Returns: `{ movies: [], totalResults: number, page: number, totalPages: number }`

### Favorites
- `GET /favorites` - Get all favorites
- `POST /favorites` - Add favorite (body: Movie object)
- `DELETE /favorites/:imdbID` - Remove favorite

### Health
- `GET /health` - Health check

## Current Dependencies

```json
{
  "express": "^4.18.2",
  "axios": "^1.6.0",
  "cors": "^2.8.5"
}
```

## Files Structure

```
backend/
├── index.js          # Main server file (needs refactoring)
├── middleware.js      # Poorly implemented middleware
├── config.js          # Configuration (needs validation)
├── package.json       # Dependencies
├── env.example        # Environment template
└── README.md          # This file
```
