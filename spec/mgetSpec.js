'use strict';

const redistub = require('../lib/redistub');

const redisClient = redistub.createClient();

let _callback;

describe('mget', () => {

  beforeEach(() => {
    _callback = jasmine.createSpy('callback');
  });

  it('invokes a provided callback with expected results when given a string', () => {
    redisClient.mget('foo', _callback);
    expect(_callback).toHaveBeenCalledWith(null, null);
  });

  it('invokes a provided callback with expected results when given a number', () => {
    redisClient.mget(123, _callback);
    expect(_callback).toHaveBeenCalledWith(null, null);
  });

  it('invokes a provided callback with expected results when given a boolean', () => {
    redisClient.mget(true, _callback);
    expect(_callback).toHaveBeenCalledWith(null, null);
  });

  it('invokes a provided callback with expected results when given an array', () => {
    redisClient.mget([{a : 1}], _callback);
    expect(_callback).toHaveBeenCalledWith(null, null);
  });

});

