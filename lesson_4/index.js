//task 1

function makeImages(){

  for(let i = 0; i < div.length; i += 1){
    const img = document.createElement('img');
    img.src = ' ';
    div[i].append(img);
}
    return console.log(link.parentElement);
}


//task 3

function initBall(){
    document.body.createElement('div');
    div.style.width = '20px';
    div.style.height = '20px';
    div.style.borderRadius = '100%';
    div.style.background = 'red';
    body.append(div);

    div.onclick = function(){
        div.style.top = '${event.x}px';
        div.style.top = '${event.y}px';
    }
    div.onclick = null;
    
}
