const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

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

const takeUntil = function(array, callback) {
  let results = [];
  let counter = 0;
  while(!callback(array[counter])) {
    results.push(array[counter]);
    counter++;
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const result1 = takeUntil(data1, (x) => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const result2 = takeUntil(data2, (x) => x === ',');
const data3 = ["this", "is", "a", "test", "lighthouse", "labs"];
const result3 = takeUntil(data3, (x) => x.length > 4);

assertArraysEqual(result1, [1, 2, 5, 7, 2]);
assertArraysEqual(result2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(result3, ["this", "is", "a", "test"]);