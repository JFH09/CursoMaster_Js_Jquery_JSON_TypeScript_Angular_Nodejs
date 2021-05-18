"use strict";

function porConsola(dato1, dato2) {
  console.log("CALCULADORA EN FUNCION...");
  console.log("Suma : " + (dato1 + dato2));
  console.log("Resta : " + (dato1 - dato2));
  console.log("Multiplicacion : " + dato1 * dato2);
  console.log("Division : " + dato1 / dato2);
}

function porPantalla(dato1, dato2) {
  document.write("<h1>Calculadora en funcion </h1>");
  document.write("Suma : " + (dato1 + dato2) + "</br>");
  document.write("Resta : " + (dato1 - dato2) + "</br>");
  document.write("Multiplicacion : " + dato1 * dato2 + "</br>");
  document.write("Division : " + dato1 / dato2 + "</br>");
}
function calcular(dato1, dato2, mostrar = false) {
  if (mostrar == false) {
    porConsola(dato1, dato2);
  } else {
    porPantalla(dato1, dato2);
  }
}

calcular(1, 3);
calcular(5, 7, true);
