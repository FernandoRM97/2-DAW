
function inicializar() {

	let array = new Array(0);

	let nombre1 = prompt("Escribe un nombre");

	array.push(nombre1);

	let nombre2 = prompt("Escribe un nombre");

	if (nombre2 === nombre1) {
		do {
			nombre2 = prompt("Nombre repetido, inserta otro");
		} while(nombre2 === nombre1);
	}

	array.push(nombre2);

	let nombre3 = prompt("Escribe un nombre");

	if(nombre3 === nombre1 || nombre3 === nombre2){
		do {
			nombre3 = prompt("Nombre repetido, inserta otro");
		} while(nombre3 === nombre1 || nombre3 === nombre2);
	}

	array.push(nombre3);

	let nombre4 = prompt("Escribe un nombre");

	if (nombre4 === nombre1 || nombre4 === nombre2 || nombre4 === nombre3) {
		do {
			nombre4 = prompt("Nombre repetido, inserta otro");
		} while(nombre4 === nombre1 || nombre4 === nombre2 || nombre4 === nombre3);
	}

	array.push(nombre4);

	let nombre5 = prompt("Escribe un nombre");

	if (nombre5 === nombre1 || nombre5 === nombre2 || nombre5 === nombre3 || nombre5 === nombre4) {
		do {
			nombre5 = prompt("Nombre repetido, inserta otro");
		} while(nombre5 === nombre1 || nombre5 === nombre2 || nombre5 === nombre3 || nombre5 === nombre4);
	}

	array.push(nombre5);


	let array2 = array;

	array2.sort();

	let array3 = new Array(0);

	for (let i = 0; i < array2.length; i++) {
		let palabra = array2[i];
		let letra = palabra[0];
		array3.push(letra.toUpperCase());
	}

	console.log(array3);

} 