'use strict';

var R        = require('ramda'),
    redistub = require('../lib/redistub');

var redisClient, isClientMethod;

describe('createClient', function() {

  beforeEach(function() {
    redisClient    = redistub.createClient();
    isClientMethod = R.compose(R.is(Function), R.prop(R.__, redisClient));
  });

  describe('returns a stubbed out Redis API which', function() {

    it('contains an expire method', function() {
      expect(isClientMethod('expire')).toBe(true);
    });

    it('contains a get method', function() {
      expect(isClientMethod('get')).toBe(true);
    });

    it('contains a set method', function() {
      expect(isClientMethod('set')).toBe(true);
    });

    it('contains a del method', function() {
      expect(isClientMethod('del')).toBe(true);
    });

  });
});
