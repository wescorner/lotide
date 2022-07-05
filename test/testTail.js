const assert = require('chai').assert;
const tail = require('../tail');

describe("#middle", () => {
  it("should return ['Lighthouse', 'Labs'] when given ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("should not alter the length of the original string", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});