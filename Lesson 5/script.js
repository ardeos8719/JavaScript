"use strict";

var str = "Я программист";

console.log( str.charAt(0) ); //Я
console.log( str.charAt(str.length-1)); //т

console.log( str[0]); //я

console.log( str[0].toLocaleLowerCase() );

console.log( str[3].toLocaleUpperCase() );

console.log(str.indexOf('м',));

console.log(str.lastIndexOf('м', str.length));


console.log('____________________');


var target = 'м';
var pos = 0;
while(true){
    var foundPos = str.indexOf(target, pos);
    if(foundPos == -1) break;

    console.log(foundPos);
    pos = foundPos +1;
}

console.log(str.substring(0, 5));

console.log(str.substr(0, 5));

console.log(str.slice(3, 3));




var str3 = '';

for(var i = 1034; i <=1113; i++){
    str3 += String.fromCharCode(i);
}

console.log(str3);


console.log( 'абрикос'.charCodeAt);

console.log('________------______________');


var obj = {};

obj.name = 'Андрей';
obj.age = 25;

console.log(obj.name + ' - ' + obj.age);

delete obj.age;

console.log(obj.name + ' - ' + obj.age);


var obj2 = {
    'name': 'Андрей',
    'age': '25'
};

if('name'in obj2){
    console.log('Такое имя есть');
}

console.log(obj2.weight);

if (obj2.weight === undefined){

}

obj.name = 'Вася';
obj2['name'] = 'Вася';


var key = 'name';
obj2[key] = 'Вася';

var obj4 = {
    'name' : '',
    'phone' : '',
    'items' : {
        1 : {
        'item name' : '',
        'price' : 100
        },
        2 : {

        }
    },
    'time delivery' : function getPrice(){console.log(1111)}
};

obj4['time delivery'] ();

console.log(obj4.items['1'].price);


var counter = 0;
for(var key in obj4){
    console.log('ключ: ' + key + 'Значение: ' + obj4[key]);
    console.log(counter++);
}

var codes = {
    '7': 'Russia',
    '38' : 'Ukraine',
    '1': 'USA'
}; // 1 7 38

codes = {
    '+7': 'Russia',
    '+38' : 'Ukraine',
    '+1': 'USA'
}; // +7 +38 +1


var clone = {};

for (var key in codes){
    clone[key] = codes[key];
}

console.log(clone);


var arr = [];

var arr = ['apple', 'orange', 'kiwi'];

arr[0] = 'Grusha';

arr[3] = 'mandarin';

console.log(arr.length);

arr.pop(); //Удалится последний элемент

arr.push('grusha'); // Добавит в конец один элемент
arr[arr.length] = 'Grusha';

arr.shift('grusha') // Убирает элемент с начала
arr.unshift('grusha') // Добавит в начало элемент unshift('Груша', 'Яблоко', 'Кукуруза')


arr.age = 25; // так не делать!!!!


