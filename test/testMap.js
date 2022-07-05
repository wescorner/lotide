const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("should return ['l', 'l', 't'] when given ['lighthouse', 'labs', 'test'] and (x) => x[0]", () => {
    assert.deepEqual(map(['lighthouse', 'labs', 'test'], (x) => x[0]), ['l', 'l', 't']);
  });
  it("should return ['LIGHTHOUSE', 'LABS', 'TEST'] when given ['lighthouse', 'labs', 'test'] and (x) => x.toUpperCase()", () => {
    assert.deepEqual(map(['lighthouse', 'labs', 'test'], (x) => x.toUpperCase()), ['LIGHTHOUSE', 'LABS', 'TEST']);
  });
  it("should return ['ighthouse', 'abs', 'est'] when given ['lighthouse', 'labs', 'test'] and (x) => x.slice(1)", () => {
    assert.deepEqual(map(['lighthouse', 'labs', 'test'], (x) => x.slice(1)), ['ighthouse', 'abs', 'est']);
  });
});