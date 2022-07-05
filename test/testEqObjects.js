const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("should return true when given two equal objects", () => {
    assert.strictEqual(eqObjects({ a: 1, b: 2}, { b: 2, a: 1}), true);
  });
  it("should return true when given two equal objects (with array values)", () => {
    assert.strictEqual(eqObjects({ a: 1, b: [2, 3]}, { b: [2, 3], a: 1}), true);
  });
  it("should return true when given two equal objects (with object values)", () => {
    assert.strictEqual(eqObjects({ a: 1, b: { x: 1, y: 2 }}, { b: { x: 1, y: 2 }, a: 1}), true);
  });
  it("should return false when given unequal objects", () => {
    assert.strictEqual(eqObjects({ a: 1, b: 2 }, { b: 1, a: 1}), false);
  });
  it("should return true when given empty objects", () => {
    assert.strictEqual(eqObjects({}, {}), true);
  });
});