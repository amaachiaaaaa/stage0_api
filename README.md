 HNG12 Public API  

This API is built for the HNG12 Internship Program(Stage 0) and provides the following information in JSON format:  
- Your registered email address (used in the HNG12 Slack workspace).  
- The current datetime in UTC format .  
- The GitHub URL of the project's codebase.  

This API is designed to be lightweight, fast, and publicly accessible.


Features  
- Supports CORS for cross-origin requests.  
- Returns responses in JSON format.  
- Dynamically generates the current datetime in UTC.  
 



Tech Stack  
- Node.js - Backend runtime.  
- Express.js - Lightweight web framework.  
- CORS- Handles cross-origin requests.  
 

 SETUP INSTRUCTIONS

1.Clone the repository 
Open terrminal and run:  

git clone https://github.com/amaachiaaaaa/stage0_api.git

2.Install dependencies
Run the following command to install all necessary dependencies:npm install or npm i

3.Run the server with this command'npm run dev

4.Test API on thunderclient to make a GET request to: http://localhost:3000 




 API Documentation  

 Base URL 
The API is accessible at: http://localhost:3000 

RESPONSE FORMAT

SUCCESS RESPONSE(200ok);
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}

ERROR RESPONSE(500;Internal server error);
{
  "error": "Internal Server Error"
}

Backlink
https://hng.tech/hire/nodejs-developers
