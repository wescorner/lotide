const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("should return [1, 2, 3] when given [1, 2, 3, -1, 4] and (x) => x < 0", () => {
    assert.deepEqual(takeUntil([1, 2, 3, -1, 4], (x) => x < 0), [1, 2, 3]);
  });
  it("should return ['this', 'is'] when given ['this', 'is', 'a', 'test'] and (x) => x.length < 2", () => {
    assert.deepEqual(takeUntil(['this', 'is', 'a', 'test'], (x) => x.length < 2), ['this', 'is']);
  });
});