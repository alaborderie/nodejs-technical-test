# NodeJS Technical Test

Hey! Here is a quick app to test your NodeJS skills. Nothing hard, you need to create a simple API that should resolve all tests  written.

You can of course write more tests if you want to, and modify them as needed. (They might not work at all as I didnt test them yet)

## What should your API do:

_You don't need to hash passwords as it's only a test app._

- Expose a /subscribe POST route that:
  - Reads from a JSON object like `{ "email": "node@test.com", "password": "somePass", "firstName": "Node", "lastName": "Test" }`
  - Returns a 400 error if the email already exists
  - Returns a 200 if not, and an object like : `{ "email": "node@test.com", "firstName": "Node", "lastName": "Test" }`
- Expose a /login POST route that:
  - Reads from a JSON object like `{ "email": "node@test.com", "password": "somePass" }`
  - Returns a 401 error if the email / password combo does not match
  - Returns a 200 if the email / password combo does match and an object like : `{ "authJWT": "eyJbehoii..." }`
- Expose a /users GET route that:
  - Returns a 401 error if no correct Authorization header is passed
  - Returns a 200 with the list of users registered MINUS the user that calls the route (identified by his Authorization Header)
- Expose a /groups GET route that:
  - Returns a 401 error if no correct Authorization header is passed
  - Returns a 200 with the list of groups created in the app
- Expose a /groups POST route that:
  - Reads from a JSON object like `{ "name": "A new group" }`
  - Returns a 401 error if no correct Authorization header is passed
  - Returns a 200 with the created group.
  - Adds the user that created the group, to the list of users in the group
  - Response should look like this : `{ "name": "A new group", "users": [{ "email": "node@test.com", "firstName": "Node", "lastName": "Test" }] }`
- Expose a /groups/{groupId}/invite POST route that:
  - Reads from a JSON object like `{ "email": "friend@test.com" }`
  - Returns a 401 error if no correct Authorization header is passed
  - Returns a 200 with the group, and the newly added user in the response
  - Response should look like this : `{ "name": "A new group", "users": [{ "email": "node@test.com", "firstName": "Node", "lastName": "Test" }, { "email": "friend@test.com", "firstName": "Friend", "lastName": "Test"}] }`

## Requirements

- You can use any node framework you like and any database (SQL or NoSQL)
- You can also use any library to communicate with your database.
  - I recommend using Sequelize as we currently use it but Prisma or anything else can work.
- You should fork this project and make it public
  - If you want to make it private, you should invite me to the repository when work is finished.
  
