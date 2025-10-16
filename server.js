const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// Environment variables for configuration
const CAT_FACT_API_URL =
  process.env.CAT_FACT_API_URL || 'https://catfact.ninja/fact';
const REQUEST_TIMEOUT = parseInt(process.env.REQUEST_TIMEOUT) || 5000;

// Middleware for CORS headers (best practice)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});

// Basic logging for debugging (best practice)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// GET /me endpoint - Complete implementation
app.get('/me', async (req, res) => {
  try {
    // Dynamic timestamp - current UTC time in ISO 8601 format
    const timestamp = new Date().toISOString();

    let catFact;
    try {
      // Cat Facts API integration with timeout
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

      const response = await fetch(CAT_FACT_API_URL, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Profile-Endpoint-API/1.0',
        },
      });

      clearTimeout(timeout);

      if (response.ok) {
        const data = await response.json();
        catFact = data.fact;
        console.log(`✅ Successfully fetched cat fact from API`);
      } else {
        throw new Error(`API returned status: ${response.status}`);
      }
    } catch (error) {
      // Error handling - fallback message
      console.log(`❌ Cat Facts API failed: ${error.message}`);
      catFact =
        'Cats have excellent night vision and can see at light levels six times lower than what humans need.';
    }

    // Exact response structure as required
    const responseData = {
      status: 'success',
      user: {
        email: 'samuelonyedikachi450@gmail.com',
        name: 'Samuel Onyedikachi',
        stack: 'Node.js/Express',
      },
      timestamp: timestamp, // Updates dynamically with every new request
      fact: catFact, // New cat fact fetched on every request (not cached)
    };

    // Set Content-Type: application/json
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(responseData);
  } catch (error) {
    // Error handling for internal server errors
    console.error('Internal server error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
});

// Basic rate limiting
const requestCounts = new Map();
app.use((req, res, next) => {
  const clientIP = req.ip;
  const now = Date.now();
  const windowStart = now - 60000; // 1 minute window

  if (!requestCounts.has(clientIP)) {
    requestCounts.set(clientIP, []);
  }

  const requests = requestCounts
    .get(clientIP)
    .filter((time) => time > windowStart);
  requests.push(now);
  requestCounts.set(clientIP, requests);

  if (requests.length > 60) {
    // 60 requests per minute
    return res.status(429).json({
      status: 'error',
      message: 'Too many requests',
    });
  }

  next();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Endpoint: GET http://localhost:${PORT}/me`);
  console.log(`Request timeout: ${REQUEST_TIMEOUT}ms`);
  console.log(`Cat Facts API: ${CAT_FACT_API_URL}`);
});
