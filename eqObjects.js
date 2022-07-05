const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for(const key in object1) {
    if(Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if(typeof object1[key] === 'object') {
      return eqObjects(object1[key], object2[key])
    } else {
      if(object1[key] !== object2[key]) return false;
    }
  }
  return true;
};

module.exports = eqObjects;