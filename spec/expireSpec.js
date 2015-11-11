'use strict';

var R        = require('ramda'),
    redistub = require('../lib/redistub');

var redisClient = redistub.createClient();

var ERR_RANGE = 'ERR value is not an integer or out of range';

var _callback;

describe('expire', function() {

  beforeEach(function() {
    _callback = jasmine.createSpy('callback');
  });

  it('invokes a provided callback with expected results when given a number', function() {
    redisClient.expire('foo', 123, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 1);
  });

  it('invokes a provided callback with expected results when given a number', function() {
    redisClient.expire('foo', true, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 1);
  });

  it('throws an error when given a string value', function() {
    expect(function() {
      redisClient.expire('foo', 'bar', _callback);
    }).toThrow(ERR_RANGE);
  });

  it('throws an error when given an object value', function() {
    expect(function() {
      redisClient.expire('foo', {a : 1}, _callback);
    }).toThrow(ERR_RANGE);
  });

});

