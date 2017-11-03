'use strict';

const redistub = require('../lib/redistub');

const redisClient = redistub.createClient();

let _callback;

describe('del', () => {

  beforeEach(() => {
    _callback = jasmine.createSpy('callback');
  });

  it('invokes a provided callback with expected results when given a string', () => {
    redisClient.del('foo', _callback);
    expect(_callback).toHaveBeenCalledWith(null, 1);
  });

  it('invokes a provided callback with expected results when given a number', () => {
    redisClient.del(123, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 1);
  });

  it('invokes a provided callback with expected results when given a boolean', () => {
    redisClient.del(true, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 1);
  });

  it('invokes a provided callback with expected results when given an object', () => {
    redisClient.del({a : 1}, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 1);
  });

});

