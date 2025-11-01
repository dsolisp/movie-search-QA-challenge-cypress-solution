// Broken API route - demonstrates poor Next.js API usage
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // No method validation
  // No error handling
  // No proper response structure
  
  if (req.method === 'GET') {
    // Synchronous operation - blocks event loop
    const fs = require('fs')
    const path = require('path')
    
    try {
      const data = fs.readFileSync(path.join(process.cwd(), 'favorites.json'), 'utf8')
      const favorites = JSON.parse(data)
      
      // No proper error handling
      res.status(200).json({ 
        success: true, 
        count: favorites.length,
        data: favorites 
      })
    } catch (error) {
      // Poor error handling
      res.status(500).json({ error: 'Something went wrong' })
    }
  } else {
    // No proper method not allowed handling
    res.status(405).json({ error: 'Method not allowed' })
  }
}
