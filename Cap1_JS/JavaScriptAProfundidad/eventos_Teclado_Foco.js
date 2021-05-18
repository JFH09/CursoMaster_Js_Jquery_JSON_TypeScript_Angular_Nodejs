"use strict";

var input_nombre = document.querySelector("#campo_nombre");

input_nombre.addEventListener("focus", function () {
  console.log("(focus) Estas dentro del input...");
});

input_nombre.addEventListener("blur", function () {
  console.log("(blur) Salio del input... ");
});

input_nombre.addEventListener("keydown", function () {
  console.log(
    "(KEYDOWN) Se esta pulsando la tecla",
    String.fromCharCode(event.keyCode)
  );
});

//Con el keypress me trae la letra que es, con este me la trae mayuscula

input_nombre.addEventListener("keypress", function () {
  //para cunado se presiona
  console.log(
    "(KEYPRESS) la tecla que pulso fue ...",
    String.fromCharCode(event.keyCode)
  );
});

input_nombre.addEventListener("keyup", function () {
  //para cunado se levanta de presionar
  console.log(
    "(KEYUP) la tecla que pulso fue ...",
    String.fromCharCode(event.keyCode)
  );
});

window.addEventListener("keydown", function () {
  //para cuando se pulsa
  var letra = String.fromCharCode(event.keyCode);
  console.log(
    " [keydown_ window] Estas presionando la tecla...(intenta con K _ may)",
    letra
  );
  if (letra == "K") {
    alert("Se pulso la letra k");
  }
});

window.addEventListener("keypress", function () {
  //para cuando se pulsa
  var letra = String.fromCharCode(event.keyCode);
  console.log("[keypress_ window] Estas presionando la tecla...", letra);
  if (letra == "K") {
    alert("Se pulso la letra k");
  }
});

window.addEventListener("keyup", function () {
  //para cuando se pulsa
  var letra = String.fromCharCode(event.keyCode);
  console.log(
    "[keyup_ window] Estas presionando la tecla...(intenta con K _ may)",
    letra
  );
  if (letra == "K") {
    alert("Se pulso la letra k");
  }
});
