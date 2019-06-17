
function waitForScroll(){
	return new Promise((resolve) => {
	window.addEventListener('scroll', resolve);
});

}


function drawOnScroll(){
	var div = document.getElementById('box');
		div.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

waitForScroll()
	.then(() => drawOnScroll())



function waitForAnswer(){
	return new Promise((resolve, reject) => {

		var pressKey = event => {

			if (event.key == 'y'){
			window.removeEventListener('keydown', pressKey);
			return resolve();
			}

			if (event.key == 'n'){
				window.removeEventListener('keydown', pressKey);
				return reject();
			}

			else{
				alert('y or n')
			}
		}
		window.addEventListener('keydown', pressKey);
	});
}

function setText(text){
	var div2 = document.getElementById('box');
	const text = div2.innerHTML;
	div2.innerHTML = "Вы сделали домашнее задание? Y / N"
}

waitForAnswer()
	.then(() => setText() 
		.then(() => console.log("Так держать!"))
		.catch(() => console.log("Нужно подтянуть("))) 

