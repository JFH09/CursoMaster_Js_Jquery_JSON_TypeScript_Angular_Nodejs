"use strict";

var nombres = [
  "Julian",
  "Juan Lopez",
  "Manolo Garcia",
  "Pepito perez",
  54,
  true,
];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

document.write("<h1>Recorriendo Array y colocandolo en lista...</h1>");
document.write("<ul>");
for (var i = 0; i < lenguajes.length; i++) {
  document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");

//FOREACH... !!!!!!

document.write("<h1>Recorriendo Array y con forEach</h1>");
document.write("<ul>");
lenguajes.forEach((elemento, posicion, datosDelArreglo) => {
  console.log("Datos del arreglo: " + datosDelArreglo);
  document.write("<li>" + " Pos : " + posicion + " - " + elemento + "</li>");
});
document.write("</ul>");

//FOR IN
document.write("<h1>Recorriendo Array y con forIn</h1>");
document.write("<ul>");

for (var i in lenguajes) {
  document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");
