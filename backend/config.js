// Poorly organized configuration
const config = {
  // Hardcoded values - bad practice
  port: process.env.PORT || 3000,
  apiKey: process.env.OMDB_API_KEY || 'demo',
  baseUrl: 'http://www.omdbapi.com/',
  
  // No validation
  cors: {
    origin: '*', // Security issue
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type']
  },
  
  // Inefficient settings
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // requests per window
  },
  
  // No environment-specific configs
  database: {
    type: 'file',
    path: './favorites.json'
  },
  
  // Poor logging configuration
  logging: {
    level: 'info',
    file: 'app.log'
  }
}

// No validation of required environment variables
if (!config.apiKey || config.apiKey === 'demo') {
  console.warn('Using demo API key - limited functionality')
}

module.exports = config
