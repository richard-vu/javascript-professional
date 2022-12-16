"use strict";

var x = 10;
if (x == 10) {
    var _x = 20;
    console.log(_x); //20:  reference x inside the lbock
}
console.log(x); // 10: reference at the begining of the script

var a = 10;
console.log(a); // 10

var b = 20;
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

var _loop = function _loop(_i) {
    setTimeout(function () {
        console.log(_i);
    }, 1000);
};

for (var _i = 0; _i < 5; _i++) {
    _loop(_i);
}

var _loop2 = function _loop2(_i2) {
    setTimeout(function () {
        return console.log(_i2);
    }, 1000);
};

for (var _i2 = 0; _i2 < 5; _i2++) {
    _loop2(_i2);
}

var counter = 0;
var counter;
console.log(counter); // 0

// Error
// let counter = 0;
// let counter;
// console.log(counter);