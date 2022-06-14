var assert = require('assert');
let a=50;
let b=50;
let c=55;

let d = assert.equal(a, b); //O
let e = assert.equal(a, b); /*AssertionError: 50 == 70 */
console.log(d);
console.log(e);
