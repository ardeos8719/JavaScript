"use strict"


console.log('Б' > 'А');

console.log('2' > 1);

console.log(0 == false);

console.log('' == false);

console.log(0 === false);

console.log(0 !== false);

console.log(null == undefined);

console.log(null > 0); //false

console.log(null >= 0); //true

console.log(null <= 0); //true

alert(1);

var result = prompt('Введи привет', 'Пока');

console.log(result);

result = confirm('Сейчас 2019?');

console.log(result);



var year = prompt('Какой сейчас год?');

if(year != 2019){
    
    alert('Не верно');

}

if(year == 2019){
    alert('Да');
}else{
    alert('Нет');
}



if(year < 2019){

    console.log('Чуть больше');

}else if(year > 2019){

    console.log('Чуть меньше');

}else{

    console.log('Верно');
}



var age = 13;
var access = (age > 14) ? true : false;
//var access = (age > 14) ? 'Да' : 'Нет';


var message = (age < 3) ? 'Привет малыш' : 
(age < 18) ? 'Привет' :
(age < 100) ? 'Здравствуйте!' :
'Какой большой возраст';

console.log(message);



console.log(true || true);
console.log(true || false);
console.log(false || false);


if(age < 3 || age > 100){

}

if(age < 3 || age > 100 || age > 50 || age > 80){

}else{

}


var x;
true || (x = 1);
alert(x);

//------------------------------------

var x;
false || (x = 1);
alert(x);

//-------------------------------------

console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false

//--------------------------------------

var hours = 12,
    minute = 30;

if(hours == 12 && minute == 30){
    alert('Время 12:30');
}

console.log(1 && 5);

//--------------------------------------

var value = 10;

var result = !value;

console.log(result);

if(!value){

}

//--------------------------------------

console.log( !!'privet');

//--------------------------------------

var number1 = '10';
Number(number1);

number1 = +number1;

//---------------------------------------

console.log(+'  \n 123 \n  \n');

//--------------------------------------

console.log( +true);

//--------------------------------------

console.log( '\n' == false);

//--------------------------------------

console.log( '1' == true);

//--------------------------------------

