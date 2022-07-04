const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("should return 1 when given [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("should return '5' when given ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("should return 'Hello' when given ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});