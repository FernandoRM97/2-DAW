

const d = new Date();

let dia = d.getDate();

let mes = d.getMonth() + 1;

let anyo = d.getFullYear();

let hora = d.getHours();

let minuto = d.getMinutes();

let segundo = d.getSeconds();

document.write('Hoy es ' + dia + '-' + mes + '-' + anyo + ' y son las ' + hora + ':' + minuto + ':' + segundo + ' horas');