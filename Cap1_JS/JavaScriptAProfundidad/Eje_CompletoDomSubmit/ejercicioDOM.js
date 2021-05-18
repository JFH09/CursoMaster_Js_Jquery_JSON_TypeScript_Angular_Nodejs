"use strict";

window.addEventListener("load", () => {
  console.log("Cargado....");

  var formulario = document.querySelector("#formulario");
  var box_dashed = document.querySelector(".dashed");

  box_dashed.style.display = "none";

  formulario.addEventListener("submit", () => {
    box_dashed.style.display = "block";
    console.log("Evento submit capturado...");

    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellido").value;
    var edad = parseInt(document.querySelector("#edad").value);
    var error_Nombre = document.querySelector("#paraError_Nombre");
    error_Nombre.style.color = "red";

    if (nombre.trim() == null || nombre.trim().length == 0) {
      //El trim es para quitar los espacios
      alert("El nombre no es valido....");
      error_Nombre.innerHTML = "El nombre no es valido";
      return false;
    } else {
      error_Nombre.style.display = "none";
    }
    if (apellido.trim() == null || apellido.trim().length == 0) {
      alert("El apellido no es valido..");
      return false;
    }

    if (edad == null || edad <= 0 || isNaN(edad)) {
      alert("la edad no es valida...");
      return false;
    }
    console.log("nombre:", nombre, "apellido:", apellido, "edad", edad);

    var datos_Usuario = [nombre, apellido, edad];

    for (var i in datos_Usuario) {
      var parrafo = document.createElement("p");
      parrafo.append(datos_Usuario[i]);
      box_dashed.append(parrafo);

      //TAMBIEN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111
      var p_nombre = document.querySelector("#p_nombre span");
      var p_apellido = document.querySelector("#p_apellido span");
      var p_edad = document.querySelector("#p_Edad span");

      p_nombre.innerHTML = nombre;
      p_apellido.innerHTML = apellido;
      p_edad.innerHTML = edad;
    }
  });
});
