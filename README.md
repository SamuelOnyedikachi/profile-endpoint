# Dynamic Profile Endpoint - Backend Wizards Stage 0

A RESTful API endpoint that returns profile information with dynamic cat facts from an external API, built for HNG Backend Wizards Stage 0 task.


## 📋 Task Requirements
This project fulfills all requirements for the Backend Wizards Stage 0 task:
- GET `/me` endpoint returning JSON with exact specified structure
- Dynamic UTC timestamps in ISO 8601 format
- Integration with Cat Facts API (https://catfact.ninja/fact)
- Proper error handling and timeout management
- Deployed on Railway


## 🚀 Live Demo
**Live API URL:** https://profile-endpoint-production-51ed.up.railway.app/me
**GitHub Repository:** https://github.com/SamuelOnyedikachi/profile-endpoint


## 💻 Local Development
### Prerequisites
- Node.js (version 14 or higher)
- npm


### Setup Instructions
1. **Clone the repository**
```bash
git clone https://github.com/SamuelOnyedikachi/profile-endpoint.git
cd profile-endpoint
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Create .env file with the following variables:
PORT=3000
CAT_FACT_API_URL=https://catfact.ninja/fact
REQUEST_TIMEOUT=5000
```

4. **Run the server**
```bash
npm start
```

5. **Test the endpoint**
```bash
curl http://localhost:3000/me
```


## 📦 Dependencies
### Production Dependencies
- `express`: ^4.18.2
- `node-fetch`: ^3.3.2

### Installation
All dependencies are installed with:
```bash
npm install
```

## 🔧 Environment Variables
The following environment variables are required:

```env
PORT=3000
CAT_FACT_API_URL=https://catfact.ninja/fact
REQUEST_TIMEOUT=5000
```

## 🎯 API Documentation
### GET `/me`
Returns profile information with a dynamic cat fact.


**Response Format:**
```json
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
```


**Headers:**
- `Content-Type: application/json`


## ✅ Testing
### Test the Endpoint Locally
```bash
# Test multiple times to verify dynamic content
curl http://localhost:3000/me
curl http://localhost:3000/me
curl http://localhost:3000/me
```

### Test the Live Endpoint
```bash
curl https://profile-endpoint-production-51ed.up.railway.app/me
```

### Expected Results
- ✅ Status code: 200 OK
- ✅ Content-Type: application/json
- ✅ All required fields present
- ✅ Dynamic timestamp changes with each request
- ✅ Cat fact changes with each request (or fallback used)


## 🚀 Deployment
Deployed on **Railway** with automatic GitHub integration.


## 📁 Project Structure

```
profile-endpoint/
├── server.js          # Main Express server
├── package.json       # Dependencies and scripts
├── .env              # Environment variables
├── .gitignore        # Git ignore rules
└── README.md         # Project documentation
```


## 👨‍💻 Author
**Samuel Onyedikachi**  
- Email: samuelonyedikachi450@gmail.com
- GitHub: [SamuelOnyedikachi](https://github.com/SamuelOnyedikachi)

---

*Successfully completed Backend Wizards Stage 0 Task*

## 📝 Submission Notes

- ✅ All task requirements implemented
- ✅ API deployed and tested
- ✅ Response format matches exact specification
- ✅ Error handling implemented with fallbacks
- ✅ Environment variables configured
- ✅ Comprehensive documentation provided

**Submission Date:** October 2024  
**Backend Wizards Cohort**
