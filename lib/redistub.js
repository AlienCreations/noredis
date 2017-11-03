'use strict';

const redistub = {
  createClient : () => ({
    expire : (k, n, cb) => {
      if (isNaN(n)) {
        throw 'ERR value is not an integer or out of range';
      }
      cb && cb(null, 1);
    },
    get    : (k, cb) => {
      cb && cb(null, null);
    },
    keys   : (k, cb) => {
      cb && cb(null, []);
    },
    set    : (k, v, cb) => {
      cb && cb(null, 'OK');
    },
    del    : (k, cb) => {
      cb && cb(null, 1);
    },
    on     : (k, cb) => 'OK'
  })
};

module.exports = redistub;
