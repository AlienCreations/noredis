'use strict';

const redistub = require('../lib/redistub');

const redisClient = redistub.createClient();

let _callback;

describe('on event', () => {

  it('returns OK when given a string', () => {
    expect(redisClient.on('foo', _callback)).toBe('OK');
  });

  it('returns OK when given a number', () => {
    expect(redisClient.on(123, _callback)).toBe('OK');
  });

  it('returns OK when given a boolean', () => {
    expect(redisClient.on(true, _callback)).toBe('OK');
  });

  it('returns OK when given an object', () => {
    expect(redisClient.on({a : 1}, _callback)).toBe('OK');
  });

});

