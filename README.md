# Dynamic Profile Endpoint - Backend Wizards Stage 0

A RESTful API endpoint that returns profile information with dynamic cat facts from an external API.

## Features

- ✅ GET `/me` endpoint returning exact JSON structure
- ✅ Dynamic UTC timestamp in ISO 8601 format
- ✅ Cat Facts API integration with error handling
- ✅ Proper timeout settings for external API calls
- ✅ CORS headers enabled
- ✅ Basic rate limiting
- ✅ Environment variable configuration
- ✅ Comprehensive logging

## Local Setup

1. **Clone and install:**
```bash
git clone https://github.com/SamuelOnyedikachi/profile-endpoint.git
cd profile-endpoint
npm install
