"use strict";

function listadoFruta(fruta1, fruta2, ...demasFrutas) {
  console.log(fruta1);
  console.log(fruta2);
  console.log(demasFrutas); //Lo trae en un array
  console.log(demasFrutas[2]);
}

listadoFruta("manzana", "banana", "sandia", "uva", "limon?", "etc");

//Pasar elementos por SPREAD ... mandaar un array a una funcion

function listadoFruta2(fruta1, ...demasFrutas) {
  console.log(fruta1);
  console.log(demasFrutas); //Lo trae en un array
}

var arregloFrutas = ["manzana", "banana"];
listadoFruta2(arregloFrutas, "sandia", "uva", "limon?", "etc");
