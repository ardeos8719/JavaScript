"use strict";


console.log('Привет, мир!'.length);

console.log('Привет, Мир'.toUpperCase() );

var n = 200.333;

console.log( n.toFixed(2) );

console.log(isNaN(0/0));

console.log(isFinite(10));


function isNumeric(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var n = 25111115;
console.log( n.toString(36));

n = 12.34;

console.log( n. toFixed(1) );