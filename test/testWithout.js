const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("should return [1, 2] when given [1, 2, 3] and [3]", () => {
    assert.deepEqual(without([1, 2, 3], [3]), [1, 2]);
  });
  it("should return [1, 2] when given [1, 2, 3] and ['1', '2', 3]", () => {
    assert.deepEqual(without([1, 2, 3], ['1', '2', 3]), [1, 2]);
  });
  it("should return ['Lighthouse'] when given ['Hello', 'Lighthouse', 'Labs'] and ['Hello', 'Labs']", () => {
    assert.deepEqual(without(['Hello', 'Lighthouse', 'Labs'], ['Hello', 'Labs']), ['Lighthouse']);
  });
  it("should return an empty array when given empty arrays", () => {
    assert.deepEqual(without([], []), []);
  });
});