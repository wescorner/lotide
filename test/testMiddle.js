const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return 2 when given [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), 2);
  });
  it("should return [2, 3] when given [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});