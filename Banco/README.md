### Running MongoDB with docker

our connection to db is hardcoded, so, we just need to run a docker with the following command:

```bash
$ docker run --name LES2Play -p 21017:21017 -d mongo
```