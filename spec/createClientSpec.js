'use strict';

const redistub = require('../lib/redistub');

let redisClient, isClientMethod;

describe('createClient', () => {

  beforeEach(() => {
    redisClient    = redistub.createClient();
    isClientMethod = k => typeof redisClient[k] === 'function';
  });

  describe('returns a stubbed out Redis API which', () => {

    it('contains an expire method', () => {
      expect(isClientMethod('expire')).toBe(true);
    });

    it('contains a get method', () => {
      expect(isClientMethod('get')).toBe(true);
    });

    it('contains a set method', () => {
      expect(isClientMethod('set')).toBe(true);
    });

    it('contains a del method', () => {
      expect(isClientMethod('del')).toBe(true);
    });

  });
});
