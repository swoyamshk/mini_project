class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying.`;
  }
}

const student1 = new Student("Alice", 20, "A");
console.log(student1.describe());
console.log(student1.study());
