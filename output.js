"use strict";

var _jsbi = _interopRequireDefault(require("jsbi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var a = _jsbi["default"].BigInt("1111111111111111111111111111");

var b = _jsbi["default"].BigInt("1111111111111111111111111111");

var c = _jsbi["default"].multiply(a, b);

console.log(c.toString());
