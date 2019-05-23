//task 2

function print(n) { 
    var i, j; 
    for (i = 1; i <= n; i++) { 
       
        for (j = 1; j < i; j++) { 
            document.write('&nbsp;'); 
        }
        
        for (j = 1; j <= (n * 2 - (2 * i - 1)); j++) { 

            console.log(n * 2 - (2 * i - 1))
  
            if (j == 1 || j== (n * 2 - (2 * i - 1))) { 
                console.log(j== (n * 2 - (2 * i - 1)))
                document.write('*') 
            } else { 
                document.write('&nbsp;'); 
            } 
        }   

        document.write("<br/>"); 
    } 
}


function print2(n) { 
    var i, j, space, k = 0; 
      
    for (i = 1; i <= n; i++) { 
        
        for (j = 1; j <= n - i; j++) { 
            document.write("&nbsp;"); 
        } 
        
        while (k != (2 * i - 1)) { 
            if (k == 0 || k == 2 * i - 2) 
                document.write("*"); 
            else
                document.write("&nbsp;"); 
            k++; 
        } 
        k = 0; 
        
        document.write("<br/>");  
    } 
    n--; 
    
    for (i = n; i >= 1; i--) { 
        
        for (j = 0; j <= n - i; j++) { 
            document.write("&nbsp;");  
        } 
        
        k = 0; 
        while (k != (2 * i - 1)) { 
            if (k == 0 || k == 2 * i - 2) 
                document.write("*"); 
            else
                document.write("&nbsp;"); 
            k++; 
        } 
        document.write("<br/>"); 
    } 
} 
function doublePrint(print2, print2){
    console.log(print2, print2);
}

//task 3

function calculate(){
    prompt('Введите 1, если необходимо произвести расчет формулы y=kx+b.\n Введите 2, если необходимо произвести расчет формулы y=x^2. \n Введите exit, если необходимо закончить расчеты.');
    var a, k, b, x;
    if (a=1){
        function functionOne(k, b, x){
            var y = k*x+b;
            var k = parseInt(prompt('Введите k для расчета функции y=kx+b. \n Введите exit, если необходимо закончить расчеты.'));
            var b = parseInt(prompt('Введите b для расчета функции y=kx+b. \n Введите exit, если необходимо закончить расчеты.'));
            var x = parseInt(prompt('Введите x для расчета функции y=kx+b. \n Введите exit, если необходимо закончить расчеты.'));
            alert(y);
        }
    }else if(a=exit){
        break;
    }else{
        this.calculate();
    }
    if (a=2){
        function functionTwo(x){
            var y = x * x;
            var x = parseInt(prompt('Введите x для расчета функции y=x^2. \n Введите exit, если необходимо закончить расчеты.'));
            alert(y);
        }
    }else if(a=exit){
        break;
    }else{
        this.calculate();
    }
}

