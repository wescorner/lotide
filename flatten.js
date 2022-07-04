const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const eqArrays = function(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const flatten = function(arr) {
  let result = [];
  for(const element of arr) {
    if(Array.isArray(element)) {
      for(const e of element){
        result.push(e);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4, 5], [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;