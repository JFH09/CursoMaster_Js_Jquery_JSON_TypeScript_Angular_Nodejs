"use strict";

var numero = 444;
var texto1 = "Bienvenido al curso de javaScript curso de este man...";
var texto2 = " es muy bueno...";

console.log("Transformaciones: ");
var dato = numero.toString(); //A string colocar typeof para comprobar el tipo de variable
console.log(dato);
dato = texto1.toLocaleLowerCase(); //se coloca en minuscaulas
console.log(dato);
dato = texto2.toUpperCase(); //En mayusculas...
console.log(dato);

console.log("Calcular la longitud de algo...");

//Calcular longitud de algo...
var nombre = "julian florez";
console.log(nombre.length);

console.log("Para concatenar...");
//CONCATENAR...
var textoTotal = texto1 + " y " + nombre; // El que siempre se ha usado...
console.log(textoTotal);
var textoTotal2 = texto2.concat(" & " + nombre);
console.log(textoTotal2);

//BUSQUEDA EN TEXTOS ....
console.log("Buscar en textos");

var buscar = "";

buscar = texto1.indexOf("curso");
console.log(buscar); //Lanza la posicion apartir de donde se encuentra la palabra

buscar = texto1.lastIndexOf("curso");
console.log(buscar);

buscar = texto1.search("curso");
console.log(buscar);

buscar = texto1.match("curso"); // Es mas completo,devuelve array(Objeto creo que es)con diversa informacion
console.log(buscar);

buscar = texto1.match(/curso/g); // Mas especifico ...
console.log(buscar);

buscar = texto1.substr(14, 17); // Saca las palabras en las posiciones en ese rango...
console.log("En el rango estan... / ", buscar);

buscar = texto1.charAt(18); // Saca la letra de esa posicion
console.log(buscar);

buscar = texto1.startsWith("Bienv"); //Busca una palabra al comienzo
console.log("Existe la palabra al comienzo? ", buscar);

buscar = texto1.endsWith("este man"); //Busca una palabra al final
console.log("Existe la palabra al final? ", buscar);

buscar = texto1.includes("java"); //Busca en todo ..
console.log("Existe la palabra? ", buscar);

buscar = texto1.replace("java", "Cambio!!"); //Cambiar la palabra que busco por otra cosa...
console.log("Se cambio la palabra = ", buscar);

buscar = texto1.slice(14); // elimino la parte antes de la pos 14..
console.log("se elimino la parte antes de la pos 14... ", buscar);

buscar = texto1.slice(14, 25); // elimino la parte en un rango
console.log("se dejo la parte en el rango que se coloco ", buscar);

buscar = texto1.split(" "); // coloca la frase en un arreglo... si se quita el espacio, se coloca todo en un arreglo
console.log("se coloco en un arreglo...", buscar);

buscar = texto1.trim(); // Se quitan los espacios de al comienzo y al final de la frase
console.log("se eliminaron los espacios", buscar);
