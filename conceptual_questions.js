// Promises in JavaScript are designed to manage asynchronous operations more effectively compared to traditional callback functions. They offer a cleaner and more organized approach to handling asynchronous code. The benefits of using promises include:
// Readability: Promises employ a chainable syntax with the then() and catch() methods, which enhances code readability and comprehension.
// Error Handling: Promises come with built-in error management via the catch() method, simplifying the process of handling errors in asynchronous operations.
// Chaining: Promises can be linked together using the then() method, facilitating the sequential execution of asynchronous tasks.
// Avoiding Callback Hell: Promises help prevent "callback hell," a scenario where nested callbacks lead to code that is difficult to read and manage.


// A closure in JavaScript is a combination of a function and the lexical environment within which that function was declared. It allows a function to retain 
// access to variables from its containing scope even after the scope has closed. Here's an example: 
// function outerFunction() {
//     let outerVariable = 'I am from the outer function';  
//     function innerFunction() {
//       console.log(outerVariable); 
//     }  
//     return innerFunction;
//   }
//   const closureExample = outerFunction();
//   closureExample();


//A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some operation has been completed. 
// Callback functions are commonly used in asynchronous programming to handle asynchronous tasks such as API requests or file operations. They allow us to specify
//  what should happen once the asynchronous operation is complete.


// async/await in JavaScript is a modern way to work with asynchronous code. async is used to declare that a function will return a promise, and await is used 
// to pause the execution of a function until a promise is resolved. They make asynchronous code look and behave more like synchronous code, which improves readability
//  and maintainability. Here's an example:
//  async function fetchData() {
//   try {
//     let response = await fetch('https://api.example.com/data');
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// ES6 stands for ECMAScript 2015, which is a version of JavaScript standardized in 2015. JavaScript, on the other hand, refers to the general-purpose programming 
// language that includes various versions and specifications, including ES6. In simpler terms, ES6 is a specific version or iteration of JavaScript.


// Some major features introduced in ES6 include:
// Arrow functions
// Template literals
// Classes
// Let and const for variable declarations
// Default parameters
// Rest and spread operators
// Destructuring assignments
// Promises
// Modules