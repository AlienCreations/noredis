'use strict';

var R        = require('ramda'),
    redistub = require('../lib/redistub');

var redisClient = redistub.createClient();

var _callback;

describe('set', function() {

  beforeEach(function() {
    _callback = jasmine.createSpy('callback');
  });

  it('invokes a provided callback with expected results when given a string value', function() {
    redisClient.set('foo', 'bar', _callback);
    expect(_callback).toHaveBeenCalledWith(null, 'OK');
  });

  it('invokes a provided callback with expected results when given a number', function() {
    redisClient.set('foo', 123, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 'OK');
  });

  it('invokes a provided callback with expected results when given a boolean', function() {
    redisClient.set('foo', true, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 'OK');
  });

  it('invokes a provided callback with expected results when given an object', function() {
    redisClient.set('foo', {a : 1}, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 'OK');
  });

});

