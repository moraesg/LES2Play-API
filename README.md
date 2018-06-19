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

#### /users
- **GET** 

get all users data

```bash
$ curl -s "localhost:8080/users" -H "Content-Type: application/json" | jq
```
```js
[
  {
    "_id": "5b2194cbe383a5303d0c8d0b",
    "email": "example@example.com",
    "username": "example",
    "password": "example123",
    "type": 1,
    "__v": 0
  },
  {
    "_id": "5b2195b10ec977309985cb5f",
    "email": "example@example.com",
    "username": "example",
    "password": "example123",
    "type": 1,
    "__v": 0
  }
]
```

#### /users/:userId
- **GET** 

get single user data. userId's data.

```bash
$ curl -s "localhost:8080/users/5b2194cbe383a5303d0c8d0b" -H "Content-Type: application/json" | jq
```
```js
{
  "_id": "5b2194cbe383a5303d0c8d0b",
  "email": "example@example.com",
  "username": "example",
  "password": "example123",
  "type": 1,
  "__v": 0
}
```

### /users/:userId
- **DELETE**

delete specified users data from db.

```bash
$ curl -s -XDELETE "localhost:8080/users/5b2194cbe383a5303d0c8d0b" -H "Content-Type: application/json" | jq
```

```js
{
  "message": "User deleted."
}
```


## Login
#### /login
- **POST**

send user's username and login. if it matches with db data, returns users data.
```bash
$ curl -s -XPOST "localhost:8080/login" -H "Content-Type: application/json" -d '{
	"username": "example",
	"password": "example123"
}' | jq
```
```js
{
  "_id": "5b2195b10ec977309985cb5f",
  "email": "example@example.com",
  "username": "example",
  "password": "example123",
  "type": 1,
  "__v": 0
}
```
wrong input
```js
{
  "error": "username or password incorrect."
}
```



## Games endpoints
#### /games
- **POST** 

Inserts a game into database. A Json body is required as shown next.
```bash
$ curl -s -XPOST "localhost:8080/games" -H "Content-Type: application/json" -d '{
	"name": "corrida rapida",
	"synopse": "corra o mais rapido ",
	"tags": "Corrida",
	"price": 12.35,
	"releasedate": "2013-03-01T01:10:00",
	"developer": "lero dvpl",
	"editor": "lero edts",
	"genre": "Corrida",
	"rating": 0,
	"imgsrc": "https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9171307&qld=90&l=430&a=-1"
}' | jq
```

```js
{
  "_id": "5b22fd4960860437638be767",
  "name": "corrida rapida",
  "synopse": "corra o mais rapido ",
  "tags": "Corrida",
  "price": 12.35,
  "releasedate": "2013-03-01T04:10:00.000Z",
  "developer": "lero dvpl",
  "editor": "lero edts",
  "genre": "Corrida",
  "rating": 0,
  "imgsrc": "https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9171307&qld=90&l=430&a=-1",
  "__v": 0
}
```

#### /games/:gameId
- **PUT** 

Change a games's data. Id must be passed as param (**:gameId**), a Json body with location data is also required as shown.

```bash
$ curl -s -XPUT "localhost:8080/games/5b22f72bee1b383613e6c8f2" -H "Content-Type: application/json" -d '{
	"name": "sanic gotta go slow",
  "synopse": "ouriço",
  "tags": "corrida",
  "price": 12.35,
  "releasedate": "2013-03-01T04:10:00.000Z",
  "developer": "lero dvpl",
  "editor": "lero edts",
  "genre": "horror",
  "rating": 0,
  "imgsrc": "https://http2.mlstatic.com/sonic-forces-ps4-midia-fisica-lacrado-novo-original-D_NQ_NP_658382-MLB26464235963_112017-F.webp"
}' | jq
```
```js
{
  "_id": "5b22f72bee1b383613e6c8f2",
  "name": "sanic gotta go slow",
  "synopse": "ouriço",
  "tags": "corrida",
  "price": 12.35,
  "releasedate": "2013-03-01T04:10:00.000Z",
  "developer": "lero dvpl",
  "editor": "lero edts",
  "genre": "horror",
  "rating": 0,
  "imgsrc": "https://http2.mlstatic.com/sonic-forces-ps4-midia-fisica-lacrado-novo-original-D_NQ_NP_658382-MLB26464235963_112017-F.webp",
  "__v": 0
}
```

#### /games
- **GET** 

get all games data

```bash
$ curl -s "localhost:8080/games" -H "Content-Type: application/json" | jq
```
```js
[
  {
    "_id": "5b22f72bee1b383613e6c8f2",
    "name": "sanic gotta go slow",
    "synopse": "ouriço",
    "tags": "corrida",
    "price": 12.35,
    "releasedate": "2013-03-01T04:10:00.000Z",
    "developer": "lero dvpl",
    "editor": "lero edts",
    "genre": "horror",
    "rating": 0,
    "imgsrc": "https://http2.mlstatic.com/sonic-forces-ps4-midia-fisica-lacrado-novo-original-D_NQ_NP_658382-MLB26464235963_112017-F.webp",
    "__v": 0
  },
  {
    "_id": "5b22f8c286969c3646ef8c41",
    "name": "Roller Coaster",
    "synopse": "Construa seu parque",
    "tags": "Construcao",
    "price": 12.35,
    "releasedate": "2013-03-01T04:10:00.000Z",
    "developer": "lero dvpl",
    "editor": "lero edts",
    "genre": "Construçao",
    "rating": 0,
    "imgsrc": "https://http2.mlstatic.com/rollercoaster-tycoon-world-dvd-pc-midia-fisica-D_NQ_NP_782650-MLB26799855909_022018-F.webp",
    "__v": 0
  }
]
```

#### /games/:gameId
- **GET** 

get single game data. gameId's data.

```bash
$ curl -s "localhost:8080/games/5b22f8c286969c3646ef8c41" -H "Content-Type: application/json" | jq
```
```js
{
    "_id": "5b22f8c286969c3646ef8c41",
    "name": "Roller Coaster",
    "synopse": "Construa seu parque",
    "tags": "Construcao",
    "price": 12.35,
    "releasedate": "2013-03-01T04:10:00.000Z",
    "developer": "lero dvpl",
    "editor": "lero edts",
    "genre": "Construçao",
    "rating": 0,
    "imgsrc": "https://http2.mlstatic.com/rollercoaster-tycoon-world-dvd-pc-midia-fisica-D_NQ_NP_782650-MLB26799855909_022018-F.webp",
    "__v": 0
  }
```

### /games/:gameId
- **DELETE**

delete specified games data from db.

```bash
$ curl -s -XDELETE "localhost:8080/games/5b22f8c286969c3646ef8c41" -H "Content-Type: application/json" | jq
```

```js
{
  "message": "Game deleted."
}
```

#### /genres
- **GET** 

get all genres from games

```bash
$ curl -s "localhost:8080/genres" -H "Content-Type: application/json" | jq
```
```js
[
  "horror",
  "Corrida"
]
```

