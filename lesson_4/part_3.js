function func5(){
    
    var arr = [2, [3, [4, 5]]];
    var arr2 = [2, [5]];
    var arr3 = (arr.concat(arr2)).flat(2);

    console.log(arr3);
}


const add = (a) => {
    let sum = a;
    const func = (b) => {
        func.result += b;
        return func;
    };
    func.result = a;
    return func;
}



function func3(){
    var stringValue = '';
    for(i = 0; i < i(-4).length; i += 1){
        var hidden = stringValue.replace(/d/g, '*');
    }
}


// task 6
// сравнить друг с другом последовательно идущие элементы и при совпадении вывести в консоль


var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var prev = 0;
var current = 0;

function maxSum(arr){
    for (i=0; i < arr.length; i+=0){
    prev = prev + a[i];
    if (prev < 0){
        prev = 0;
    }else if (current < prev){
        current = prev;
    }
}
    return current;
}
