"use strict";

//Document object model

var caja = document.getElementById("micaja");
var cajaHTML = document.getElementById("micaja").innerHTML;
console.log(caja);
console.log(cajaHTML);

caja.innerHTML = "Cambiando el texto del html";
caja.style.background = "gray";
caja.style.padding = "20px";

//queryselector.. para (Debe ser unico)id = # / para class = . / din nada el nombre de la etiqueta...

var otraCaja = document.querySelector("#otraCaja").innerHTML;
console.log("La otra caja tiene..." + otraCaja);

var todosLosDivs = document.getElementsByTagName("div");

var textoOtraCajaNueva2 = todosLosDivs[3].innerHTML; //Ó .textContent
console.log("Cuarto div contiene el texto : " + textoOtraCajaNueva2);
//Otro texto para el cuarto div

var cambioContenidoOtraCajaNueva2 = (todosLosDivs[3].innerHTML =
  "Otro texto para el cuarto div :0");

//Se va a mostrar todos los divs en la etiqueta section de la pagina
console.log(
  "Se muestran todos los divs que contiene la pagina en la etiqueta section"
);
var seccion = document.querySelector("#miseccion");

for (var i in todosLosDivs) {
  //RECORDAR QUE textContent = a innerHTML :)
  if (typeof todosLosDivs[i].textContent == "string") {
    var parrafo = document.createElement("li"); //Se puede colocar cualquier tipo, p, h1, h2, ul...
    var texto = document.createTextNode(todosLosDivs[i].textContent);

    parrafo.append(texto); //prepend es lo contrario a append
    seccion.append(parrafo); //prepend coloca la informacion ANTES de las otras etiquetas
    //que se encuentra en la "seccion", caso contrario con append, que los coloca DESPUES.
  }
}

//*****************ESTO ES IMPORTANTE SIRVE MUCHO!!!!!! LO DE ATRAS Y DELANTE innerhtml*************** */

var h2 = document.createElement("h2"); //SE CREA EL ELEMENTO QUE SE QUIERE CREAR
var subtitulo = "Este es un subtitulo agregado desde el DOM"; //SE CREA EL CONTENIDO DE ESE ELEMENTO
h2.append(subtitulo); //SE AGREGA EL CONTENIDO AL ELEMENTO
h2.style.background = "green"; //(opcional), se le agrego un estilo
h2.style.color = "white"; //estilo para la letra
seccion.append(h2); //SE AGREGA EL ELEMENTO A LA ETIQUETA DEL HTML DE LA PAGINA(en este caso a SECTION)

//OBTENCION por clase
var porClaseH3Amarillo = document.getElementsByClassName("amarillo");
var porClaseH3Rojo = document.getElementsByClassName("rojo");
porClaseH3Rojo[0].style.background = "red";

for (var i in porClaseH3Amarillo) {
  if (porClaseH3Amarillo[i].className == "amarillo") {
    porClaseH3Amarillo[i].style.background = "yellow";
  }
}

//QuerySelector...

var porQuerySelectorID = document.querySelector("#titulo");
console.log(porQuerySelectorID);
//Si se usa el queryselector para una clase, no devuelte un array como getClassName...solo trae uno
var porQuerySelectorClase = document.querySelector(".amarillo"); //que es el ejemplo de arriba con getClassName
console.log(porQuerySelectorClase); //Aunque existe querySelectorAll...PARA OBTENER VARIOS ELEMENTOS.
