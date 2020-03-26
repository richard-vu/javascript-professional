let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); //20:  reference x inside the lbock
}
console.log(x); // 10: reference at the begining of the script

var a = 10;
console.log(a); // 10

let b = 20;
console.log(b); // 20

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i);
}

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
}

var counter = 0;
var counter;
console.log(counter); // 0

// Error
// let counter = 0;
// let counter;
// console.log(counter);