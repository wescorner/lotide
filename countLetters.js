const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {};
  for(const letter of sentence) {
    results[letter] = results[letter] ? results[letter] + 1 : 1;
  }
  return results;
};

const result1 = countLetters("lighthouse in the house");
console.log(assertEqual(result1['l'], 1));
console.log(assertEqual(result1['i'], 2));
console.log(assertEqual(result1['g'], 1));
console.log(assertEqual(result1['h'], 4));
console.log(assertEqual(result1['t'], 2));
console.log(assertEqual(result1['o'], 2));
console.log(assertEqual(result1['u'], 2));
console.log(assertEqual(result1['s'], 2));
console.log(assertEqual(result1['e'], 3));
console.log(assertEqual(result1['n'], 1));

module.exports = countLetters;
