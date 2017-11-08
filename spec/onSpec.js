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

  it('fires a bound error event on an error', () => {
    redisClient.on('error', () => redisClient.quit());
    spyOn(redisClient, 'quit').and.callThrough();

    // Trigger an error
    redisClient.get(null);

    expect(redisClient.quit).toHaveBeenCalled();
  });

  it('allows binding to an event multiple times', () => {

    const callbacks = {
      foo : () => {},
      bar : () => {}
    };

    spyOn(callbacks, 'foo').and.callThrough();
    spyOn(callbacks, 'bar').and.callThrough();

    redisClient.on('error', () => callbacks.foo());
    redisClient.on('error', () => callbacks.bar());

    // Trigger an error
    redisClient.get(null);

    expect(callbacks.foo).toHaveBeenCalled();
    expect(callbacks.bar).toHaveBeenCalled();

  });
});

