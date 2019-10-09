
let cartas = ['1Oros.jpg', '1Espadas.jpg', '1Copas.jpg', '1Bastos.jpg', '2Oros.jpg', '2Espadas.jpg', '2Copas.jpg', '2Bastos.jpg', '3Oros.jpg', 
	'3Espadas.jpg','3Copas.jpg', '3Bastos.jpg', '4Oros.jpg', '4Espadas.jpg', '4Copas.jpg', '4Bastos.jpg', '5Oros.jpg', '5Espadas.jpg',
	'5Copas.jpg', '5Bastos.jpg', '6Oros.jpg', '6Espadas.jpg', '6Copas.jpg', '6Bastos.jpg','7Oros.jpg', '7Espadas.jpg', '7Copas.jpg', 
	'7Bastos.jpg', '8Oros.jpg', '8Espadas.jpg', '8Copas.jpg', '8Bastos.jpg', '9Oros.jpg', '9Espadas.jpg', '9Copas.jpg', '9Bastos.jpg',
 	'0Oros.jpg', '0Espadas.jpg', '0Copas.jpg', '0Bastos.jpg'];

const pedirCarta = document.getElementById('pedirCarta');

const cartaGenerada = document.getElementById('cartaGenerada');

const puntosJugador = document.getElementById('puntosJugador');

const puntosBanca = document.getElementById('puntosBanca');

const mensajeGanador = document.getElementById('mensajeGanador');

const puntosAntiguosJug = document.getElementById('puntosAntiguosJug');

const banca = document.getElementById('banca');

const puntosAntiguosBanca = document.getElementById('puntosAntiguosBanca');

const cartaGeneradaB = document.getElementById('cartaGeneradaB');

const cartasJugador = document.getElementById('cartasJugador');

const cartasBanca = document.getElementById('cartasBanca');

let puntuacionJugador = 0;

let puntuacionBanca = 0;

let puntos;

let puntos2;

pedirCarta.addEventListener('click', ()=>{
	cartaAleatoria();
});


cartaAleatoria = () => {

	let cartaAle = cartas[Math.floor(Math.random() * cartas.length)];

    let img = document.createElement('img');

    img.src = "imagenes/" + cartaAle;

    cartaGenerada.src = img.src;

    puntos = parseInt(cartaAle[0]);

    if(puntos > 7 || puntos == 0){
    	puntuacionJugador = puntuacionJugador + 0.5;
    } else {
    	puntuacionJugador = puntuacionJugador + puntos;
    }

   	puntosAntiguosJug.innerHTML = puntuacionJugador;

   	if(puntuacionJugador > 7.5){
   		alert('HAS PERDIDO');
   		location.reload();
   	}


   	cartaPeque = document.createElement('img');
   	cartaPeque.src = "imagenes/" + cartaAle;
   	cartaPeque.style.cssText = 'height: 130px; width: 80px;';


   	cartasJugador.appendChild(cartaPeque);
}

banca.addEventListener('click', ()=>{
	juegaBanca();
});


juegaBanca = () => {

	while(puntuacionBanca < puntuacionJugador && puntuacionBanca <= 7.5){

		let cartaAleB = cartas[Math.floor(Math.random() * cartas.length)];

   		let img2 = document.createElement('img');

    	img2.src = "imagenes/" + cartaAleB;

    	cartaGeneradaB.src = img2.src;

    	puntos2 = parseInt(cartaAleB[0]);

    	if(puntos2 > 7 || puntos2 == 0){
    		puntuacionBanca = puntuacionBanca + 0.5;
    	} else {
    		puntuacionBanca = puntuacionBanca + puntos2;
    	}

   		puntosAntiguosBanca.innerHTML = puntuacionBanca;

   		cartaPeque2 = document.createElement('img');
   		cartaPeque2.src = "imagenes/" + cartaAleB;
   		cartaPeque2.style.cssText = 'height: 130px; width: 80px;';
   		cartasBanca.appendChild(cartaPeque2);

	}

	if (puntuacionBanca > 7.5) {
		alert('GANA EL JUGADOR');
		location.reload();
	} else if (puntuacionBanca >= puntuacionJugador){
		alert('GANA LA BANCA');
		location.reload();
	} else if(puntuacionJugador > puntuacionBanca) {
		alert('GANA EL JUGADOR');
		location.reload();
	}
}