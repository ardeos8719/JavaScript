"use strict";

var i = 0;
while( i < 3){

    console.log(i);
    i++;
}

//------------------------------->

var  i = 3;

while(i){
    console.log(i);
    i--;
}

//------------------------------->

var i = 0;
do {
    console.log(i);
    i++;
}while( i < 3 );

//------------------------------>

console.log('________________');


for(var i = 0; i < 3; i++){
    console.log(i);
}

//---------------------------->

var i = 0;
for( ; i < 3 ; ){
    console.log();
    i++
}

//---------------------------->
/*
var sum = 0;
while(true){
    var value = +prompt('Введите значение', '');
    
    if(!value){break;}

    sum += value;
}

console.log('Сумма:' + sum);

//---------------------------->
*/

console.log('_____________________');

for(var i = 0; i < 10; i++){
    if(i%2 == 0){
        continue;
    }
    console.log(i);
}