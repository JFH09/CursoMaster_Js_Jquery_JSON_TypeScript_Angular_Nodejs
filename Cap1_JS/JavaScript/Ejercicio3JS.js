"use strict";

var numero1 = parseInt(prompt("Ingrese el dato 1"));
var numero2 = parseInt(prompt("Ingrese el dato 2"));

console.log("Los numeros impares que estan entre estos dos numeros son :");
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
  "Los numeros impares entre " + menor + "y " + mayor + "estos numeros son : "
);

document.write(
  "<h1> Los numeros impares entre " + menor + " Y " + mayor + " son : </h1>"
);
while (menor < mayor - 1) {
  menor++;
  if (menor % 2 != 0) {
    console.log("Es impar el numero es = " + menor);
    document.write(menor + "</br>");
    
  }
}
