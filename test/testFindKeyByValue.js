const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("should return the key where value of key equals input value", () => {
    const data = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(data, "The Expanse"), "sciFi");
  });
  it("should return undefined when no key is found with input value", () => {
    const data = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.strictEqual(findKeyByValue(data, "The Office"), undefined);
  });
});