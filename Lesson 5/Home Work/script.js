"use strict";

// ----------------> Задание 1

var value = prompt('Введите названия одного из животных - кот, собака или жираф')
var array = ['кот', 'собака', 'жираф'];

function searchArrayWord(){
    if (array.indexOf(value) !== -1) {
        return true;
      } else {
          return false;
      }
}

console.log(searchArrayWord(value, array));

// ----------------> Задание 2

var arr = [1, 2, 3, 7, 6, 9];
var a = 0;
for (var i = 0; i < arr.length; i++){
    var sum = a + arr[i];
        a = sum;
    var b = sum / arr.length;
}

alert(b);

// ----------------> Задание 3

var arr2 = [1, 3, 5, 6, 7, 9];

function revers(arr2){
    var array= [];
    for( var i = 0; i < arr2.length; i++){   
    array[i] = arr2[arr2.length-1 -i];
}return array;
}
    arr2 = revers(arr2);
alert(arr2);

// ----------------> Задание 4

var obj = {
    html:'HTML', 
    css: 'CSS', 
    js: 'ECMA'
}
console.log(Object.keys(obj));


// ----------------> Задание 5