const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("should return [1, 2, 3] when given [1, [2], 3]", () => {
    assert.deepEqual(flatten([1, [2], 3]), [1, 2, 3])
  });
  it("should return [1, 2, 3] when given [1, [2, 3]]", () => {
    assert.deepEqual(flatten([1, [2, 3]]), [1, 2, 3])
  });
  it("should return an empty array when given an empty array", () => {
    assert.deepEqual(flatten([]), [])
  });
});