
const boton = document.getElementById('boton');

const lista = document.getElementById('lista');

boton.addEventListener('click',  () => {

	let xhr
	if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
	else xhr = new ActiveXObject("Microsoft.XMLHTTP")


	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

	xhr.addEventListener('load', (data) => {

		const personas = JSON.parse(data.target.response);

		for (var i = 0; i < personas.length; i++) {

			const li = document.createElement('li');
			const datos = document.createTextNode(personas[i].id + ' - ' + personas[i].name);

			li.appendChild(datos);
			lista.appendChild(li);

		}

	})

	xhr.send()
})