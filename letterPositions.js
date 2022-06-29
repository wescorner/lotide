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

const letterPositions = function(sentence) {
  const results = {};
  for(letterIndex in sentence) {
    let letter = sentence[letterIndex];
    if(letter !== " "){
      results[letter] ? results[letter].push(letterIndex) : results[letter] = [letterIndex];
    }
  }
  return results;
};

const result1 = letterPositions("hello");
console.log(assertArraysEqual(result1.h, ['0']));
console.log(assertArraysEqual(result1.e, ['1']));
console.log(assertArraysEqual(result1.l, ['2', '3']));
console.log(assertArraysEqual(result1.o, ['4']));