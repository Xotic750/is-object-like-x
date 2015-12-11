/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:true, plusplus:true, maxparams:2, maxdepth:1,
  maxstatements:9, maxcomplexity:2 */

/*global expect, module, require, describe, it, returnExports */

(function () {
  'use strict';

  var hasSymbol = typeof Symbol === 'function' && typeof Symbol() === 'symbol',
    isObjectLike;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    isObjectLike = require('../../index.js');
  } else {
    isObjectLike = returnExports;
  }

  describe('isObjectLike', function () {
    it('should return `true` for objects', function () {
      expect(isObjectLike(arguments)).toBe(true);
      expect(isObjectLike([1, 2, 3])).toBe(true);
      expect(isObjectLike(Object(false))).toBe(true);
      expect(isObjectLike(new Date())).toBe(true);
      expect(isObjectLike(new Error())).toBe(true);
      expect(isObjectLike({
        'a': 1
      })).toBe(true);
      expect(isObjectLike(Object(0))).toBe(true);
      expect(isObjectLike(/x/)).toBe(true);
      expect(isObjectLike(Object('a'))).toBe(true);
    });

    it('should return `false` for non-objects', function () {
      var symbol = hasSymbol && Symbol(),
        /*jshint elision:true*/
        values = [, '', 0, false, NaN, null, undefined, true, 1, 'a', symbol],
        expected = values.map(function () {
          return false;
        });

      var actual = values.map(function (value, index) {
        return index ? isObjectLike(value) : isObjectLike();
      });

      expect(actual).toEqual(expected);
    });
  });
}());
