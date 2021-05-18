"use strict";

var boton = document.querySelector("#boton");
var botonEvento = document.querySelector("#boton_Evento");
var botonEvento_Mouse = document.querySelector("#boton_EventoMouse");

function cambiarColorBoton() {
  var bg = boton.style.background;

  if (bg == "green") {
    boton.style.background = "red";
  } else {
    boton.style.background = "green";
  }

  boton.style.padding = "10px";
  boton.style.border = "1px solid #ccc";
  return true;
}

function cambiarColorBoton2() {
  var bg = botonEvento.style.background;

  if (bg == "gray") {
    botonEvento.style.background = "white";
  } else {
    botonEvento.style.background = "gray";
  }

  botonEvento.style.padding = "10px";
  botonEvento.style.border = "1px solid #ccc";
  return true;
}

//Click_tambien existe el doble click
botonEvento.addEventListener("click", function () {
  cambiarColorBoton2();
});

//Mouse Over
botonEvento_Mouse.addEventListener("mouseover", function () {
  botonEvento_Mouse.style.background = "blue";
});

//Mouse Out
botonEvento_Mouse.addEventListener("mouseout", function () {
  botonEvento_Mouse.style.background = "purple";
});
