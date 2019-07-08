
const list = document.getElementById('list');
const input = document.getElementById("input");

const CHECK = "check-circle";
const UNCHECK = "circle-thin";
const LINE_THROUGH = "lineThrough";

function addToDo(toDo, id, done, trash){
    if (trash){ return;}
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const text =`<li class="item" type="circle" onclick="completeToDo(${id})" id="${id}">
                    <i class = "${DONE}" ></i>
                    <p class = "text ${LINE}"> ${toDo} </p>
                    <i class = "trash"></i>
                </li>`
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
}


document.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id : id,
                done: false,
                trash: false
            });
            id ++;
        }
        input.value = "";
    }
});

let LIST = [], 
    id = 0;


function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
};


function completeToDo(id){
    
    var a = document.getElementById(id);
    
    if (a.className == "item") {
        console.log(a[0])
        a.classList.remove("text");
    }else if(a[0].classList == "complete"){
        a.classList.toggle("text");
    }
}





localStorage.setItem('key', 'value');
let variable = localStorage.getItem('key');

localStorage.setItem('TODO', JSON.stringify(LIST));


let data = localStorage.getItem('TODO');

if (data){
    LIST = JSON.parse(data);
    loadToDo(LIST);
    id = LIST.length;
}else{
    LIST = [];
    id = 0;
};

function loadToDo(array){
    array.forEach(item => {
        addToDo(item.name, item.id, id.done, item.trash);
        
    });
}


