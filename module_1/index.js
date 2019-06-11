function matrixDiff(arr1, arr2){
    var arr1 = [2, 3, 4, 5];
    var arr2 = [2, 1, 6, 5];
    var sum = 0;
    for(var i=0; i< arr1.length; i++) {
    sum += (arr1[i] - arr2[i]);
}
}

function strangeSearch(words){
    var words = [''];
    for( i=0 ; i < words.length; i += 1){
        document.createElement('input');
        input.innerText = [i]
    }
}
const btn = document.body.createElement('button');
document.body.append(btn)
btn.innerText = 'Search';
btn.onclick = () => {
    btn.href = 'https://www.youtube.com'
};


import cat from './cat.jpg';

function stickyCat(){
    const cat = document.createElement('div');
    document.body.appendChild(cat);
    cat.innerHTML = `<img src= '${cat}'>`;
    const catImg = document.querySelector('img');
    catImg.style.position = "relative";
    catImg.style.borderRadius = '50%';
    window.addEventListener('mousemove', function(e){
        catImg.style.top = event.y + 'px'
        catImg.style.left = event.x +'px'
    })
}

stickyCat()

function unstickTheСat(){
    const cillCat = document.querySelector('div');
    cillCat.style.display = 'none'
}