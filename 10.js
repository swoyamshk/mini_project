class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}

const person1 = new Person("Alice", 30);
console.log(person1.describe());

const person2 = new Person("Bob", 25);
console.log(person2.describe());
