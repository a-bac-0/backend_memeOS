# Meme API Project

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Database Design](#database-design)
- [Project Setup](#project-setup)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Folder Structure](#folder-structure)
- [Error Handling](#error-handling)

## Description

This project is an API for managing meme data, allowing users to perform basic CRUD (Create, Read, Update, Delete) operations on meme resources. The API is built using Node.js, Express, and Sequelize ORM, and includes input validation with Express-validator. Additionally, it supports testing with Jest and Supertest.

## Features

- **CRUD Operations:** The API supports creating, reading, updating, and deleting memes.
- **Database Design:** A relational database design to store meme data such as name, image, date, author, stream, and description.
- **Error Handling:** Built-in error handling for invalid data and missing resources.
- **Validation:** All incoming data is validated using `express-validator`.
- **Postman Documentation:** API documentation provided through Postman collections.
- **BONUS: Frontend Integration:** The API can be integrated with a React frontend.
- **BONUS: Automated Testing:** Tests created with Jest and Supertest.
- **BONUS: Sequelize ORM:** Database interactions are handled via Sequelize ORM, which simplifies data management.

## Technologies Used

- **Node.js**: Backend framework
- **Express.js**: Web framework for building APIs
- **Sequelize**: ORM for relational databases
- **Express-validator**: Validation middleware for handling request data
- **Postman**: API documentation and testing
- **Jest & Supertest**: Unit and integration testing framework

## Database Design

The database is designed to store the following information about memes:

- **name**: String (Required)
- **image**: URL (Required)
- **date**: Date (Required)
- **author**: String (Required)
- **stream**: String (Optional)
- **description**: Text (Optional)

To design the database schema **drawSQL** were used. You can refer to the design diagram [here](#).

## Project Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **PostgreSQL/MySQL** (for database setup)

### Installation

1. Clone the repository:

   ```bash
   git clone (https://github.com/a-bac-0/backend_memeOS)](https://github.com/a-bac-0/backend_memeOS.git)
   ```

   ```bash
   cd backend_memeOS
   ```

2. Install the dependencies:

   ```bash
    npm install
   ```

````

3. Create a `.env` file in the root directory of your project and add the following environment variables:

   ```bash
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
````

4. Run the following command to create the database tables:

   ```bash
    npx sequelize-cli db:migrate
   ```

5. Run the following command to seed the database with sample data:

   ```bash
    npx sequelize-cli db:seed:all
   ```

6. Start the server:

   ```bash
    node app.js
   ```

## API Documentation

The API will be available at http://localhost:8000.

## Postman Documentation: The API is fully documented via Postman. You can import the Postman collection by using the following link: https://www.postman.com/spaceflight-operator-27824522/memeos-api/collection/3u54czh/memeos-api?action=share&creator=37812295

### Available Endpoints

### Meme Endpoints

| Method | Endpoint     | Description                   | Request Body                                         | Response Example                       |
| ------ | ------------ | ----------------------------- | ---------------------------------------------------- | -------------------------------------- |
| GET    | `/memes`     | Get all memes                 | N/A                                                  | 200 OK with list of all memes          |
| GET    | `/memes/:id` | Get a meme by ID              | N/A                                                  | 200 OK with the meme data              |
| POST   | `/memes`     | Create a new meme             | `{ name, image, date, author, stream, description }` | 201 Created with the created meme data |
| PUT    | `/memes/:id` | Update an existing meme by ID | `{ name, image, date, author, stream, description }` | 200 OK with the updated meme data      |
| DELETE | `/memes/:id` | Delete a meme by ID           | N/A                                                  | 200 OK with success message            |

## Testing

The API includes unit and integration tests using Jest and Supertest. To run the tests, use the following command:

```bash
npm test
```

## Folder Structure

The project follows the MVC (Model-View-Controller) design pattern, making it modular and maintainable.

```bash
backend_memeOS
├── __tests__           # Jest test files
├── controllers         # Controllers for handling requests
├── models              # Sequelize models for database
├── routes              # Express routes
├── validators          # Express-validator validation rules
├── tests               # Jest and Supertest for unit tests
├── config              # Database configuration
├── migrations          # Sequelize migrations
├── seeders             # Database seed files
└── app.js              # Express application setup
```

### Example Requests and Responses

#### 1. `GET /memes`

- **Description**: Fetch all memes from the database.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "Funny Meme",
      "image": "https://example.com/meme.jpg",
      "date": "2023-09-01",
      "author": "John Doe",
      "stream": "Random",
      "description": "This is a meme description."
    }
  ]
  ```

#### 2. `POST /memes`

- **Description**: Create a new meme in the database.
- **Request Body**:
  ```json
  {
    "name": "Funny Meme",
    "image": "https://example.com/meme.jpg",
    "date": "2023-09-01",
    "author": "John Doe",
    "stream": "Random",
    "description": "This is a meme description."
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "name": "Funny Meme",
    "image": "https://example.com/meme.jpg",
    "date": "2023-09-01",
    "author": "John Doe",
    "stream": "Random",
    "description": "This is a meme description."
  }
  ```

### Error Handling

The API includes error handling for common scenarios such as invalid data, missing resources, and server errors. The error responses follow a standard format with a status code and message.

#### Example Error Response

```json
{
  "status": 404,
  "message": "Meme not found with ID 1"
}
```
