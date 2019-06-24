const div = document.getElementById('div');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');


const place = function(){
    fetch('https://ip.seeip.org/geoip')
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            const a = myJson;
            div.innerHTML = 'Your IP address is ' + a.ip; 
            div1.innerHTML = 'Your country is ' + a.country;
            div2.innerHTML = 'Your city is ' + a.city;
        })
        .catch(()=> div.innerHTML = "We couldn't find your place");
}

place()    




function getData(id){
    return fetch('https://api.jsonbin.io/g/1860424704', {
        method: 'GET'
    })
    .then(response => response.json());
}


// task 2


const list = document.getElementById('list');

function addToDo(toDo){
    const text =`<li class = "item">
                    <p class = "text"> ${toDo} </p>
                    <i class = "trash" job = "delete"></i>
                </li>`
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
}

addToDo()


const input = document.getElementById('input');

document.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addToDo(toDo);
        }
        input.value == "";
    }
})

let LIST = [];

let id = 0;

function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    ListeningStateChangedEvent[element.id].trash = true;
}

list.addEventListener('click', function(event){
    const elementJob = element.attributes.job.value;
    if(elementJob == 'delete'){
        removeToDo(element);
    }
})