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
