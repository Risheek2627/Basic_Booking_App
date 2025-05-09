# Activity Booking System API

## API Deployment URL
The API is deployed on Render and can be accessed at:
[https://basic-booking-app-4esv.onrender.com](https://basic-booking-app-4esv.onrender.com)


## Overview

An API service that provides functionality for user registration, authentication, activity management, and booking management. Built with Node.js, Express, and MongoDB.

## Table of Contents

- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Dependencies](#dependencies)
- [Data Models](#data-models)
- [Authentication](#authentication)
- [Validation](#validation)
- [Testing](#testing)

## Features

- User registration and authentication using JWT
- Role-based access control (admin/regular users)
- Activity management (admin only)
- Activity booking system
- View personal bookings history
- Input validation
- Comprehensive error handling

## API Endpoints

| Endpoint                       | Method | Auth Required | Admin Required | Description         |
| ------------------------------ | ------ | ------------- | -------------- | ------------------- |
| `/api/user/register`           | POST   | No            | No             | Register new user   |
| `/api/user/login`              | POST   | No            | No             | Login and get token |
| `/api/activity/addActivity`    | POST   | Yes           | Yes            | Add new activities  |
| `/api/activity/listActivities` | GET    | No            | No             | List all activities |
| `/api/booking/bookActivity`    | POST   | Yes           | No             | Book an activity    |
| `/api/booking/getBookings`     | GET    | Yes           | No             | Get user's bookings |

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/Risheek2627/Basic_Booking_App.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables (see [Environment Setup](#environment-setup))

4. Start the server
   ```bash
   npm start
   ```

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
PORT=5000
```

## Dependencies

- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling tool
- **jsonwebtoken**: JWT implementation for authentication
- **bcryptjs**: Password hashing library
- **dotenv**: Environment variable management
- **cors**: Cross-Origin Resource Sharing middleware
- **express-validator**: Input validation middleware

## Data Models

### User

- **name**: String
- **email**: String (unique)
- **phoneNumber**: String
- **password**: String (hashed)
- **isAdmin**: Boolean (default: false)

### Activity

- **title**: String
- **description**: String
- **location**: String

### Booking

- **user**: ObjectId (ref: User)
- **activity**: ObjectId (ref: Activity)
- **createdAt**: Date (default: now)

## Authentication

JWT tokens are required for protected routes. Include the token in the Authorization header:

```
Authorization: Bearer <your_token>
```

Token validity period: 24 hours



## Validation

Input validation is implemented for:

- User registration (name, email, password)
- User login (email, password)
- Activity creation (title, description)
- Booking creation (activityId)

## Testing

You can test the API using tools like Postman or Insomnia:

1. Create a new collection in Postman/Insomnia for this project
2. Set up environment variables to store your server URL and authentication token
3. Create request templates for each endpoint
4. For testing protected routes, first make a login request, then use the returned token in the Authorization header
5. Create test scenarios to verify proper error handling and validation

Example testing workflow:

- Register a new user
- Login with the new user credentials
- List available activities
- Book an activity
- View your bookings

For admin operations, create an admin user directly in the database or implement an admin creation endpoint with proper security.
