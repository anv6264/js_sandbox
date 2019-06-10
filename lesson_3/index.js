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
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks
    }
    setMarks(){
        console.log(this.marks)
    }
    averageMark(marks, sum){
        this.marks = marks;
        var sum = 0;
        for (var i = 0; i < this.marks.length; i += 1){
            sum += this.marks[i];
        }
        var result = sum / this.marks.length;
        console.log(result);        
    }
}

const he = new AlevelStudent ('Ivan', 19, [5, 3, 5, 1, 4]);



class Calculator {
    constructor(num = 0){
        this.num = num;
    }
    reset(){
        return this.num = 0;
    }
    add(num){
        return this.num += num;
    }
    sub(num){
        return this.num -= num;
    }
    mul(num){
        return this.num *= num;
    }
    div(num){
        return this.num /= num;
    }
    pow(num){
        return this.Math.pow(num, num);
    }
    sqrt(){
        return this.Math.sqrt();
    }
    getResult(){
        return add().reset().sub().mul().add().pow().sqrt();
    }
}

let num = new Calculator(num)
