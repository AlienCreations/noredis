'use strict';

var R        = require('ramda'),
    redistub = require('../lib/redistub');

var redisClient = redistub.createClient();

var _callback;

describe('keys', function() {

  beforeEach(function() {
    _callback = jasmine.createSpy('callback');
  });

  it('invokes a provided callback with expected results when given a string', function() {
    redisClient.keys('foo', _callback);
    expect(_callback).toHaveBeenCalledWith(null, []);
  });

  it('invokes a provided callback with expected results when given a number', function() {
    redisClient.keys(123, _callback);
    expect(_callback).toHaveBeenCalledWith(null, []);
  });

  it('invokes a provided callback with expected results when given a boolean', function() {
    redisClient.keys(true, _callback);
    expect(_callback).toHaveBeenCalledWith(null, []);
  });

  it('invokes a provided callback with expected results when given an object', function() {
    redisClient.keys({a : 1}, _callback);
    expect(_callback).toHaveBeenCalledWith(null, []);
  });

});

