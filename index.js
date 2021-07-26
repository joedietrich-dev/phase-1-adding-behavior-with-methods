'use strict';

class Animal {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
    this.greeting = 'hello';
  }
  speak() {
    return `${this.name} says ${this.greeting}!`;
  }
}

class Cat extends Animal {
  constructor(name, sex) {
    super(name, sex);
    this.greeting = 'meow';
  }
}

class Dog extends Animal {
  constructor(name, sex) {
    super(name, sex);
    this.greeting = 'woof';
  }
}

class Bird extends Animal {
  speak() {
    return this.sex === 'male' ?
      `It's me! ${this.name}, the parrot!` :
      `${this.name} says squawk!`;
  }
}