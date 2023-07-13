const isPalindrome = require('../functions/palindrome');

test('racecar is a palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('A man, a plan, a canal, Panama is a palindrome', () => {
  expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
});

test('Was it a car or a cat I saw? is a palindrome', () => {
  expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
});

test('No lemon, no melon is a palindrome', () => {
  expect(isPalindrome('No lemon, no melon')).toBe(true);
});

test('apple is not a palindrome', () => {
  expect(isPalindrome('apple')).toBe(false);
});
