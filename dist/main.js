/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseTimes = __webpack_require__(/*! ./_baseTimes */ \"./node_modules/lodash/_baseTimes.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  var isArr = isArray(value),\n      isArg = !isArr && isArguments(value),\n      isBuff = !isArr && !isArg && isBuffer(value),\n      isType = !isArr && !isArg && !isBuff && isTypedArray(value),\n      skipIndexes = isArr || isArg || isBuff || isType,\n      result = skipIndexes ? baseTimes(value.length, String) : [],\n      length = result.length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (\n           // Safari 9 has enumerable `arguments.length` in strict mode.\n           key == 'length' ||\n           // Node.js 0.10 has enumerable non-index properties on buffers.\n           (isBuff && (key == 'offset' || key == 'parent')) ||\n           // PhantomJS 2 has enumerable non-index properties on typed arrays.\n           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||\n           // Skip index properties.\n           isIndex(key, length)\n        ))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayLikeKeys;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_arrayLikeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayShuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_arrayShuffle.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var copyArray = __webpack_require__(/*! ./_copyArray */ \"./node_modules/lodash/_copyArray.js\"),\n    shuffleSelf = __webpack_require__(/*! ./_shuffleSelf */ \"./node_modules/lodash/_shuffleSelf.js\");\n\n/**\n * A specialized version of `_.shuffle` for arrays.\n *\n * @private\n * @param {Array} array The array to shuffle.\n * @returns {Array} Returns the new shuffled array.\n */\nfunction arrayShuffle(array) {\n  return shuffleSelf(copyArray(array));\n}\n\nmodule.exports = arrayShuffle;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_arrayShuffle.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]';\n\n/**\n * The base implementation of `_.isArguments`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n */\nfunction baseIsArguments(value) {\n  return isObjectLike(value) && baseGetTag(value) == argsTag;\n}\n\nmodule.exports = baseIsArguments;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_baseIsArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/** Used to identify `toStringTag` values of typed arrays. */\nvar typedArrayTags = {};\ntypedArrayTags[float32Tag] = typedArrayTags[float64Tag] =\ntypedArrayTags[int8Tag] = typedArrayTags[int16Tag] =\ntypedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =\ntypedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =\ntypedArrayTags[uint32Tag] = true;\ntypedArrayTags[argsTag] = typedArrayTags[arrayTag] =\ntypedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =\ntypedArrayTags[dataViewTag] = typedArrayTags[dateTag] =\ntypedArrayTags[errorTag] = typedArrayTags[funcTag] =\ntypedArrayTags[mapTag] = typedArrayTags[numberTag] =\ntypedArrayTags[objectTag] = typedArrayTags[regexpTag] =\ntypedArrayTags[setTag] = typedArrayTags[stringTag] =\ntypedArrayTags[weakMapTag] = false;\n\n/**\n * The base implementation of `_.isTypedArray` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n */\nfunction baseIsTypedArray(value) {\n  return isObjectLike(value) &&\n    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];\n}\n\nmodule.exports = baseIsTypedArray;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_baseIsTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ \"./node_modules/lodash/_nativeKeys.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeys(object) {\n  if (!isPrototype(object)) {\n    return nativeKeys(object);\n  }\n  var result = [];\n  for (var key in Object(object)) {\n    if (hasOwnProperty.call(object, key) && key != 'constructor') {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseKeys;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_baseKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseRandom.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseRandom.js ***!
  \********************************************/
/***/ ((module) => {

eval("/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeFloor = Math.floor,\n    nativeRandom = Math.random;\n\n/**\n * The base implementation of `_.random` without support for returning\n * floating-point numbers.\n *\n * @private\n * @param {number} lower The lower bound.\n * @param {number} upper The upper bound.\n * @returns {number} Returns the random number.\n */\nfunction baseRandom(lower, upper) {\n  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));\n}\n\nmodule.exports = baseRandom;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_baseRandom.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseShuffle.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseShuffle.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var shuffleSelf = __webpack_require__(/*! ./_shuffleSelf */ \"./node_modules/lodash/_shuffleSelf.js\"),\n    values = __webpack_require__(/*! ./values */ \"./node_modules/lodash/values.js\");\n\n/**\n * The base implementation of `_.shuffle`.\n *\n * @private\n * @param {Array|Object} collection The collection to shuffle.\n * @returns {Array} Returns the new shuffled array.\n */\nfunction baseShuffle(collection) {\n  return shuffleSelf(values(collection));\n}\n\nmodule.exports = baseShuffle;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_baseShuffle.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\nmodule.exports = baseTimes;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_baseTimes.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function(value) {\n    return func(value);\n  };\n}\n\nmodule.exports = baseUnary;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_baseUnary.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseValues.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseValues.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\");\n\n/**\n * The base implementation of `_.values` and `_.valuesIn` which creates an\n * array of `object` property values corresponding to the property names\n * of `props`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array} props The property names to get values for.\n * @returns {Object} Returns the array of property values.\n */\nfunction baseValues(object, props) {\n  return arrayMap(props, function(key) {\n    return object[key];\n  });\n}\n\nmodule.exports = baseValues;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_baseValues.js?");

/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * Copies the values of `source` to `array`.\n *\n * @private\n * @param {Array} source The array to copy values from.\n * @param {Array} [array=[]] The array to copy values to.\n * @returns {Array} Returns `array`.\n */\nfunction copyArray(source, array) {\n  var index = -1,\n      length = source.length;\n\n  array || (array = Array(length));\n  while (++index < length) {\n    array[index] = source[index];\n  }\n  return array;\n}\n\nmodule.exports = copyArray;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_copyArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;\n\nmodule.exports = freeGlobal;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  var type = typeof value;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n\n  return !!length &&\n    (type == 'number' ||\n      (type != 'symbol' && reIsUint.test(value))) &&\n        (value > -1 && value % 1 == 0 && value < length);\n}\n\nmodule.exports = isIndex;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_isIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\nmodule.exports = isPrototype;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_isPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = overArg(Object.keys, Object);\n\nmodule.exports = nativeKeys;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_nativeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && \"object\" == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Detect free variable `process` from Node.js. */\nvar freeProcess = moduleExports && freeGlobal.process;\n\n/** Used to access faster Node.js helpers. */\nvar nodeUtil = (function() {\n  try {\n    // Use `util.types` for Node.js 10+.\n    var types = freeModule && freeModule.require && freeModule.require('util').types;\n\n    if (types) {\n      return types;\n    }\n\n    // Legacy `process.binding('util')` for Node.js < 10.\n    return freeProcess && freeProcess.binding && freeProcess.binding('util');\n  } catch (e) {}\n}());\n\nmodule.exports = nodeUtil;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_nodeUtil.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\nmodule.exports = overArg;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_overArg.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_shuffleSelf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_shuffleSelf.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseRandom = __webpack_require__(/*! ./_baseRandom */ \"./node_modules/lodash/_baseRandom.js\");\n\n/**\n * A specialized version of `_.shuffle` which mutates and sets the size of `array`.\n *\n * @private\n * @param {Array} array The array to shuffle.\n * @param {number} [size=array.length] The size of `array`.\n * @returns {Array} Returns `array`.\n */\nfunction shuffleSelf(array, size) {\n  var index = -1,\n      length = array.length,\n      lastIndex = length - 1;\n\n  size = size === undefined ? length : size;\n  while (++index < size) {\n    var rand = baseRandom(index, lastIndex),\n        value = array[rand];\n\n    array[rand] = array[index];\n    array[index] = value;\n  }\n  array.length = size;\n  return array;\n}\n\nmodule.exports = shuffleSelf;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/_shuffleSelf.js?");

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ \"./node_modules/lodash/_baseIsArguments.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nvar isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {\n  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&\n    !propertyIsEnumerable.call(value, 'callee');\n};\n\nmodule.exports = isArguments;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/isArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\");\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\nmodule.exports = isArrayLike;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/isArrayLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\"),\n    stubFalse = __webpack_require__(/*! ./stubFalse */ \"./node_modules/lodash/stubFalse.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && \"object\" == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;\n\n/**\n * Checks if `value` is a buffer.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.\n * @example\n *\n * _.isBuffer(new Buffer(2));\n * // => true\n *\n * _.isBuffer(new Uint8Array(2));\n * // => false\n */\nvar isBuffer = nativeIsBuffer || stubFalse;\n\nmodule.exports = isBuffer;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/isBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/isLength.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ \"./node_modules/lodash/_baseIsTypedArray.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;\n\n/**\n * Checks if `value` is classified as a typed array.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n * @example\n *\n * _.isTypedArray(new Uint8Array);\n * // => true\n *\n * _.isTypedArray([]);\n * // => false\n */\nvar isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;\n\nmodule.exports = isTypedArray;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/isTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ \"./node_modules/lodash/_arrayLikeKeys.js\"),\n    baseKeys = __webpack_require__(/*! ./_baseKeys */ \"./node_modules/lodash/_baseKeys.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nfunction keys(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);\n}\n\nmodule.exports = keys;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/keys.js?");

/***/ }),

/***/ "./node_modules/lodash/shuffle.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/shuffle.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayShuffle = __webpack_require__(/*! ./_arrayShuffle */ \"./node_modules/lodash/_arrayShuffle.js\"),\n    baseShuffle = __webpack_require__(/*! ./_baseShuffle */ \"./node_modules/lodash/_baseShuffle.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * Creates an array of shuffled values, using a version of the\n * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Collection\n * @param {Array|Object} collection The collection to shuffle.\n * @returns {Array} Returns the new shuffled array.\n * @example\n *\n * _.shuffle([1, 2, 3, 4]);\n * // => [4, 1, 3, 2]\n */\nfunction shuffle(collection) {\n  var func = isArray(collection) ? arrayShuffle : baseShuffle;\n  return func(collection);\n}\n\nmodule.exports = shuffle;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/shuffle.js?");

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/stubFalse.js?");

/***/ }),

/***/ "./node_modules/lodash/values.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/values.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseValues = __webpack_require__(/*! ./_baseValues */ \"./node_modules/lodash/_baseValues.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * Creates an array of the own enumerable string keyed property values of `object`.\n *\n * **Note:** Non-object values are coerced to objects.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property values.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.values(new Foo);\n * // => [1, 2] (iteration order is not guaranteed)\n *\n * _.values('hi');\n * // => ['h', 'i']\n */\nfunction values(object) {\n  return object == null ? [] : baseValues(object, keys(object));\n}\n\nmodule.exports = values;\n\n\n//# sourceURL=webpack://notewizard/./node_modules/lodash/values.js?");

/***/ }),

/***/ "./src/deck.js":
/*!*********************!*\
  !*** ./src/deck.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Deck: () => (/* binding */ Deck)\n/* harmony export */ });\n/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/shuffle */ \"./node_modules/lodash/shuffle.js\");\n/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Deck {\n  constructor() {\n    this.currentDeck = null\n    this.#build()\n  }\n  \n  currentCard = () => this.currentDeck[0]\n\n  nextCard = () => {\n    if (this.currentDeck.length > 1) {\n      this.currentDeck.shift()\n      this.#removeCard()\n      this.#displayCard(this.currentCard())\n      this.#renderCardCount()\n    }\n    else {\n      this.currentDeck.shift()\n      this.#removeCard()\n    }\n  }\n\n  #build = () => {\n    const newDeck = Object.keys(noteImages).map(key => ({ key, value: noteImages[key] })) \n    this.currentDeck = lodash_shuffle__WEBPACK_IMPORTED_MODULE_0___default()(newDeck) \n    this.#displayCard(this.currentCard())\n  }\n\n  #displayCard = (topCard) => {\n    const img = document.createElement('img')\n    img.src = topCard.value\n    img.alt = 'displayed-card'\n    img.id = 'card-img'\n\n    const container = document.querySelector(\".deck\")\n    container.appendChild(img)\n    return this.#renderCardCount()\n  }\n\n  #removeCard = () => {\n    const container = document.querySelector(\".deck\")\n    const card = document.getElementById(\"card-img\")\n\n    if (card) {\n      container.removeChild(card)\n    }\n\n  }\n  \n  #renderCardCount = () => {\n    const container = document.querySelector(\".card-count\")\n    container.innerHTML = this.#cardCountHTML()\n  }\n\n  #cardCountHTML = () => {\n    const cardCount = Object.keys(noteImages).length\n     return `\n      <div class=\"card-count\">\n        ${this.currentDeck.length}/${cardCount}\n      </div>\n    `\n  }\n}\n\n\nconst noteImages= {\n  'C4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/C4.png',\n  'C#4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/C%234.png',\n  'Db4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Db4.png',\n  'D4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/D4.png',\n  'D#4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/D%234.png',\n  'Eb4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Eb4.png',\n  'E4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/E4.png',\n  'F4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/F4.png',\n  'F#4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/F%234.png',\n  'Gb4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Gb4.png',\n  'G4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/G4.png',\n  'G#4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/G%234.png',\n  'Ab4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Ab4.png',\n  'A4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/A4.png',\n  'A#4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/A%234.png',\n  'Bb4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Bb4.png',\n  'B4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/B4.png',\n  'C5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/C5.png',\n  'C#5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/C%235.png',\n  'Db5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Db5.png',\n  'D5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/D5.png',\n  'D#5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/D%235.png',\n  'Eb5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Eb5.png',\n  'E5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/E5.png',\n  'F5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/F5.png',\n  'F#5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/F%235.png',\n  'Gb5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Gb5.png',\n  'G5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/G5.png',\n  'G#5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/G%235.png',\n  'Ab5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Ab5.png',\n  'A5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/A5.png',\n  'A#5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/A%235.png',\n  'Bb5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Bb5.png',\n  'B5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/B5.png',\n  'C6': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/C6.png'\n}\n\n\n\n//# sourceURL=webpack://notewizard/./src/deck.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ \"./src/keyboard.js\");\n/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deck */ \"./src/deck.js\");\n\n\n\nclass Game {\n  constructor(renderInstructions) {\n    this.instructions = renderInstructions\n    this.deck = new _deck__WEBPACK_IMPORTED_MODULE_1__.Deck\n    this.keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_0__.Keyboard(this.notePressed())\n\n    if (this.instructions) {\n      this.#renderInstuctions()\n    }\n  }\n\n  notePressed = (note) => {\n    var status = \" \"\n    const currentCardKey = this.deck.currentCard().key\n    const splitNote = note.split(' / ')\n\n    if (splitNote.includes(currentCardKey)) {\n      status = \"correct\"\n      this.#manageTxt(status)\n      this.#correctNote()\n    }\n\n    else {\n      status = \"incorrect\"\n      this.#manageTxt(status)\n    }\n  }\n\n  #renderInstuctions = () => {\n    const instructions = document.querySelector(\".instructions\")\n    instructions.innerHTML = this.#instructionsHTML()\n    instructions.style.display = \"block\"\n    this.#instructionsListener()\n  }\n  \n  #instructionsListener = () => {\n    const playButton = document.getElementById(\"play-button\")\n    playButton.addEventListener('click', () => {\n      this.#hideInstructions()\n    })\n  }\n\n  #hideInstructions = () => {\n    const instructions = document.querySelector(\".instructions\")\n    instructions.style.display = \"none\"\n  }\n\n  #correctNote = () => {\n    this.deck.nextCard()\n\n    if (this.#isWon()) {\n      this.#showPopup()\n      this.#popupListener()\n    }\n  }\n\n  #manageTxt = (status) => {\n    const container = document.querySelector(\".text\")\n    container.innerHTML = this.#textHTML(status)\n    setTimeout(() => {\n      container.innerHTML = ''\n    }, 2000)\n  }\n\n  #textHTML = (status) => status === \"correct\" ? `<p id=\"correct\">CORRECT!</p>` : `<p id=\"incorrect\">Try Again</p>`;\n\n  #isWon = () => this.deck.currentDeck.length === 0;\n\n  #showPopup = () => {\n    const popup = document.querySelector(\".popup\")\n    popup.innerHTML = this.#popupHTML()\n    popup.style.display = \"block\"\n  }\n\n  #popupListener = () => {\n    const playAgainButton = document.getElementById('play-again-button')\n\n    playAgainButton.addEventListener('click', () => {\n      this.#playAgain()\n    })\n  }\n\n  #hidePopup = () => {\n    const popup = document.querySelector(\".popup\")\n    popup.style.display = \"none\"\n  }\n\n  #popupHTML = () => \n    `\n      <div class=\"popup-content\">\n        <h2>Congratulations! You won the game.</h2>\n        <button id=\"play-again-button\">Play Again</button>\n      </div>\n    `\n    \n  #playAgain = () => {\n    this.#hidePopup()\n    anotherGame = new Game(false)\n  }\n\n  #instructionsHTML = () => \n    `\n      <div class=\"instructions-content\">\n        <p>Press the key on the piano that corresponds to the<br>\n        presented flash card. Click \"Let's Play\" to begin!</p>\n        <button id=\"play-button\">Let's Play!</p>\n      </div>\n    `\n}\n\n\n//# sourceURL=webpack://notewizard/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game(true);\n});\n\n\n\n//# sourceURL=webpack://notewizard/./src/index.js?");

/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Keyboard: () => (/* binding */ Keyboard)\n/* harmony export */ });\nclass Keyboard{\n  constructor(notePressedCallback) {\n    this.notePressedCallback = notePressedCallback\n    this.#render()\n    this.#bindNotes()\n  }\n\n  #render = () => {\n    const container = document.querySelector('.keyboard')\n    container.innerHTML = this.#keyboardHTML()\n  }\n\n  #bindNotes = () => {\n    const newElement = document.querySelector('.keyboard')\n    const keys = newElement.querySelectorAll('.white-key, .black-key')\n    \n    keys.forEach(key => {\n      const note = key.getAttribute('data-key')\n      const audio = new Audio(audio_files[note]);\n      key.addEventListener('click', () => {\n        audio.play()\n        this.notePressedCallback(note)\n      })\n    })\n  }\n\n  #keyboardHTML = () => \n    `\n      <div class=\"white-key first\" data-key=\"C4\" >C4</div>\n      <div class=\"black-key b1\" data-key=\"C#4 / Db4\"></div>\n      <div class=\"white-key\" data-key=\"D4\"></div>\n      <div class=\"black-key b2\" data-key=\"D#4 / Eb4\"></div>\n      <div class=\"white-key\" data-key=\"E4\"></div>\n      <div class=\"white-key\" data-key=\"F4\"></div>\n      <div class=\"black-key b3\" data-key=\"F#4 / Gb4\"></div>\n      <div class=\"white-key\" data-key=\"G4\"></div>\n      <div class=\"black-key b4\" data-key=\"G#4 / Ab4\"></div>\n      <div class=\"white-key\" data-key=\"A4\"></div>\n      <div class=\"black-key b5\" data-key=\"A#4 / Bb4\"></div>\n      <div class=\"white-key\" data-key=\"B4\"></div>\n      <div class=\"white-key\" data-key=\"C5\"></div>\n      <div class=\"black-key b6\" data-key=\"C#5 / Db5\"></div>\n      <div class=\"white-key\" data-key=\"D5\"></div>\n      <div class=\"black-key b7\" data-key=\"D#5 / Eb5\"></div>\n      <div class=\"white-key\" data-key=\"E5\"></div>\n      <div class=\"white-key\" data-key=\"F5\"></div>\n      <div class=\"black-key b8\" data-key=\"F#5 / Gb5\"></div>\n      <div class=\"white-key\" data-key=\"G5\"></div>\n      <div class=\"black-key b9\" data-key=\"G#5 / Ab5\"></div>\n      <div class=\"white-key\" data-key=\"A5\"></div>\n      <div class=\"black-key b10\" data-key=\"A#5 / Bb5\"></div>\n      <div class=\"white-key\" data-key=\"B5\"></div>\n      <div class=\"white-key last\" data-key=\"C6\"></div>\n  `\n}\n\n\nconst audio_files = {\n  'C4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/C4.mp3',\n  'C#4 / Db4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/C%234%3ADb4.mp3',\n  'D4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/D4.mp3',\n  'D#4 / Eb4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/D%234%3AEb4.mp3',\n  'E4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/E4.mp3',\n  'F4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/F4.mp3',\n  'F#4 / Gb4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/F%234%3AGb4.mp3',\n  'G4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/G4.mp3',\n  'G#4 / Ab4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/G%234%3AAb4.mp3',\n  'A4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/A4.mp3',\n  'A#4 / Bb4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/A%234%3ABb4.mp3',\n  'B4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/B4.mp3',\n  'C5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/C5.mp3',\n  'C#5 / Db5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/C%235%3ADb5.mp3',\n  'D5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/D5.mp3',\n  'D#5 / Eb5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/D%235%3AEb5.mp3',\n  'E5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/E5.mp3',\n  'F5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/F5.mp3',\n  'F#5 / Gb5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/F%235%3AGb5.mp3',\n  'G5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/G5.mp3',\n  'G#5 / Ab5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/G%235%3AAb5.mp3',\n  'A5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/A5.mp3',\n  'A#5 / Bb5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/A%235%3ABb5.mp3',\n  'B5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/B5.mp3',\n  'C6': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/C6.mp3'\n}\n\n\n\n//# sourceURL=webpack://notewizard/./src/keyboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;