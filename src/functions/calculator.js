function calculator(a, b, operation) {
  if (operation === '+') {
    return a + b;
  } else if (operation === '-') {
    return a - b;
  } else if (operation === '*') {
    return a * b;
  } else if (operation === '/') {
    if (b === 0) {
      throw new Error('Não é possível dividir ');
    }
    return a / b;
  } else {
    throw new Error('Invalid operation');
  }
}

module.exports = calculator;
