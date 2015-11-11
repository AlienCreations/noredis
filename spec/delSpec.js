'use strict';

var R        = require('ramda'),
    redistub = require('../lib/redistub');

var redisClient = redistub.createClient();

var _callback;

describe('del', function() {

  beforeEach(function() {
    _callback = jasmine.createSpy('callback');
  });

  it('invokes a provided callback with expected results when given a string', function() {
    redisClient.del('foo', _callback);
    expect(_callback).toHaveBeenCalledWith(null, 1);
  });

  it('invokes a provided callback with expected results when given a number', function() {
    redisClient.del(123, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 1);
  });

  it('invokes a provided callback with expected results when given a boolean', function() {
    redisClient.del(true, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 1);
  });

  it('invokes a provided callback with expected results when given an object', function() {
    redisClient.del({a : 1}, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 1);
  });

});

