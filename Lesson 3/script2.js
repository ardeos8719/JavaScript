"use strict";
/*
var message = ''; //глобальная переменная

function showMessage(){
    message = 'Привет МИР!';

    console.log(message);
}

showMessage();
*/
//---------------------------------->


function showMessage(){
    var message = 'Привет МИР 2!';

    console.log(message);
}

showMessage();

//---------------------------------->


var userName = 'Вася';

function showMessage2(){
    userName = 'Петя';

    var message = 'Привет, я ' + userName;

    console.log(message);
}

showMessage2();
alert(userName);


//------------------------------------>

function showMessage3(from, text2, text){

    if(text === undefined){     // для не обязательных параметров
        text = 'текст не введен'; //
    }



    from = '**' + from + '**';

    console.log(from + ':' + text + text2);
}

var from = 'Миша';

showMessage3(from, 'Привет');

console.log(from, 'Привет2', 'Привет');

//------------------------------------>


function calculate(num1, num2){

    if(num1 === undefined){
        num1 = 1;
    }

    if(num2 === undefined){
        num2 = 1;
    }

    if(num1)

    var a = +num1 * +num2;
    alert(a);
}

calculate(2, 3);


//------------------------------------->

function calculate(num1, num2, showM){

    if(num1 === undefined){
        num1 = 1;
    }

    num2 = num2 || 'текст не передан';

    var a = +num1 * +num2;
    
    if(showM){
        alert(a);
    }
    
}

calculate(2, 3, true);

//------------------------------------->

function calcD(a, b, c){
    return b+b-4+a*c;
}

var text = calcD(-4, 2, 1);

console.log(text);

//------------------------------------->

function calcD(a, b, c){
    if (b>2){
        return b+b-4+a*c;
    }else{
        return b+b+4+a*c;
    }
    

}

var text = calcD(-4, 3, 1);

console.log(text);


var funcCalc = calcD;

console.log(funcCalc);

calcD = null;

var text2 = funcCalc(-4, 2, 1);
console.log(text2);

var text3 = funcCalc(-4, 2, 1) + funcCalc(-4, 2, 1);

//------------------------------------->

var calcD2 = function (a, b, c){ //функциональное выражение

    if (b>2){
        return b+b-4+a*c;
    }else{
        return b+b+4+a*c;
    }
};

//--------------------------------------->

sayHi('Вася');

function sayHi(name){
    console.log(name); //GOOD
}

//----------------------

sayHi('Вася');

var sayHi = function (name){ //для сложных структур
    console.log(name);
};

//--------------------------------------->

var age = prompt('Сколько Вам лет');

var sayHi;

if (age >= 18){
    sayHi = function(){
        alert('Заходите');
    };
}else{
    sayHi = function(){
        alert('До 18 нельзя');
    };
}

sayHi();

//------------------------


var age = prompt('Сколько Вам лет');

if (age >= 18){
    function sayHi(){
        alert('Заходите');
    }
}else{
    function sayHi(){
        alert('До 18 нельзя');
    }
}

sayHi();