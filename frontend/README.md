# Frontend - Movie Search App

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Current Structure

```
frontend/
├── pages/
│   ├── _app.tsx          # App wrapper (global state issues)
│   ├── index.tsx         # Main search page (monolithic)
│   ├── favorites.tsx     # Favorites page
│   └── api/
│       └── test.ts       # Broken API route
├── components/
│   └── MovieCard.tsx     # Poorly implemented component
├── hooks/
│   └── useMovies.ts      # Custom hook with issues
├── utils/
│   └── api.ts            # API utilities (no error handling)
├── styles/
│   └── globals.css       # Unused global styles
├── package.json
└── next.config.js        # Disabled optimizations
```

## Current Dependencies

```json
{
  "next": "13.0.0",
  "react": "18.0.0",
  "react-dom": "18.0.0",
  "axios": "^1.6.0"
}
```


## Pages

### `/` - Search Page
- Search movies from OMDb API
- Add/remove favorites
- Basic pagination
- **Issues**: Monolithic component, no error handling, poor performance

### `/favorites` - Favorites Page
- Display saved favorites
- Remove favorites
- **Issues**: No loading states, poor error handling

## Components

### MovieCard
- Display movie information
- Toggle favorite status
- **Issues**: Inline styles, no error boundaries, inefficient re-renders

## Hooks

### useMovies
- Search movies
- Load more functionality
- **Issues**: Global state, memory leaks, no cleanup


