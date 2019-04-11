"use strict";


var x = 1;

switch(x){
    case 1:
        console.log('Верно');
        break;
    case 2:
        console.log('Неверно');
        break;
    case 3:
        console.log('Неверно');    
        break;
    default:
        console.log('По умолчанию');
        break;
}

//------------------------>

console.log('_______________');

var y = 'Собака';

switch(y){
    case 'Кот':
        console.log('Верно');
        break;
    case 'Хомяк':
        console.log('Неверно');
        break;
    case 'Собака':
        console.log('Неверно');    
        break;
    default:
        console.log('По умолчанию');
        break;
}

var month = 4;

switch(month){
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
}

//------------------------------------------>

var a = 2;
var b = 0;

switch(a){
    case b + 1:
        console.log(1);
        break;
    default:
        console.log('Other');
}

//------------------------------------------>

