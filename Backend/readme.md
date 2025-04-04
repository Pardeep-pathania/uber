# /users/register Endpoint Documentation

## Description
This endpoint registers a new user by accepting user details and returning an authentication token along with the user information.

## Endpoint
`POST /users/register`

## Request Body
- `fullname`: an object containing:
  - `firstname` (string, required, minimum 3 characters)
  - `lastname` (string, optional, minimum 3 characters if provided)
- `email`: a string (required, valid email format, minimum 5 characters)
- `password`: a string (required, minimum 6 characters)

## Responses

### Success (201 Created)
- Returns a JSON object with:
  - `token`: the generated JWT authentication token.
  - `user`: the newly created user object.

Example:
```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other user fields
  }
}
```

### Error (400 Bad Request)
- Occurs when the validation fails.
- Returns a JSON object with an `errors` array detailing the validation issues.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
    // ...other errors if any
  ]
}
```

## /users/login Endpoint Documentation

### Description
This endpoint authenticates a user by validating the email and password provided, returning an authentication token and user details.

### Endpoint
`POST /users/login`

### Request Body
- `email`: a string (required, valid email format)
- `password`: a string (required, minimum 6 characters)

### Responses

#### Success (200 OK)
- Returns a JSON object with:
  - `token`: the generated JWT authentication token.
  - `user`: the authenticated user object.

Example:
```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other user fields
  }
}
```

#### Error (400 Bad Request / 401 Unauthorized)
- Validation errors (400): Returns a JSON object with an `errors` array.
- Authentication failure (401): Returns a JSON object with a message "Invalid email or password".

## /users/profile Endpoint Documentation

### Description
Returns the authenticated user's profile details.

### Endpoint
GET /users/profile

### Authentication
Requires a valid JWT token in a cookie or the Authorization header.

### Responses

#### Success (200 OK)
- Returns a JSON object with the user's profile.

Example:
```json
{
  "user": {
    "_id": "user_id",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com"
    // ...other user fields
  }
}
```

#### Error (401 Unauthorized)
- Returned if the token is missing or invalid.

## /users/logout Endpoint Documentation

### Description
Logs out the authenticated user by clearing the token cookie and blacklisting the JWT token.

### Endpoint
GET /users/logout

### Authentication
Requires a valid JWT token in a cookie or the Authorization header.

### Responses

#### Success (200 OK)
- Returns a confirmation message.

Example:
```json
{
  "message": "Logged out successfully"
}
```

#### Error (401 Unauthorized)
- Returned if the token is missing or invalid.

## /captains/register Endpoint Documentation

### Description
This endpoint registers a new captain by accepting captain details, including personal and vehicle information.

### Endpoint
`POST /captains/register`

### Request Body
```json
{
  "fullname": {
    "firstname": "John", // string, required, minimum 3 characters
    "lastname": "Doe" // string, optional, minimum 3 characters if provided
  },
  "email": "john.doe@example.com", // string, required, valid email format
  "password": "securepassword", // string, required, minimum 6 characters
  "vehicle": {
    "color": "Red", // string, required, minimum 3 characters
    "plate": "ABC123", // string, required, minimum 3 characters
    "capacity": 4, // integer, required, minimum 1
    "vehicleType": "car" // string, required, must be one of "car", "motorcycle", or "auto"
  }
}
```

### Responses

#### Success (201 Created)
```json
{
  "captain": {
    "_id": "captain_id", // string, unique identifier for the captain
    "fullname": {
      "firstname": "John", // string, captain's first name
      "lastname": "Doe" // string, captain's last name
    },
    "email": "john.doe@example.com", // string, captain's email
    "vehicle": {
      "color": "Red", // string, vehicle color
      "plate": "ABC123", // string, vehicle plate number
      "capacity": 4, // integer, vehicle capacity
      "vehicleType": "car" // string, type of vehicle
    }
  },
  "token": "<jwt_token>" // string, JWT authentication token
}
```

#### Error (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long", // error message
      "param": "fullname.firstname", // parameter that caused the error
      "location": "body" // location of the error
    },
    {
      "msg": "Please enter a valid email address", // error message
      "param": "email", // parameter that caused the error
      "location": "body" // location of the error
    }
    // ...other errors if any
  ]
}
```

---

## /captains/login Endpoint Documentation

### Description
This endpoint authenticates a captain by validating the email and password provided, returning an authentication token and captain details.

### Endpoint
`POST /captains/login`

### Request Body
```json
{
  "email": "john.doe@example.com", // string, required, valid email format
  "password": "securepassword" // string, required, minimum 6 characters
}
```

### Responses

#### Success (200 OK)
```json
{
  "captain": {
    "_id": "captain_id", // string, unique identifier for the captain
    "fullname": {
      "firstname": "John", // string, captain's first name
      "lastname": "Doe" // string, captain's last name
    },
    "email": "john.doe@example.com", // string, captain's email
    "vehicle": {
      "color": "Red", // string, vehicle color
      "plate": "ABC123", // string, vehicle plate number
      "capacity": 4, // integer, vehicle capacity
      "vehicleType": "car" // string, type of vehicle
    }
  },
  "token": "<jwt_token>" // string, JWT authentication token
}
```

#### Error (401 Unauthorized)
```json
{
  "message": "Invalid email or password" // error message for authentication failure
}
```

---

## /captains/profile Endpoint Documentation

### Description
Returns the authenticated captain's profile details.

### Endpoint
`GET /captains/profile`

### Authentication
Requires a valid JWT token in a cookie or the Authorization header.

### Responses

#### Success (200 OK)
```json
{
  "captain": {
    "_id": "captain_id", // string, unique identifier for the captain
    "fullname": {
      "firstname": "John", // string, captain's first name
      "lastname": "Doe" // string, captain's last name
    },
    "email": "john.doe@example.com", // string, captain's email
    "vehicle": {
      "color": "Red", // string, vehicle color
      "plate": "ABC123", // string, vehicle plate number
      "capacity": 4, // integer, vehicle capacity
      "vehicleType": "car" // string, type of vehicle
    }
  }
}
```

#### Error (401 Unauthorized)
```json
{
  "message": "Unauthorized access" // error message for missing or invalid token
}
```

---

## /captains/logout Endpoint Documentation

### Description
Logs out the authenticated captain by clearing the token cookie and blacklisting the JWT token.

### Endpoint
`GET /captains/logout`

### Authentication
Requires a valid JWT token in a cookie or the Authorization header.

### Responses

#### Success (200 OK)
```json
{
  "message": "Logged out successfully" // confirmation message
}
```

#### Error (401 Unauthorized)
```json
{
  "message": "Unauthorized access" // error message for missing or invalid token
}
```