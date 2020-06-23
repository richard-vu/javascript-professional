'use strict';

var RATE = 0.1;

var person = { age: 20 };
person.age = 30; // OK
console.log(person.age); // 30

var company = Object.freeze({
    name: 'ABC corp',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        zipcode: 95134
    }
});

var colors = ['red'];
colors.push('green');
console.log(colors); // ["red", "green"]

colors.pop();
colors.pop();
console.log(colors); // []

