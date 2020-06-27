/* global test expect describe it */
const sum = require('./fct');

// individual test
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 2 to equal 5', () => {
  expect(sum(3, 2)).toBe(5);
});

// grouping your test use describe
describe('test for summation', () => {
  it('1 + 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('10 + 20 equals 30', () => {
    expect(sum(10, 20)).toBe(30);
  });
});
