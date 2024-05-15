## User Directory App - Front End

# Overview

The User Directory App is a full-stack application that allows users to search, filter, and view a list of users. It consists of a frontend built with React and a backend built with Node.js and Express.

# Features
- Search users by name or email.
- Filter users by nationality.
- View detailed user information in a modal popup.
- Responsive design for optimal viewing on various devices.
- Fetch user data from a backend API.
- Provide API endpoints for searching and filtering users.

  # Configuration
The backend uses a users.json file to store user data. 
cd user-directory-search/backend
Make sure the users.json file is present in the backend directory and contains the necessary user data in the correct format.
npm install
Start the backend server:
npm start
The application will be accessible at http://localhost:5000.
The frontend application is configured to communicate with the backend API. Ensure that the backend server is running and accessible for the frontend to fetch user data.
 cd user-directory-search/frontend
 npm install
npm start

  
The application will be accessible at http://localhost:3000.
You can configure the API endpoint by modifying the utils/api.js file in the frontend and updating the baseURL constant with the appropriate URL.
