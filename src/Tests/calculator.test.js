const calculator = require('../functions/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator(1, 2, '+')).toBe(3);
});

test('subtracts 3 - 2 to equal 1', () => {
  expect(calculator(3, 2, '-')).toBe(1);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(calculator(2, 3, '*')).toBe(6);
});

test('divides 6 / 3 to equal 2', () => {
  expect(calculator(6, 3, '/')).toBe(2);
});

test('throws error when dividing by zero', () => {
  expect(() => calculator(6, 0, '/')).toThrow('Cannot divide by zero');
});

test('throws error when using invalid operation', () => {
  expect(() => calculator(6, 3, '^')).toThrow('Invalid operation');
});
