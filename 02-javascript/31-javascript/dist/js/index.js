"use strict"

var bt_1 = document.querySelectorAll('.btn-1');

bt_1[0].classList.remove('btn-outline-info');
bt_1[0].classList.add('btn-outline-success');

var bt_3 = document.querySelectorAll('.btn-3');

bt_3[0].classList.toggle('btn-outline-success')

console.log(bt_1);
