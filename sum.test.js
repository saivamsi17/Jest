const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(3).toEqual(sum(1,2));
});