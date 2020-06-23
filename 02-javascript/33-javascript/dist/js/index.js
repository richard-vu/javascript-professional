"use strict"

document.addEventListener("DOMContentLoaded", function () {
    var bt_1 = document.getElementById('nut-1');
    var khoi = document.getElementsByClassName('card');
    
    bt_1.onclick = function(){
        console.log('Ban vua click vao ' +bt_1);
        khoi[0].classList.toggle('diphai');
    }
}, false)
