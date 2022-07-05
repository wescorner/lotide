const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("should return the key where callback function is true", () => {
    const data = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callback = (x) => x.stars = 1;
    assert.deepEqual(findKey(data, callback), "Blue Hill");
  });
});