import isObjectLike from 'src/is-object-like-x';

/* eslint-disable-next-line compat/compat */
const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

describe('isObjectLike', function() {
  it('should return `true` for objects', function() {
    expect.assertions(9);
    /* eslint-disable-next-line prefer-rest-params */
    expect(isObjectLike(arguments)).toBe(true);
    expect(isObjectLike([1, 2, 3])).toBe(true);
    expect(isObjectLike(Object(false))).toBe(true);
    expect(isObjectLike(new Date())).toBe(true);
    expect(isObjectLike(new Error())).toBe(true);
    expect(isObjectLike({a: 1})).toBe(true);
    expect(isObjectLike(Object(0))).toBe(true);
    expect(isObjectLike(/x/)).toBe(true);
    expect(isObjectLike(Object('a'))).toBe(true);
  });

  it('should return `false` for non-objects', function() {
    expect.assertions(1);
    /* eslint-disable-next-line compat/compat */
    const symbol = hasSymbol && Symbol('');
    const values = ['', 0, false, NaN, null, undefined, true, 1, 'a', symbol];
    const expected = values.map(function() {
      return false;
    });

    const actual = values.map(function(value, index) {
      return index ? isObjectLike(value) : isObjectLike();
    });

    expect(actual).toStrictEqual(expected);
  });
});
