var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var diaSemana = fecha.getDay();
var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hora}
    Minutos : ${minutos}
    El dia de la semana es: ${diaSemana}
`;

console.log(fecha);
console.log(textoHora);

//PARA FUNCIONES MATEMATICAS..... con objeto Math.

console.log("para funciones matematicas =>con objeto-> Math......");

console.log(Math.random());
console.log(Math.random() * 1000);
console.log(Math.ceil(Math.random() * 10000));
