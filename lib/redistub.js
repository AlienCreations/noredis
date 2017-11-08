'use strict';

const redistub = {
  createClient : () => {

    let __events = {};

    const bindEvent = (k, cb) => {
      if (__events[k]) {
        __events[k].push(cb);
      } else {
        __events[k] = [cb];
      }
    };

    const maybeError = err => {
      if (__events['error']) {
        __events['error'].forEach(cb => cb(err));
      }
    };

    const errIfMissing = s => k => {
      if (!k) {
        maybeError(`Missing ${s}`);
      }
    };

    return {
      expire : (k, n, cb) => {
        if (isNaN(n)) {
          const err = 'ERR value is not an integer or out of range';
          maybeError(err);
          throw err;
        }
        cb && cb(null, 1);
      },
      get    : (k, cb) => {
        errIfMissing('key')(k);
        cb && cb(null, null);
      },
      keys   : (k, cb) => {
        errIfMissing('key')(k);
        cb && cb(null, []);
      },
      set    : (k, v, cb) => {
        errIfMissing('key')(k);
        errIfMissing('value')(v);
        cb && cb(null, 'OK');
      },
      del    : (k, cb) => {
        errIfMissing('key')(k);
        cb && cb(null, 1);
      },
      on     : (k, cb) => {
        errIfMissing('key')(k);
        bindEvent(k, cb);
        return 'OK';
      },
      quit   : () => {
      }
    };
  }
};

module.exports = redistub;
