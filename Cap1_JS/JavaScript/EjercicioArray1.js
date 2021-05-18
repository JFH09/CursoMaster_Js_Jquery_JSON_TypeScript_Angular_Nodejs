"use strict";

var numeroIngresado = 0;
var arregloNumeros = [];
var cont = 0;

function buscarDatoUsu(arregloNumeros) {
  var buscarDatoUsu = parseInt(
    prompt("Que dato quieres buscar en el arreglo?")
  );
  console.log("El dato a buscar es = > " + buscarDatoUsu);
  document.write("<h2>El dato a buscar es : " + buscarDatoUsu + "</h2>");
  var encontrado = false;
  var datoBuscado = arregloNumeros.find((dato) => dato == buscarDatoUsu);

  if (datoBuscado == buscarDatoUsu) {
    encontrado = true;
  }
  console.log("El dato se encontro? ", encontrado);
  document.write("<h3>El dato se encontro? " + encontrado + "</h3>");
  console.log(
    "El arreglo esta en la posicion : ",
    arregloNumeros.findIndex((dato) => dato == buscarDatoUsu)
  );
  document.write(
    "<h3> Posicion del dato ingresado: " +
      arregloNumeros.findIndex((dato) => dato == buscarDatoUsu) +
      "</h3>"
  );
}
function tamanoArreglo(arregloNumeros) {
  document.write(
    "<h1>El arreglo tiene un tamaño de : " + arregloNumeros.length + "</h1>"
  );
  console.log("El arreglo tiene un tamaño de : " + arregloNumeros.length);
}

function voltearArreglo() {
  arregloNumeros.reverse();
  console.log("El arreglo al reves es : ");
  document.write("<h1>El aarreglo al reves es : </h1>");
  for (var i in arregloNumeros) {
    document.write("<h3>" + arregloNumeros[i] + "</h3>");
    console.log(arregloNumeros[i]);
  }
}

function ordenarArreglo(arregloNumeros) {
  var arreglado = arregloNumeros.sort(function (a, b) {
    return a - b;
  });
  document.write("<h1>El arreglo ordenado es:</h1>");
  console.log("El arreglo ordenado es:");
  for (var i in arreglado) {
    document.write("<h3>" + arreglado[i] + "</h3>");
    console.log(arreglado[i]);
  }
}

function mostrarArreglo() {
  document.write("<h1>Los datos que se ingresaron son : </h1>");
  console.log("Los datos que se ingresaron son :");

  for (var i in arregloNumeros) {
    document.write("<h3>" + arregloNumeros[i] + "</h3>");
    console.log(arregloNumeros[i]);
  }
}

function pedirNumeros(arregloNumeros) {
  do {
    numeroIngresado = parseInt(prompt("Ingresa un numero"));
    arregloNumeros.push(numeroIngresado);
    cont++;
  } while (cont < 6);
}
pedirNumeros(arregloNumeros);
mostrarArreglo(arregloNumeros);
ordenarArreglo(arregloNumeros);
voltearArreglo(arregloNumeros);
tamanoArreglo(arregloNumeros);
buscarDatoUsu(arregloNumeros);
