"use strict";

var peliculas = ["La verdad duele", "La vida es bella", "Gran torino", "Cars"];
var categorias = ["Comedia", "Terror", "Accion"];

var cine = [categorias, peliculas];

console.log(cine[0][1]);

peliculas.push("Batman"); //Agregar un valor al arreglo
console.log(peliculas);

//ELIMINAR DE UN ARREGLO => Si se coloca el .pop() sin nada, se elimina la ultima pos...
peliculas.pop("Batman");
console.log(peliculas);

//CONVERTIR UN ARRAY EN UN STRING...

var peliculas_String = peliculas.join();
console.log("El array convertido en string...", peliculas_String);

//CONVERTIR UN TEXTO EN ARRAY...

var texto = "texto1, texto2, texto3";
var texto_A_array = texto.split(", "); //Coloca en lo que se separan los valores...

console.log(texto_A_array);

//ORDENAR ARREGLO...

console.log("Ordenar el arreglo => ", peliculas);

peliculas.sort(); // Organiza alfabeticamente...
console.log("Alfabeto => ", peliculas);
peliculas.reverse(); //Lo arregla, lo voltea completamente...
console.log("Al reves => ", peliculas);

//Organiza por numeros de menor a meyor...
var numeros = [23, 2, 56, 8, 10, 1, 450];

numeros.sort(function (a, b) {
  return a - b;
});
console.log("Numeros organizados de menor a mayor..." + numeros);

//BUSCAR EN ARREGLO...
/*
var busqueda = peliculas.find(function (buscarDato) {
  return buscarDato == "Cars";
});
ó 
*/

var busqueda = peliculas.find((buscarDato) => buscarDato == "Cars");
console.log("Dato encontrado...", busqueda); //Muestra el dato si esta, si no, lanza undefined

var busqueda = peliculas.findIndex((buscarDato) => buscarDato == "Cars");
console.log("Posicion del dato...", busqueda); //Muestra la posicion

var numeros = [12, 54, 88, 24, 63];

var busquedaNum = numeros.some((buscarDato) => buscarDato > 20);
console.log("Hay numeros mayores a 20?...", busquedaNum); //Muestra si se cumple alguna condicion ...
