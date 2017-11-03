'use strict';

const redistub = require('../lib/redistub');

const redisClient = redistub.createClient();

const ERR_RANGE = 'ERR value is not an integer or out of range';

let _callback;

describe('expire', () => {

  beforeEach(() => {
    _callback = jasmine.createSpy('callback');
  });

  it('invokes a provided callback with expected results when given a number', () => {
    redisClient.expire('foo', 123, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 1);
  });

  it('invokes a provided callback with expected results when given a number', () => {
    redisClient.expire('foo', true, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 1);
  });

  it('throws an error when given a string value', () => {
    expect(() => {
      redisClient.expire('foo', 'bar', _callback);
    }).toThrow(ERR_RANGE);
  });

  it('throws an error when given an object value', () => {
    expect(() => {
      redisClient.expire('foo', {a : 1}, _callback);
    }).toThrow(ERR_RANGE);
  });

});

