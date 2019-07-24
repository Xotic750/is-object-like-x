<a href="https://travis-ci.org/Xotic750/is-object-like-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-object-like-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/is-object-like-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-object-like-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-object-like-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-object-like-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/is-object-like-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-object-like-x.svg"
  alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/is-object-like-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-object-like-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

<a name="module_is-object-like-x"></a>

## is-object-like-x

Determine if a value is object like.

<a name="exp_module_is-object-like-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>boolean</code> ⏏

Checks if `value` is object-like. A value is object-like if it's not a
primitive and not a function.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - Returns `true` if `value` is object-like, else `false`.

| Param | Type            | Description         |
| ----- | --------------- | ------------------- |
| value | <code>\*</code> | The value to check. |

**Example**

```js
import isObjectLike from 'is-object-like-x';

console.log(isObjectLike({})); // => true
console.log(isObjectLike([1, 2, 3])); // => true
console.log(isObjectLike(_.noop)); // => false
console.log(isObjectLike(null)); // => false
```
