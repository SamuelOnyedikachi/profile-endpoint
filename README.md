# Dynamic Profile Endpoint - Backend Wizards Stage 0

A RESTful API endpoint that returns profile information with dynamic cat facts from an external API, built for HNG Backend Wizards Stage 0 task.


**📋 Task Requirements Met**
- ✅ GET `/me` endpoint returning exact JSON structure
- ✅ Dynamic UTC timestamp in ISO 8601 format
- ✅ Cat Facts API integration with error handling
- ✅ Proper timeout settings for external API calls
- ✅ CORS headers enabled
- ✅ Basic rate limiting
- ✅ Environment variable configuration
- ✅ Comprehensive logging


**Response Structure (Exact Format)**

{
  "status": "success",
  "user": {
    "email": "samuelonyedikachi450@gmail.com",
    "name": "Samuel Onyedikachi",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-01-15T10:30:45.123Z",
  "fact": "Cats can jump up to 6 times their length."
}


**🛠 Tech Stack**

    Runtime: Node.js
    Framework: Express.js
    HTTP Client: node-fetch
    Deployment: Railway
    Environment: Environment variables
    
    
**📁 Project Structure**
  profile-endpoint/
├── server.js          # Main Express server
├── package.json       # Dependencies and scripts
├── .env              # Environment variables
├── .gitignore        # Files to ignore in git
└── README.md         # Project documentation



**🚀 Deployment**

  🚀 **Live Demo**
    **Live API URL:**  https://profile-endpoint-production-51ed.up.railway.app/me


  **Local setup**

  1. **Clone and install:**
  ```bash
  git clone https://github.com/SamuelOnyedikachi/profile-endpoint.git
  cd profile-endpoint
  npm install
