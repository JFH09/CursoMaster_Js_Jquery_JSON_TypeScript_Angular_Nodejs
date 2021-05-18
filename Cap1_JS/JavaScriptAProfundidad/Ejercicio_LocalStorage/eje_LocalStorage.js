"use strict";

var formulario = document.querySelector("#formulario_Pelicula");
var botonAgregar = document.querySelector("#submit");
var botonEliminarInformacion = document.querySelector("#eliminar_Informacion");

botonEliminarInformacion.addEventListener("click", () => {
  var info_Eliminar = document.querySelector("#info_Eliminar").value;
  var eliminar = "informacion Usuario " + info_Eliminar;

  console.log("ELIMINAR  = > ", eliminar);
  localStorage.removeItem(eliminar);
});

formulario.addEventListener("submit", () => {
  console.log("fue submit...");

  var nombre = document.querySelector("#nombre");
  var apellido = document.querySelector("#apellido");
  var edad = document.querySelector("#edad");
  var pelicula = document.querySelector("#pelicula");

  var informacion_Pelicula = {
    nombre: nombre.value,
    apellido: apellido.value,
    edad: edad.value,
    pelicula: pelicula.value,
  };
  console.log("La informacion ingresada es: ", informacion_Pelicula);

  var informacion_StringJSON = JSON.stringify(informacion_Pelicula);
  localStorage.setItem(
    "informacion Usuario " + nombre.value,
    informacion_StringJSON
  );

  if (nombre != null && apellido != null && edad != null && pelicula != null) {
    nombre.value = null;
    apellido.value = null;
    edad.value = null;
    pelicula.value = null;
  }
});

for (var i in localStorage) {
  var elemento_N = localStorage[i];
  var nuevoElementoJSON = JSON.parse(elemento_N);
  var nombre_usu = nuevoElementoJSON.nombre;
  var pelicula_usu = nuevoElementoJSON.pelicula;
  var listaG = document.querySelector("#lista_Peliculas");
  var elemento_lista = document.createElement("li");
  console.log(nombre_usu, pelicula_usu);
  elemento_lista.append(
    nombre_usu,
    " -> Pelicula gregada por = ",
    pelicula_usu
  );
  listaG.append(elemento_lista);
}
