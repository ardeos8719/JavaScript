"use strict";

var arr = new Array('apple', 'Grusha');

var matrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];

console.log(matrix[0][2]);

var names = 'Masha, Nadya, Marina, Natasha';

var arr = names.split(', ');

console.log(arr);

var arr3 = ['Masha', 'Nadya', 'Marina', 'Natasha'];

var str = arr3.join(';');


var arr4 = ['Masha', 'Nadya', 'Marina', 'Natasha'];

delete arr4[1];

console.log(arr4[1]);

arr4.splice(1, 1);

console.log(arr4[1]);

arr4.splice(1, 2, 'Cat', 'Olya');

console.log(arr4);

var removed = arr4.splice(1, 2);

console.log(removed);

arr4.splice(2,0, 'Natasha', 'Alina');

console.log(arr4);

arr4.splice(-1, 0, 3, 4);

console.log(arr4);

var arr5 = ["Почему", "надо", "учить", "JavaScript"];

var arr6 = arr5.slice(1, 3);

console.log(arr6);

var arr6 = arr5.slice(1);

var arr6 = arr5.slice(-2);

console.log(arr6);

var arr6 = arr5.slice();

var arr7 = ['q', 'c', 'd'];

arr7.sort();

console.log(arr7);

function compareNumeric(a, b) {
    if (a > b){return 1;}
    if (a < b){return -1;}
}

arr7.sort(compareNumeric);




var arr8 = [1, 2, 3];

arr.reverse();

console.log(arr8);


var arr9 = [1, 2];
 
var newArr = arr9.concat(arr8);

console.log(newArr);


console.log(arr9.indexOf('1'));

var user = {
    name: 'Petr',
    age: 30
}

var keys = Object.keys(user);

console.log(keys);

var arr10 = ["Яблоко", "Апельсин", "Груша"];

arr10.reverse().forEach(function(item, i, arr) {
  console.log( i + ": " + item + " (массив:" + arr + ")" );
});



var arr11 = [1, -1, 2, -2, 3];

var positiveArr = arr11.filter(function(number) {
  return number > 0;
});

console.log( positiveArr ); 

//-------------------------------------//

var names = ['1', '5', '10'];

var nameLengths = names.map(function(name) {
  return name * 27;
});

console.log( nameLengths );

//------------------------------------//

var arr77 = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

console.log( arr77.every(isPositive) ); 
console.log( arr77.some(isPositive) ); 

//-----------------------------------//


var arr13 = [1, 2, 3, 4, 5]

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
var result = arr13.reduce(function(sum, current) {
  return sum + current;
}, 0);

console.log( result ); // 15

//-------------------------------------//

function getPhone(name){
    
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

getPhone('name', 'adress', 'kuku');