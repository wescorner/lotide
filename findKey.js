const findKey = function(object, callback) {
  for (const index in object) {
    if (callback(object[index])) {
      return index;
    }
  }
};

module.exports = findKey;