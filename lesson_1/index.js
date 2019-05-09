function makeGreetings(age){
    var a = prompt('Сколько Вам лет?');
    if ( a % 10 == 0  || ( a >= 5 && a <= 19 ) || 
        ( a % 10 >= 5 && a % 10 <= 9) && a > 20){
        alert('Мой возраст ' + a + ' лет')
    }else if ((a % 10 == 1) && a > 20  || a == 1 ){
        alert('Мой возраст ' + a + ' год')
    }else if ( (a >=2 && a <= 4) || ((a % 10 >= 2 && a % 10 <= 4) && a > 20)){
        alert('Мой возраст ' + a + ' года')
    }
}


function splitArray(arr, n){
    var arr = [1, 4, 5, 6, 2, 18, 15, 13];
    var n = 4;
    var i, j, arr2 = [];
    for (i = 0, j = arr.length; i < j; i += n) {
      arr2.push(arr.slice(i, i + n));
    }
    return arr2;
}


function add(a){ 
    return function (b){return a+b}
}


function transformData(arr3){
var arr3 = [
    { login: 'johnny778', firstName: 'John', lastName: 'Doe', mark: 10 },
    { login: 'superman', firstName: 'Mark', lastName: 'Coulson', mark: 3 },
    { login: 'alexgerman', firstName: 'Alex', lastName: '', mark: 7 },
    ];

for (var i of arr3){
        console.log(i)}

for (var {key, value} of i){
        if (i.mark > 5){
        console.log( i.login + ': ' + '\'' + i.firstName + ' ' + i.lastName + '\'');
    }
    }
}