// RECUPERAMOS TODOS LOS ELEMENTOS QUE VAYAMOS A NECESITAR

const boton = document.getElementById('boton');

const select = document.getElementById('select');

const tabla = document.getElementById('tabla');

// CREAMOS UN EVENTO QUE AL HACER CLICK EN EL BOTON HAGA LO SIGUIENTE

boton.addEventListener('click', (e) => {

        // PREVENIMOS QUE RECARGUE LA PÁGINA YA QUE EL BOTON ES DE TIPO SUBMIT
        e.preventDefault();

        const id = select.value;

        // SI EL SELECT TIENE INFORMACIÓN, COGEMOS LA ID DEL OBJETO QUE HAYA SELECCIONADO EN EL SELECT, A TRAVES DEL FETCH ACCEDEMOS LA BD DE USUARIOS Y
        // ACCEDEMOS AL USUSARIO DONDE EL ID SEA EL MISMO QUE EL DEL SELECT Y SACAMOS TODOS LOS DATOS QUE QUERAMOS Y LOS ORGANIZAMOS PARA QUE APAREZCAN
        // EN UNA TABLA

        if(select.length > 0) {

            fetch(`https://jsonplaceholder.typicode.com/users`)
                .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
                .then(res => res.json())
                .then(res => {
        
                    // CREAMOS TODOS LOS TD Y EL TR QUE NECESITAMOS PARA RELLENAR LA TABLA
                    const td1 = document.createElement('td');
                    const td2 = document.createElement('td');
                    const td3 = document.createElement('td');
                    const td4 = document.createElement('td');
                    const td5 = document.createElement('td');
                    const td6 = document.createElement('td');                    
                    const tr = document.createElement('tr');

                    // CREAMOS LOS TEXTOS PARA RELLENAR CADA TD
                    const td11 = document.createTextNode(res[id].id);
                    const td22 = document.createTextNode(res[id].name);
                    const td33 = document.createTextNode(res[id].username);
                    const td44 = document.createTextNode(res[id].email);
                    const td55 = document.createTextNode(`${res[id].address.street} , ${res[id].address.suite} , ${res[id].address.city} , ${res[id].address.zipcode}`);
                    const td66 = document.createTextNode(res[id].phone);

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

        } else {

            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
                .then(res => res.json())
                .then(res => {                

                // CARGAMOS EL SELECT CON TODAS LAS RESPUESTAS QUE NOS HA DADO EL FETCH, AÑADIENDO SOLO EL NOMBRE. A ESTE NOMBRE CON LA OPCIÓN SETATTRIBUTE
                // LE AÑADIMOS SU ID, ASI EL OBJETO ES MÁS FACIL DE LOCALIZAR.

                for (var i = 0; i < res.length; i++) {

                const option = document.createElement('option');
                option.setAttribute('value', res[i].id - 1);
                const datos = document.createTextNode(res[i].name);

                option.appendChild(datos);
                select.appendChild(option);

                }

            })

        }
})