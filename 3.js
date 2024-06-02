function processData(numbers, callabck){
    return numbers.map(callabck);
}
const numbers=[1,2,3];
const sum = (num) => num+num;
const addNum = processData(numbers, sum);
console.log(addNum);