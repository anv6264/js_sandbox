const btn = document.createElement('button');

btn.innerText = 'Open';
document.body.append(btn);
btn.onclick = () => {
    div.style.opacity = 1
};


const div = document.createElement('div');

div.style.width = '764px';
div.style.height = '345px';
div.style.backgroundColor = 'rosybrown';
div.style.borderWidth = '2px';
div.style.position = 'relative';
div.style.imageRepeate = 'no-repeat';
div.style.margin = 'auto';
div.style.marginTop = '150px';
div.style.opacity = 0;
div.style.transition = 'opacity 1s';
div.style.display = 'flex';

document.body.append(div);


const pic = document.createElement('img');

pic.src = 'images/developer.png';
pic.style.padding = '0px 40px';
pic.style.height = '343px';
pic.style.position = 'relative';

div.append(pic);

const pass = document.createElement('p');
pass.innerText = 'I DID IT';

pass.style.fontSize = '75px';
pass.style.width = '280px';
pass.style.position = 'relative';


div.append(pass)

const cross = document.createElement('img');

cross.src = 'images/cross-png-28.png';
cross.style.position = 'absolute';
cross.style.marginTop = '0px';
cross.style.width = '20px';
cross.style.height = '20px';
cross.style.marginLeft = '97%'

div.append(cross);

cross.onclick = () =>{
    div.style.opacity = 0;
};



