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

## /captain/register Endpoint Documentation

### Description
This endpoint registers a new captain by accepting captain details, including personal and vehicle information.

### Endpoint
`POST /captain/register`

### Request Body
- `fullname`: an object containing:
  - `firstname` (string, required, minimum 3 characters)
- `email`: a string (required, valid email format)
- `password`: a string (required, minimum 6 characters)
- `vehicle`: an object containing:
  - `color` (string, required, minimum 3 characters)
  - `plate` (string, required, minimum 3 characters)
  - `capacity` (integer, required, minimum 1)
  - `vehicleType` (string, required, must be one of `car`, `motorcycle`, or `auto`)

### Responses

#### Success (201 Created)
- Returns a JSON object with the newly created captain's details.

Example:
```json
{
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error (400 Bad Request)
- Occurs when the validation fails.
- Returns a JSON object with an `errors` array detailing the validation issues.

Example:
```json

{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Please enter a valid email address",
      "param": "email",
      "location": "body"
    }
    // ...other errors if any
  ]
}