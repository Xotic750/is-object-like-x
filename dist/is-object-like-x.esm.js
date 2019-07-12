import isFunction from 'is-function-x';
import isPrimitive from 'is-primitive';
/**
 * Checks if `value` is object-like. A value is object-like if it's not a
 * primitive and not a function.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */

export default function isObjectLike(value) {
  return isPrimitive(value) === false && isFunction(value, true) === false;
}

//# sourceMappingURL=is-object-like-x.esm.js.map