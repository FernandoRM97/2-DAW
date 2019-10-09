
const saludar = (nombre:string) => {
    console.log("Hola " + nombre.toUpperCase());
}

let persona = {
    nombre: "Fernando"
}

saludar(persona.nombre);