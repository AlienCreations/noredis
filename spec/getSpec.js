'use strict';

var R        = require('ramda'),
    redistub = require('../lib/redistub');

var redisClient = redistub.createClient();

var _callback;

describe('get', function() {

  beforeEach(function() {
    _callback = jasmine.createSpy('callback');
  });

  it('invokes a provided callback with expected results when given a string', function() {
    redisClient.get('foo', _callback);
    expect(_callback).toHaveBeenCalledWith(null, null);
  });

  it('invokes a provided callback with expected results when given a number', function() {
    redisClient.get(123, _callback);
    expect(_callback).toHaveBeenCalledWith(null, null);
  });

  it('invokes a provided callback with expected results when given a boolean', function() {
    redisClient.get(true, _callback);
    expect(_callback).toHaveBeenCalledWith(null, null);
  });

  it('invokes a provided callback with expected results when given an object', function() {
    redisClient.get({a : 1}, _callback);
    expect(_callback).toHaveBeenCalledWith(null, null);
  });

});

