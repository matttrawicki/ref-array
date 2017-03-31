const ffi = require('ffi');
const ArrayType = require('./lib/array');
const FloatArray = ArrayType('float');

const libadd = ffi.Library(__dirname + '/libadd', {
  add: ['float', [ FloatArray, 'int' ] ]
});
const addThese = [1.1, 2.2, 3.3];

const floats1 = new FloatArray(addThese);
const result1 = libadd.add(floats1, addThese.length);
console.log(result1);

// Now imagine that this module exports the func method, so it is called from another module.
// That means that module will need to redefine FloatArray so that it can pass the args.
const FloatArray2 = ArrayType('float');
const floats2 = new FloatArray2(addThese);

// This invocation causes a seg fault 11
const result2 = libadd.add(floats2, addThese.length);
console.log(result2);