
function anadir() {
	let nelemento = document.getElementById("input").value;
	let posicion = document.getElementById("posicion").value;
	
	lista = document.getElementById("lista");
	elemento = document.createElement("li");

	nuevo = document.createTextNode(nelemento);

	elemento.appendChild(nuevo);
	lista.insertBefore(elemento, lista.children[posicion-1]);
}

function borrar() {
	let posicion = document.getElementById("posicion").value;
	lista = document.getElementById("lista");
	lista.removeChild(lista.getElementsByTagName("li")[posicion-1]);
}