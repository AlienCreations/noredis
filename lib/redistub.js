'use strict';

var redistub = {
  createClient : function() {
    return {
      expire : function(k, n, cb) {
        if (isNaN(n)) {
          throw 'ERR value is not an integer or out of range';
        }
        cb && cb(null, 1);
      },
      get    : function(k, cb) {
        cb && cb(null, null);
      },
      set    : function(k, v, cb) {
        cb && cb(null, 'OK');
      },
      del    : function(k, cb) {
        cb && cb(null, 1);
      }
    };
  }
};

module.exports = redistub;
