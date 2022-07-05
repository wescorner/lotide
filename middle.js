const middle = function(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) {
    return arr[1];
  } else {
    return [arr[middleIndex - 1], arr[middleIndex]];
  }
};

module.exports = middle;