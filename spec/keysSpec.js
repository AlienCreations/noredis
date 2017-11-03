'use strict';

const redistub = require('../lib/redistub');

const redisClient = redistub.createClient();

let _callback;

describe('keys', () => {

  beforeEach(() => {
    _callback = jasmine.createSpy('callback');
  });

  it('invokes a provided callback with expected results when given a string', () => {
    redisClient.keys('foo', _callback);
    expect(_callback).toHaveBeenCalledWith(null, []);
  });

  it('invokes a provided callback with expected results when given a number', () => {
    redisClient.keys(123, _callback);
    expect(_callback).toHaveBeenCalledWith(null, []);
  });

  it('invokes a provided callback with expected results when given a boolean', () => {
    redisClient.keys(true, _callback);
    expect(_callback).toHaveBeenCalledWith(null, []);
  });

  it('invokes a provided callback with expected results when given an object', () => {
    redisClient.keys({a : 1}, _callback);
    expect(_callback).toHaveBeenCalledWith(null, []);
  });

});

