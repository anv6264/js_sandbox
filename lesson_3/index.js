class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('Hello, my name is ' +  this.name + ', i am ' + this.age + ' years old')
    }
}


class AlevelStudent extends Human {
    super(marks){
        this.marks = []
    }
    setMarks(marks){
        console.log( marks )
    }
    averageMark(marks, sum){
        this.marks = marks;
        var sum = 0;
        for (var i = 0; i < marks.length; i += 0){
            sum += marks[i];
        }
        var result = sum / marks.length;
        console.log(result);        
    }
}

const he = new AlevelStudent ('Ivan', 19, [5, 3, 5, 1, 4]);

class Calculator {
    constructor(num = 0){
        this.num = num;
    }
    reset(){
        this.num = 0;
    }
    add(num){
        this.num += num;
    }
    sub(num){
        this.num -= num;
    }
    mul(num){
        this.num *= num;
    }
    div(num){
        this.num /= num;
    }
    pow(num){
        Math.pow(num, num);
    }
    sqrt(){
        Math.sqrt();
    }
    getResult(){
        return add().reset().sub().mul().add().pow().sqrt()
    }
}


const num = new Calculator(num)

