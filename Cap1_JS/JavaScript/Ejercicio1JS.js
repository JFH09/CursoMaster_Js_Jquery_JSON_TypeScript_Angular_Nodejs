"use strict";

console.log("Ejercicio1");

var numero1 = parseInt(prompt("Ingresa un numero para el dato 1"));
var numero2 = parseInt(prompt("Ingresa un dato para el numero 2"));

alert("los numeros que digito son ..." + numero1 + " y " + numero2);
if (numero1 > numero2) {
  alert("El numero 1 es mayor que el numero 2");
} else if (numero2 > numero1) {
  alert("El numero 2 es mayor que el numero 1");
} else if (numero1 == numero2) {
  alert("Los dos numeros son iguales");
} else if (isNaN(numero1) || isNaN(numero2)) {
  //NO ES UN NUMERO !!! isNaN
  alert("No es un numero lo que digito... vuelva a digitarlo...");
  console.log(
    "No digito un numero => para saberlo es con isNaN (is not a number?)"
  );
}

while (isNaN(numero1) || isNaN(numero2)) {
  numero1 = parseInt(prompt("Digite nuevamente el numero para el dato 1"));
  numero2 = parseInt(prompt("Digite nuevamente el numero para el dato 2"));

  console.log("Digito los datos ... " + numero1 + " y " + numero2);
}

alert("Digito los datos ... " + numero1 + " y " + numero2);
