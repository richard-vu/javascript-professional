"use strict"

var x = function () {
    return "Anonymous  Function";
}

console.log(x);

function chao() {
    var ten = "Richard";
    return function () {
        console.log("Closure Function" + ten);
    }
}
x = chao();
console.log(x());
