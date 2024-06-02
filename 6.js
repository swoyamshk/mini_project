const filterNumbers = (numbers) => {
  return numbers.filter((number) => number >= 10);
};

const numbers = [5, 10, 15, 20, 25];
const filteredNumbers = filterNumbers(numbers);
console.log(filteredNumbers); 
