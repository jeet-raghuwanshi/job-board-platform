# MERN Stack Job Board Platform

This project is a comprehensive job board platform developed using the MERN (MongoDB, Express.js, React, Node.js) stack. The platform allows employers to post job listings, and job seekers to search and filter jobs based on various criteria.

## System Design

The project follows a client-server architecture, with the frontend built using React and the backend using Node.js with Express.js. The data is stored in a MongoDB database.

### Frontend (React)

The frontend is a single-page application (SPA) built with React. It consists of the following main components:

1. **Landing Page**: The entry point of the application, providing an overview and navigation options.
2. **Employer Dashboard**: Allows employers to create, update, and manage job postings.
3. **Job Seeker Interface**: Enables job seekers to search and filter job listings based on various criteria, such as location, job type, and salary range.
4. **Job Details Page**: Displays detailed information about a specific job posting, including the company profile and job requirements.
5. **User Authentication**: Handles user registration, login, and authentication using JSON Web Tokens (JWT).

### Backend (Node.js with Express.js)

The backend is built using Node.js with Express.js, serving as the API layer for the application. It includes the following main components:

1. **Authentication Routes**: Handles user registration, login, and token generation using JWT.
2. **Company Routes**: Manages company-related operations, such as creating and updating company profiles, and posting job listings.
3. **Job Routes**: Handles job-related operations, such as creating, updating, and retrieving job postings, as well as searching and filtering jobs based on various criteria.
4. **User Routes**: Manages user-related operations, such as updating user profiles and retrieving user data.
5. **MongoDB Models**: Defines the data schemas for companies, jobs, and users using Mongoose, a MongoDB object modeling library.

### Database (MongoDB)

The application uses MongoDB, a NoSQL database, to store and retrieve data. The main collections in the database include:

1. **Companies**: Stores company profiles and job postings.
2. **Jobs**: Stores job listings and related information.
3. **Users**: Stores user profiles and authentication data.

## MERN Stack Components

The project leverages the following MERN stack components:

1. **MongoDB**: A NoSQL database for storing application data.
2. **Express.js**: A web application framework for Node.js, used for building the backend API.
3. **React**: A JavaScript library for building user interfaces, used for developing the frontend.
4. **Node.js**: A JavaScript runtime environment for executing server-side code.

Additionally, the project utilizes the following libraries and frameworks:

- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB, used for defining data schemas and interacting with the database.
- **React Router**: A routing library for React, used for handling client-side navigation in the single-page application.
- **Redux**: A state management library for JavaScript apps, used to manage the application state in a predictable way.
- **React Redux**: Official React bindings for Redux, enabling React components to read data from a Redux store and dispatch actions.
- **React Hook Form**: A library for managing form state and validation in React applications.
- **Axios**: A promise-based HTTP client for the browser and Node.js, used for making HTTP requests to the backend API.
- **JSON Web Tokens (JWT)**: A standard for securely transmitting information between parties as a JSON object, used for user authentication and authorization.
- **Tailwind CSS**: A utility-first CSS framework for styling the user interface.

## Implementation Details

The project follows a modular structure, with separate directories for components, controllers, models, routes, and middleware functions. The backend API adheres to RESTful principles, enabling efficient communication between the client and server.

User authentication is implemented using JSON Web Tokens (JWT), ensuring secure access to protected routes and functionalities. Employers can create and manage job postings, while job seekers can search and filter job listings based on various criteria, such as location, job type, and salary range.

## Setup and Installation

To set up and run the job board platform locally, follow these steps:

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/jeet-raghuwanshi/job-board-platform.git
    ```
2. Navigate to the server directory:
    ```sh
    cd job-board-platform/server
    ```
3. Install the necessary dependencies:
    ```sh
    npm install
    ```
4. Create a `.env` file in the `server` directory and provide the required environment variables (e.g., MongoDB connection string, JWT secret key).
    ```
    MONGODB_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    ```
5. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup

1. In a separate terminal window, navigate to the client directory:
    ```sh
    cd ../client
    ```
2. Install the necessary dependencies:
    ```sh
    npm install
    ```
3. Start the frontend development server:
    ```sh
    npm run dev
    ```

The application will now be accessible at `http://localhost:3000` (or the specified port).

## Contributing

Contributions to this project are welcome. If you find any issues or want to add new features, please create a new issue or submit a pull request.

## License

Currently none
