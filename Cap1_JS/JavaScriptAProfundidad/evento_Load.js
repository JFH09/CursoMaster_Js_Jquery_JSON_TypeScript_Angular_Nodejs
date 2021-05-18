"use strict";

window.addEventListener("load", () => {
  var texto =
    " / Se agrega: Es para que el script se cargue depues de que se ejecute todo el html, (ya no es necesario cargarlos al final del body)";

  console.log(texto.toUpperCase());
  var titulo = document.getElementById("titulo");
  titulo.style.background = "gray";
  titulo.style.color = "white";
  titulo.append(texto);
  //Es para que no se tenga problemas al cargar los archivos en el head, y que no se llamen al final del body
});
