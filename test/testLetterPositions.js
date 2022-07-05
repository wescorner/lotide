const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPosition", () => {
  it("should return { h: ['0'], e: ['1'], l: ['2', '3'], o: ['4'] } when given 'hello'", () => {
    assert.deepEqual(letterPositions("hello"), {h: ["0"], e: ["1"], l: ["2", "3"], o: ["4"]});
  });
  it("should return {} when given an empty string", () => {
    assert.deepEqual(letterPositions(""), {});
  });
});