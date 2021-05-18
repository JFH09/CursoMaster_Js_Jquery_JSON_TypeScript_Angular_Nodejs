"use strict";
//JS Object Notation

var peliculas = {
  titulo: "Cars",
  fecha: 2017,
  pais: "Estados Unidos",
};

console.log(peliculas);

peliculas.titulo = "Batman";
console.log(peliculas);
console.log(peliculas.titulo);

var peliculas2 = [
  {
    titulo: "la momia",
    fecha: 2018,
    pais: "Egipto",
  },
  {
    titulo: "Superman",
    fecha: 2019,
    pais: "Estadods Unidos",
  },
  peliculas,
];

var divListaPeliculas = document.querySelector("#listaPeliculas");

for (var i in peliculas2) {
  var h4 = document.createElement("h4");
  var textoPelicula = document.createElement("p");

  console.log(peliculas2[i]);
  console.log("Fecha => " + peliculas2[i].fecha);
  h4.append(peliculas2[i].titulo);
  textoPelicula.append(
    peliculas2[i].titulo +
      " - " +
      peliculas2[i].fecha +
      " - " +
      peliculas2[i].pais
  );
  divListaPeliculas.append(h4);
  divListaPeliculas.append(textoPelicula);
}

console.log(peliculas2[1].titulo);
