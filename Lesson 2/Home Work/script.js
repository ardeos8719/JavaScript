
//--------- Task 1 --------//

var a = 3;

if (a == '1'){
    alert('Верно');
}
else{
    alert('Неверно');
}

//--------- Task 2 --------//

var item = true;

if (item != true){
    alert('Верно');
}else{
    alert('Неверно');
}

//------------------------------

var item = false;
var item = (item != true) ? 'Верно' : 'Неверно';
    alert(item);

//--------- Task 3 --------//

var a = -3;

if (a > 0 && a < 4){
    alert('Верно');
}else{
    alert('Неверно');
}

//--------- Task 4 --------//

var a = 0;
var b = 6;

if(a > 3 && a < 12 || b >= 7 && b < 15){
    alert('Верно');
}else{
    alert('Неверно');
}

//--------- Task 5 --------//

var month = prompt ('Введите номер месяца');

if (month == 1 || month == 2 || month == 12){
    alert('Зима '+'❄❄❄ :)');
}else if (month == 3 || month == 4 || month == 5){
    alert('Весна '+' ☀ :)');
}else if(month == 6 || month == 7 || month == 8){
    alert('Лето '+' ✿  :)');
}else if(month == 9 || month == 10 || month == 11){
    alert('Осень '+' ☁  :)');
}else{
    alert('Вы не выбрали месяц');
}

//--------- Task 6 --------//