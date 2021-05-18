"use strict";

var numero = 44;
var numero_Falso = "44";
var numero_Flotante = "44.2";

//convertir de un dato a otro...
console.log("Convertir de un tipo de dato a otro...", ": ) ");
console.log(numero_Falso + 7); // 447 es el resultado...
console.log(Number(numero_Falso) + 1); // 45 es el resultado...
console.log(parseInt(numero_Falso) + 1); // 45 pero lo comvierte en entero...
console.log(parseFloat(numero_Falso) + 1); // 45.0 es el resultado, lo convierte en flotante...??? no sirve mucho jaja
console.log(parseInt(numero_Flotante) + 1); // 45
console.log(String(numero) + 1); // 441
console.log(typeof numero.toString());

//TIPO DE DATOS
console.log("Saber tipo de dato...");
console.log("Tipo de dato: " + typeof numero); //El resultado es el tipo de dato...

var hasta = 100;

for (var i = 100; i > 0; i--) {
  console.log("Es 100?", i);
  //debugger;
}

//BREAK
console.log("BREAK...");
console.log("Hasta es igual a => s", hasta);
while (hasta != 200) {
  console.log("hasta va en el " + hasta);
  hasta++;
  if (hasta == 142) {
    console.log("el 142 es primero que el 200, tuvimos que parar por eso...");
    break;
  }
}
