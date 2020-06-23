"use strict"

class Person {
    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
}


var person = new Person('Richard', 'Vu', 20, 'black');

person.lastName = 'Luong';

console.log(person);
