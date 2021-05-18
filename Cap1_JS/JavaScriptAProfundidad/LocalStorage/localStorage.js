"use strict";

//LocalStorage

if (typeof Storage != "undefined") {
  console.log("Local storage disponible");
} else {
  console.log("No es compatible ");
}

//Añadir elemento al localstorage...var o lo que sea...EN LA MEMORIA DEL NAVEGADOR
localStorage.setItem("titulo", "Este es un titulo, julian florez"); //Mirar en application en el inspector de codigo del navegador

//Recuperar, obtener elemento o variable del localStorage
var variable = localStorage.getItem("titulo");
console.log("Recuperando de local storage -> ", variable);
var h2 = document.querySelector("#textoh2");
h2.append(variable);

var h3Otra = document.querySelector("#textoh3");

h3Otra.innerHTML = variable;

//GUARDAR OBJETO EN EL LOCAL STORAGE... (No se puede directamente al setItem)
var usuario = {
  nombre: "Pepito",
  apellido: "perez",
  edad: 34,
};

//Toca convertirlos a string...con JSON.stringify

localStorage.setItem("usuario", JSON.stringify(usuario));

//RECUPERAR OBJ DEL LOCALSTORAGE  si se trae directamente, no se puede manipular como obj sino como string

var usuarioJS = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioJS);
var salto = document.createElement("br");
h3Otra.append(
  " - Objeto desde el localStorage: -",

  " / nombre = ",
  usuarioJS.nombre,
  " / apellido =",
  usuarioJS.apellido,
  " / edad",
  usuarioJS.edad
);

//Para REMOVER informacion del localStorage
//localStorage.removeItem("usuario");
//localStorage.clear();
console.log(
  "Para quitar un item... localStorage.removeItem(",
  "usuario",
  "); "
);
console.log(
  "Para quitar eliminar toda la informacion... localStorage.clear(); "
);

var divMostrarEliminar = document.querySelector("#paraEliminar");
var primer_h4 = document.createElement("h4");
primer_h4.append(
  "Para quitar un item... localStorage.removeItem(",
  "usuario",
  "); ",
  salto,
  "Para quitar eliminar toda la informacion... localStorage.clear(); "
);
divMostrarEliminar.append(primer_h4);
