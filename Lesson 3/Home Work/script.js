"use strict";

// ----------------> Задание 1

var numB = prompt('Введите число от 0 до 10');

var isNumberInRange;

if (numB > 0 && numB < 10){
    isNumberInRange = function(){
        console.log(true);
    };
}else{
    isNumberInRange = function(){
        console.log(false);
    };
}

isNumberInRange();


// ----------------> Задание 2

var numB = prompt('Введите целое число');

var isEven;

if (numB %2 == 0){
    isEven = function(){
        console.log(true);
    };
}else{
    isEven = function(){
        console.log(false);
    };
}

isEven();

// ----------------> Задание 3


var value = +prompt('value?', '');    

switch(value){
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log(2,3);
        break;
    default:
        console.log('Введенное число вне диапазона');     
}

// ----------------> Задание 4

