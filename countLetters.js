const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    results[letter] = results[letter] ? results[letter] + 1 : 1;
  }
  delete results[" "];
  return results;
};

module.exports = countLetters;
