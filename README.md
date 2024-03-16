# Travel Prep

Travel Prep is a travel brochure site that provides users with current weather information, flight details, and a platform to share photographic experiences. The application is built using Create React App for the front end and Express.js for the server. MongoDB is utilized for storing experiences.

[Access Travel Prep](https://travel-prep-290b6c1204c7.herokuapp.com/)

## Description

Travel Prep utilizes various APIs to enhance the user experience:

- Openweather API: Provides current weather information
- AviationStack API: Offers flight details
- Unsplash API: Retrieves dynamic random background pictures based on the entered city

## Features

- Display current weather using Openweather API
- Retrieve flight details via AviationStack API
- CRUD functionality for sharing photographic experiences
- Dynamic random background picture using Unsplash API
- MongoDB database for storing experiences

## Installation

To run the application locally, follow these steps:

### Server/Backend

1. cd server

2. Install dependencies: npm install

3. Start the server in watch mode: nodemon index.js

### React Client/Frontend

1. Navigate to the client directory: cd client

2. Install dependencies: npm install

3. Start the React client: npm start


## Dependencies

### Server/Backend

- bcryptjs: ^2.4.3
- cors: ^2.8.5
- dotenv: ^16.0.0
- express: ^4.17.3
- jsonwebtoken: ^8.5.1
- mongoose: ^6.2.6
- nodemon: ^2.0.20

### React Client/Frontend

- @fortawesome/fontawesome-svg-core: ^1.3.0
- @fortawesome/free-regular-svg-icons: ^6.0.0
- @fortawesome/free-solid-svg-icons: ^6.0.0
- @fortawesome/react-fontawesome: ^0.1.17
- @reduxjs/toolkit: ^1.8.5
- @testing-library/jest-dom: ^5.16.2
- @testing-library/react: ^12.1.4
- @testing-library/user-event: ^13.5.0
- axios: ^0.26.1
- react: ^17.0.2
- react-dom: ^17.0.2
- react-file-base64: ^1.0.3
- react-redux: ^8.0.4
- react-router-dom: ^6.2.2
- react-scripts: 5.0.0
- uuid: ^8.3.2
- web-vitals: ^2.1.4

## Contributing

Contributions are welcome! Please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).


## Contact

For any inquiries or feedback, please contact [Steven Trujillo](mailto:Steveprogramming@outlook.com).
