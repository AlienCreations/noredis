'use strict';

const isFunc = f => typeof f === 'function';
const getCb  = a => a[a.length - 1];

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
      expire : (...args) => {
        if (isNaN(args[1])) {
          const err = 'ERR value is not an integer or out of range';
          maybeError(err);
          throw err;
        }
        const cb = getCb(args);
        isFunc(cb) && cb(null, 1);
      },
      get    : (...args) => {
        errIfMissing('key')(args[0]);
        const cb = getCb(args);
        isFunc(cb) && cb(null, null);
      },
      keys   : (...args) => {
        errIfMissing('key')(args[0]);
        const cb = getCb(args);
        isFunc(cb) && cb(null, []);
      },
      set    : (...args) => {
        errIfMissing('key')(args[0]);
        errIfMissing('value')(args[1]);
        const cb = getCb(args);
        isFunc(cb) && cb(null, 'OK');
      },
      del    : (...args) => {
        errIfMissing('key')(args[0]);
        const cb = getCb(args);
        isFunc(cb) && cb(null, 1);
      },
      on     : (...args) => {
        errIfMissing('key')(args[0]);
        const cb = getCb(args);
        isFunc(cb) && bindEvent(args[0], cb);
        return 'OK';
      },
      quit   : () => {
      }
    };
  }
};

module.exports = redistub;
