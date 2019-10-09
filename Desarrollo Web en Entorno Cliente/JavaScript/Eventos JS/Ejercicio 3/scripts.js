
const boton = document.getElementById('boton');
const texto = document.getElementById('texto');

boton.addEventListener('click',()=>{
	texto.addEventListener('keyup',()=>{
		console.log(event.key);
	})
})
