const RATE = 0.1;

const person = { age: 20 };
person.age = 30; // OK
console.log(person.age); // 30

const company = Object.freeze({
    name: 'ABC corp',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        zipcode: 95134
    }
});

const colors = ['red'];
colors.push('green');
console.log(colors); // ["red", "green"]

colors.pop();
colors.pop();
console.log(colors); // []

let scores = [75, 80, 95];
for (let score of scores) {
    console.log(score);
}

let scores = [75, 80, 95];
for (const score of scores) {
    console.log(score);
}

// for (const i = 0; i < scores.length; i++) { // TypeError
//     console.log(scores[i]);
// }