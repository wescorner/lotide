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

module.exports = flatten;