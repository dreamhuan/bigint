const JSBI = require("jsbi");
const a = JSBI.BigInt("1111111111111111111111111111");
const b = JSBI.BigInt("1111111111111111111111111111");
const c = JSBI.multiply(a, b);
console.log(c.toString());
