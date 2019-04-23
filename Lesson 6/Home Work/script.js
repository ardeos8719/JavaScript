"use strict";

// ----------------> Задание 1

var arr = [2, -5, 1, -2, 0, -3, 2, -14];
var arr2 = arr.filter(function(number){
    return number > 0;
});
console.log(arr2);

var sqrtArr = arr2.map(function(number){
    return (Math.sqrt(number));
});

console.log(sqrtArr);


// ----------------> Задание 2

