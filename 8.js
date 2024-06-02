const sumNumbers = (numbers) => {
  return numbers.reduce((a, b) => a + b, 0);
};

const numbers = [1, 2, 3, 4, 5];
const total = sumNumbers(numbers);
console.log(total);
