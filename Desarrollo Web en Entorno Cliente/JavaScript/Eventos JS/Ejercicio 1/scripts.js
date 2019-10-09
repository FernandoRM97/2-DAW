
const box = document.getElementById('box');

box.addEventListener('mouseenter',()=>{
	box.classList.replace('red','green');
})

box.addEventListener('mouseleave',()=>{
	box.classList.replace('green','red');
})


box.addEventListener('mouseup', () =>{
	console.log('HAS PULSADO LA CAJA');
})

box.addEventListener('mouseleave', () =>{
	console.log('HAS DEJADO DE PULSAR LA CAJA');
})

