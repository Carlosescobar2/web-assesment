console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submitted!!")
}




let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function handleOver(evt){ 
	evt.preventDefault();

	alert("Sup chief")
}

let img = document.querySelector('img#duck');

img.addEventListener("mouseover",handleOver)