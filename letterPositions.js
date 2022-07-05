const letterPositions = function(sentence) {
  const results = {};
  for (const letterIndex in sentence) {
    let letter = sentence[letterIndex];
    if (letter !== " ") {
      results[letter] ? results[letter].push(letterIndex) : results[letter] = [letterIndex];
    }
  }
  return results;
};

module.exports = letterPositions;