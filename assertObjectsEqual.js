const eqArrays = function(arr1, arr2) {
  if(arr1.length != arr2.length){
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for(const key in object1) {
    if(Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else {
      if(object1[key] !== object2[key]) return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
assertObjectsEqual({'a': 1, 'b': 2}, {'a': 1, 'b': 2});
assertObjectsEqual({'a': 1, 'b': 2}, {'a': 2, 'b': 1});