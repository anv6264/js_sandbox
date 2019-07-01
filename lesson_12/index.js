
const list = document.getElementById('list');
const input = document.getElementById("input");

const CHECK = "check-circle";
const UNCHECK = "circle-thin";
const LINE_THROUGH = "lineThrough"

function addToDo(toDo, id, done, trash){
    if (trash){ return;}
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const text =`<li class="item" type="circle">
                    <i class = "${DONE}" job="complete id="${id}" ></i>
                    <p class = "text ${LINE}"> ${toDo} </p>
                    <i class = "trash" job = "delete" id="${id}"></i>
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
        input.value = " ";
    }
});

let LIST = [], 
    id = 0;


function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
};

const b = document.getElementsByClassName("text");

function completeToDo(){
    var a = document.getElementsByTagName('p').classList;
    if (a.classList == "text") {
        a.classList.add("complete");
    }else if(a.classList == "complete")
        a.classList.add("text");
}

b.onclick = function completeToDo(){};




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


