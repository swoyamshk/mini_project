const findNumbers = (numbers) => {
  return numbers.find((number) => number > 15);
};

const numbers = [5, 10, 15, 20, 25];
const foundNumbers = findNumbers(numbers);
console.log(foundNumbers);
