// RECUPERAMOS TODOS LOS ELEMENTOS QUE VAYAMOS A NECESITAR

const registraUsuario = document.getElementById('registraUsuario');

const borrarDatos = document.getElementById('borrarDatos');

const consultaUsuario = document.getElementById('consultaUsuario');

const consultaLastLogin = document.getElementById('consultaLastLogin');

const Nickname = document.getElementById('Nickname');
const Nombre = document.getElementById('Nombre');
const Password = document.getElementById('Password');
const DNI = document.getElementById('DNI');
const Edad = document.getElementById('Edad');

const tabla = document.getElementById('tabla');

// VARIABLE DONDE IREMOS ALMACENANDO EL NICKNAME DEL ULTIMO REGISTRO
let lastNickname = "" ;

// RECOGEMOS LOS VALORES DEL FORMULARIO Y VALIDAMOS LA CONTRASEÑA

registraUsuario.addEventListener('click', (e) => {

	// PREVENIMOS QUE RECARGUE LA PÁGINA YA QUE EL BOTON ES DE TIPO SUBMIT
	e.preventDefault();

	let nickname = Nickname.value;
	let nombre = Nombre.value;
	let password = Password.value;
	let dni = DNI.value;
	let edad = Edad.value;


	// CREAMOS UN OBJETO FECHA Y SACAMOS LA INFORMACION QUE NECESITEMOS
    const d = new Date();

	let dia = d.getDate();
	let mes = d.getMonth() + 1;
	let anyo = d.getFullYear();
	let hora = d.getHours();

	let fecha = `${dia}/${mes}/${anyo} ${hora}horas`;

	// CREAMOS UN OBJETO PERSONA
	const persona = {
		Nombre: nombre,
		Password: password,
		DNI: dni,
		Edad: edad,
		FechaAlta: fecha
	};	

	// FUNCIÓN QUE INTRODUCE INFORMACION EN EL LOCAL STORAGE
	localStorage.setItem(nickname, JSON.stringify(persona));

	// ASIGNAMOS A LA VARIABLE EL ULTIMO NOMBRE
	lastNickname = nickname;


})

// BORRAMOS TODOS LOS DATOS DEL LOCAL STORAGE

borrarDatos.addEventListener('click', (e) => {

	// PREVENIMOS QUE RECARGUE LA PÁGINA YA QUE EL BOTON ES DE TIPO SUBMIT
	e.preventDefault();

	// FUNCION QUE LIMPIA TODOS LOS REGISTROS DEL LOCAL STORAGE
	localStorage.clear();

})

// A TRAVÉS NICKNAME SACAMOS LA INFORMACIÓN DE LA PERSONA A BUSCAR, COMO LO HEMOS INTRODUCIDO COMO JSON, LO CONVERTIMOS Y ACCEDEMOS A CADA UNO DE LOS
// ATRIBUTOS Y LOS VAMOS MOSTRANDO EN UNA TABLA

consultaUsuario.addEventListener('click', (e) => {

	// PREVENIMOS QUE RECARGUE LA PÁGINA YA QUE EL BOTON ES DE TIPO SUBMIT
	e.preventDefault();

	let nickname = Nickname.value;

	// CONVERTIMOS EL JSON Y LO GUARDAMOS EN LA VARIABLE INFO
	let info = JSON.parse(localStorage.getItem(nickname));

		// CREAMOS TODOS LOS TD Y EL TR QUE NECESITAMOS PARA RELLENAR LA TABLA
		const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');                    
        const tr = document.createElement('tr');

        // CREAMOS LOS TEXTOS PARA RELLENAR CADA TD
        const td11 = document.createTextNode(nickname);
        const td22 = document.createTextNode(info.Nombre);
        const td33 = document.createTextNode(info.Password);
        const td44 = document.createTextNode(info.DNI);
        const td55 = document.createTextNode(info.Edad);
        const td66 = document.createTextNode(info.FechaAlta);

        // ADJUDTAMOS CADA TEXTO A CADA TD
        td1.appendChild(td11);
        td2.appendChild(td22);
        td3.appendChild(td33);
        td4.appendChild(td44);
        td5.appendChild(td55);
        td6.appendChild(td66);

        // ADJUDTAMOS CADA TD AL TR
        tr.appendChild(td1);
        tr.appendChild(td2);    
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);    
        tr.appendChild(td6);                    

        // ADJUDTAMOS EL TR A LA TABLA
        tabla.appendChild(tr);		


})

// EVENTO DONDE A TRAVES DEL ULTIMO NICKNAME DEL ULTIMO REGISTRO ACCEDEMOS A SU INFORMACION Y LO MOSTRAMOS POR CONSOLA

consultaLastLogin.addEventListener('click', (e) => {

	// PREVENIMOS QUE RECARGUE LA PÁGINA YA QUE EL BOTON ES DE TIPO SUBMIT
	e.preventDefault();

	// SACAMOS POR PANTALLA LA INFORMACION DEL ULTIMO REGISTRO ALMACENADO
	console.log(localStorage.getItem(lastNickname));

})
