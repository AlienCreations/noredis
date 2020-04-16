# redistub
A Redis shell with no state, meant for testing controllers which check cache before using a model.

[![Build Status](https://travis-ci.org/AlienCreations/redistub.svg?branch=master)](https://travis-ci.org/AlienCreations/redistub) [![Coverage Status](https://coveralls.io/repos/AlienCreations/redistub/badge.svg?branch=master&service=github)](https://coveralls.io/github/AlienCreations/redistub?branch=master) [![npm version](http://img.shields.io/npm/v/redistub.svg)](https://npmjs.org/package/redistub) [![Dependency Status](https://david-dm.org/AlienCreations/redistub.svg)](https://david-dm.org/AlienCreations/redistub)

## Install

```
$ npm install redistub --save
```

Run the specs

```
$ npm test
```

## Supported Redis client API stubs

#### createClient
Creates a new stateless API.

```js

var redis       = require('redistub'),
    redisClient = redis.createClient();

// Now use redisClient as you intend to in production and write your tests to assume redis is offline.

```

#### createClient -> get
Normally used to get an item from the Redis store, this method will always
return `null` for both `err` and `val`

```js

var redis       = require('redistub'),
    redisClient = redis.createClient();

redisClient.get('someCacheKey', function(err, val) {
  // err will always be null
  // val will always be null
});

```

#### createClient -> mget
Normally used to get an array of items from the Redis store, this method will always
return `null` for both `err` and `val`

```js

var redis       = require('redistub'),
    redisClient = redis.createClient();

redisClient.mget(['someCacheKey', 'someOtherCacheKey'], function(err, val) {
  // err will always be null
  // val will always be null
});

```

#### createClient -> set
Normally used to set an item in the Redis store, this
method will always return `null` for `err` and `OK` for `res`

```js

var redis       = require('redistub'),
    redisClient = redis.createClient();

redisClient.set('someCacheKey', 'someVal', function(err, res) {
  // err will always be null
  // res will always be OK
});

```

#### createClient -> expire
Normally used to set an expiration ttl for an item in the Redis store, this
method will always return `null` for `err` and `1` for `affectedItems`

```js

var redis       = require('redistub'),
    redisClient = redis.createClient();

redisClient.expire('someCacheKey', 3600, function(err, affectedItems) {
  // err will always be null
  // affectedItems will always be 1
});

```

#### createClient -> del
Normally used to remove an item from the Redis store, this
method will always return `null` for `err` and `1` for `affectedItems`

```js

var redis       = require('redistub'),
    redisClient = redis.createClient();

redisClient.del('someCacheKey', 'someVal', function(err, affectedItems) {
  // err will always be null
  // affectedItems will always be 1
});

```
