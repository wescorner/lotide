const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("should return { 'Jason': 1, 'Fang': 2 } when given ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'] and { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false }", () => {
    assert.deepEqual(countOnly(['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'], { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false }), { 'Jason': 1, 'Fang': 2 });
  });
  it("should return {} when given empty input", () => {
    assert.deepEqual(countOnly([], {}), {});
  });
});