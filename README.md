# MelodyVerse Full Stack App with JWT


## Overview
This project consists of a backend and frontend component aimed at creating a comprehensive application. The backend, located in the `backend` directory, utilizes Node.js and Express to provide server-side functionalities such as routing, middleware, and database interactions. On the other hand, the frontend, situated in the `Frontend` directory, houses a React application, which is designed to interface with the backend to deliver a dynamic user experience.

## Backend
The `backend` directory contains the following components:

- `app`: This directory houses the core logic of the backend application, including controllers, middleware, models, and routes.
  - `config`: Configuration files for the backend application.
  - `controllers`: Backend controllers responsible for handling incoming requests and generating responses.
  - `middleware`: Custom middleware functions used for request processing, such as authentication and validation.
    - `authJwt.js`: Middleware for authenticating JSON Web Tokens (JWT) in requests.
    - `index.js`: Main entry point for middleware configuration and export.
    - `post.middleware.js`: Middleware specific to post requests.
    - `verifySignUp.js`: Middleware for verifying sign-up requests.
  - `models`: Data models representing entities and their relationships in the application.
  - `routes`: Backend route definitions for mapping HTTP requests to controller actions.
- `node_modules`: Directory containing dependencies installed via npm.
- `.gitignore`: Configuration file specifying files and directories to be ignored by version control.
- `node-js-express-login-example-flow.png`: Image file illustrating the flow of a login example using Node.js and Express.
- `package-lock.json`: Auto-generated file specifying exact versions of installed npm packages.
- `package.json`: Configuration file containing metadata and dependencies for the backend application.
- `README.md`: Markdown file containing information about the backend directory structure and components.
- `server.js`: Entry point for the backend server application.

## Frontend
The `Frontend` directory contains the frontend components of the application:

- `my-app`: This directory houses the React application.
  - `node_modules`: Directory containing dependencies installed via npm.
  - `public`: Directory containing static assets such as HTML and CSS files.
  - `src`: Directory containing the source code for the React application.
  - `.gitignore`: Configuration file specifying files and directories to be ignored by version control.
  - `package-lock.json`: Auto-generated file specifying exact versions of installed npm packages.
  - `package.json`: Configuration file containing metadata and dependencies for the React application.
  - `README.md`: Markdown file containing information about the React application.
- `package-lock.json`: Auto-generated file specifying exact versions of installed npm packages for the frontend.
- `README.md`: Markdown file containing information about the frontend directory structure and components.
- `server.js`: Entry point for the frontend server application.

## Running Locally
To run the project locally, follow these steps:

1. **Backend Setup**:
   - Navigate to the `backend` directory.
   - Install dependencies by running `npm install`.
   - Start the backend server by running `node server.js`.

2. **Frontend Setup**:
   - Navigate to the `Frontend/my-app` directory.
   - Install dependencies by running `npm install`.
   - Start the frontend server by running `npm start`.

3. **Accessing the Application**:
   - Once both the backend and frontend servers are running, you can access the application by opening a web browser and navigating to `http://localhost:3000`.
