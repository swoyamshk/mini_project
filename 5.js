const doubleNumbers = (numbers) => {
  return numbers.map((number) => number * 2);
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers);
console.log(doubledNumbers);
