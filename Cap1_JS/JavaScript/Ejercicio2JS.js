"use strict";

console.log("Ejercicio2");

var numero1 = parseInt(prompt("Ingrese dato 1"));
var numero2 = parseInt(prompt("Ingrese dato 2"));
console.log("Los numeros que estan entre esos dos numeros son...");
var mayor = 0;
var menor = 0;
if (numero1 < numero2) {
  console.log("El numero mayor es numero2");
  mayor = numero2;
  menor = numero1;
} else if (numero2 < numero1) {
  console.log("El numero mayor es numero1");
  mayor = numero1;
  menor = numero2;
} else if (isNaN(numero1) || isNaN(numero2)) {
  alert("Digito un valor incorrecto vuelva a digitarlo");
}

console.log(
  "Los numeros que estan entre el " + menor + " y el " + mayor + " son : "
);
document.write(
  "<h1>Los numeros que estan entre el " +
    menor +
    " Y el " +
    mayor +
    " son : </h1>"
);
while (menor < mayor - 1) {
  menor++;
  console.log(menor);
  document.write(menor + "</br>");
}
