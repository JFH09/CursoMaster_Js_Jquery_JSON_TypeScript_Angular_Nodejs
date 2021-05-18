"use strict";

var nombre = prompt("Ingresa tu nombre");
var apellido = prompt("Ingresa tu primer apellido");

var texto = `
    <h1>Interpolacion de variables...</h1>
    <h3>El nombre que digito es :  ${nombre}</h3>
    <h3>El apellido es : ${apellido}</h3>    
`;

document.write(texto);
