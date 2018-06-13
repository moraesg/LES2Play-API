### Running MongoDB with docker

our connection to db is hardcoded, so, we just need to run a docker with the following command:

```bash
$ docker run --name LES2Play -p 27017:27017 -d mongo
```