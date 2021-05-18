"use strict";

console.log("Ejercicio 4");

var numero1 = parseInt(
  prompt("Ingrese un numero y sepa que numeros son divisibles de este...")
);

for (var i = 0; i <= numero1; i++) {
  if (numero1 % i == 0) {
    console.log(" el numero es divisible por : " + i);
  }
}
