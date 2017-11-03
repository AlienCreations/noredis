'use strict';

const redistub = require('../lib/redistub');

const redisClient = redistub.createClient();

let _callback;

describe('get', () => {

  beforeEach(() => {
    _callback = jasmine.createSpy('callback');
  });

  it('invokes a provided callback with expected results when given a string', () => {
    redisClient.get('foo', _callback);
    expect(_callback).toHaveBeenCalledWith(null, null);
  });

  it('invokes a provided callback with expected results when given a number', () => {
    redisClient.get(123, _callback);
    expect(_callback).toHaveBeenCalledWith(null, null);
  });

  it('invokes a provided callback with expected results when given a boolean', () => {
    redisClient.get(true, _callback);
    expect(_callback).toHaveBeenCalledWith(null, null);
  });

  it('invokes a provided callback with expected results when given an object', () => {
    redisClient.get({a : 1}, _callback);
    expect(_callback).toHaveBeenCalledWith(null, null);
  });

});

