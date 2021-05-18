"use strict";

//BOM Browser Object Model
function getBOM() {
  console.log("Ancho de la pantalla", window.innerWidth); //Es como la vista que tiene en el momento...
  console.log("Largo de la pantalla", window.innerHeight);
  console.log("Ancho de la pantalla", screen.width); //Accede a propidedaes donde ya tiene guardado los datos
  console.log("Largo de la pantalla", screen.height);
  console.log("Obtener la URL en la que se esta...", window.location);
}

function redurect(url) {
  window.location.href = url; //Si se le pasa una url o link, lo redirecciona.
}

function abrirVentana(url) {
  //window.open(url); //Si se le pasa un link, abre una nueva ventana o pestaña... Si se le pasan parametros...
  window.open(url, "", "width=200, height=200");
}

getBOM();
