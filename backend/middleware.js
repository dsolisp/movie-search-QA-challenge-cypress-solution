// Poorly implemented middleware
const express = require('express');

// Rate limiting - broken implementation
let requestCounts = {};
const RATE_LIMIT = 100; // Per minute
const WINDOW = 60000; // 1 minute

function rateLimit(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  
  // Memory leak - never cleans up old entries
  if (!requestCounts[ip]) {
    requestCounts[ip] = [];
  }
  
  // Inefficient array operations
  requestCounts[ip] = requestCounts[ip].filter(time => now - time < WINDOW);
  
  if (requestCounts[ip].length >= RATE_LIMIT) {
    return res.status(429).json({ error: 'Too many requests' });
  }
  
  requestCounts[ip].push(now);
  next();
}

// Logging middleware - inefficient
function logRequests(req, res, next) {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    // Synchronous file write - blocks event loop
    require('fs').appendFileSync('access.log', 
      `${new Date().toISOString()} ${req.method} ${req.url} ${res.statusCode} ${duration}ms\n`
    );
  });
  
  next();
}

// CORS middleware - overly permissive
function corsMiddleware(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
}

module.exports = {
  rateLimit,
  logRequests,
  corsMiddleware
};
