"use strict"

var x1 = document.getElementsByTagName('h1');

x1[0].firstChild.data = 123123;

console.log(x1[0].innerHTML);
