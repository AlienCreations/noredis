'use strict';

const redistub = require('../lib/redistub');

const redisClient = redistub.createClient();

let _callback;

describe('set', () => {

  beforeEach(() => {
    _callback = jasmine.createSpy('callback');
  });

  it('invokes a provided callback with expected results when given a string value', () => {
    redisClient.set('foo', 'bar', _callback);
    expect(_callback).toHaveBeenCalledWith(null, 'OK');
  });

  it('invokes a provided callback with expected results when given a number', () => {
    redisClient.set('foo', 123, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 'OK');
  });

  it('invokes a provided callback with expected results when given a boolean', () => {
    redisClient.set('foo', true, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 'OK');
  });

  it('invokes a provided callback with expected results when given an object', () => {
    redisClient.set('foo', {a : 1}, _callback);
    expect(_callback).toHaveBeenCalledWith(null, 'OK');
  });

});

