"use strict";

window.addEventListener("load", function () {
  console.log("TIMERS");

  function interval() {
    var tiempoInterval = setInterval(function () {
      var encabezado = document.querySelector("#titulo");

      if (encabezado.style.fontSize == "50px") {
        encabezado.style.fontSize = "45px";
      } else {
        encabezado.style.fontSize = "50px";
      }
      console.log("Set interval ejecutado");
    }, 300);

    return tiempoInterval;
  }

  var tiempoTimeout = setTimeout(function () {
    var encabezado = document.querySelector("#titulo");

    if (encabezado.style.background == "gray") {
      encabezado.style.background = "black";
    } else {
      encabezado.style.background = "gray";
    }
    console.log("Set timeOut se ejecuto"); //Se ejecuta una vez dado el tiempo, no es un ciclo, o bucle
  }, 2000);

  var tiempoInterval = interval();

  var detener = document.querySelector("#detener");

  detener.addEventListener("click", function () {
    clearInterval(tiempoInterval); //SE PASA LA VARIABLE PARA DETENER EL INTERVAL
    console.log("Se detuvo el interval...");
  });

  var empezarCambio = document.querySelector("#empezarCambio");
  empezarCambio.addEventListener("click", function () {
    interval(); //SE PASA LA VARIABLE PARA seguir EL INTERVAL
    console.log("Se siguio con el cambio...");
  });
});
