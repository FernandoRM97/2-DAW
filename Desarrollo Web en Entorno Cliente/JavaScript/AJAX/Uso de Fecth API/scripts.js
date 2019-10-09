
const boton = document.getElementById('boton');

const lista = document.getElementById('lista');

boton.addEventListener('click',  () => {


		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
			.then(res => res.json())
			.then(res => {
				
			for (var i = 0; i < res.length; i++) {

			const li = document.createElement('li');
			const datos = document.createTextNode(res[i].id + ' - ' + res[i].name);

			li.appendChild(datos);
			lista.appendChild(li);

		}
			})

	

})