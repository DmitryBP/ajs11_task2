import sum from '../js/basic.js';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});
