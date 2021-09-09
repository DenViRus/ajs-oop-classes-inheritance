import sum from './basic.js';

test('should check "V"', () => {
  const received = sum();

  const expected = 'V';

  expect(received).toBe(expected);
});
