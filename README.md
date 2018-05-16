# LES2Play-API

## Run MongoDB
To setup mongodb, check out [mongoDB Docker instructions](https://github.com/moraesg/LES2Play-API/tree/master/Banco)

## Launching the application

```bash
$ npm install
$ npm run start
```

## Users endpoints
#### /users
- **POST** 

Inserts a user into database. A Json body is required as shown next.
```bash
$ curl -s -XPOST "localhost:8080/users" -H "Content-Type: application/json" -d '{
	"email": "example@example.com",
	"username": "example",
	"password": "example123",
	"type": 1
}' | jq
```

```js
{
  "_id": "5afba392c390fa4df05ec85b",
  "email": "example@example.com",
  "username": "example",
  "password": "example123",
  "type": 1,
  "__v": 0
}
```

#### /users/:userId
- **PUT** 

Change a user's data. Id must be passed as param (**:userId**), a Json body with location data is also required as shown.

```bash
$ curl -s -XPUT "localhost:8080/users/5afba392c390fa4df05ec85b" -H "Content-Type: application/json" -d '{
	"email": "example@changed.com",
	"username": "anotherexample",
	"password": "examplero",
	"type": 2
}' | jq
```
```js
{
  "_id": "5afba392c390fa4df05ec85b",
  "email": "example@changed.com",
  "username": "anotherexample",
  "password": "examplero",
  "type": 2,
  "__v": 0
}
```