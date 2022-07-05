const takeUntil = function(array, callback) {
  let results = [];
  let counter = 0;
  while (!callback(array[counter])) {
    results.push(array[counter]);
    counter++;
  }
  return results;
};

module.exports = takeUntil;