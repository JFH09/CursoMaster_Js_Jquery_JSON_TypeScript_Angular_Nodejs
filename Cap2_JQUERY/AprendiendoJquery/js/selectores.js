$(document).ready(function () {
  //$ (selector) al document... ($= jquery) y luego un metodo..
  console.log("Jquery instalado !!!");

  //Selector ID

  var IDrojo = $("#rojo");
  console.log(IDrojo);

  var rojo = $("#rojo").css("background", "red").css("color", "white");

  console.log(rojo);

  var amarillo = $("#amarillo")
    .css("background", "yellow")
    .css("color", "gray");

  var verde = $("#verde").css("background", "green").css("color", "blue");

  //Selector de clases...(recordar q son para un conjunto de etiquetas que se les quiere hacer algo en comun) en cambio los id son para un id unico

  var miClase = $(".zebra").css("padding", "60px");
  console.log("Clases...", miClase);
  //Para escoger uno en concreto...
  console.log("Para escoger una clase-> ", miClase[1]);
  console.log("otra forma para escoger una clase...", miClase.eq(1));

  miClase.css("border", "5px dashed black");

  var otraClase = $(".otraClase").click(function () {
    //PARA CAPTURAR UN CLICK !!!
    $(this).css("border", "5px dashed black");
  });

  //SELECTOR DE ETIQUETAS

  var parrafos = $("p").css("cursor", "pointer");
  console.log(parrafos);
  parrafos.click(function () {
    var este = $(this);
    if (!este.hasClass("grande")) {
      //hasClass es como para cuando se quiere saber si se capturo esa clase o si existe esa clase en ese elemento..
      //Si este no tiene la clase grande haga...
      este.addClass("grande"); //agrege la clase
    } else {
      //de lo contrario o de otro modo , de otro caso...
      este.removeClass("zebra"); //remuevale la clase..
    }
  });

  //seleccionador de atributo
  $('[title= "Google"]').css("background", "#ccc");
  $('[title= "Facebook"]').css("background", "blue").css("color", "white");

  //Otros...

  $("p, a").addClass("margenSuperior"); //Para elegir varias etiquetas a la vez

  var busqueda = $("#caja").find(".resaltado"); //para buscar elementos dentro del dom
  console.log("busqueda de elementos con cierta clase....", busqueda);

  var buscarEtiqResaltado = $(".elemento1") //en este se toma algo que no esta dentro del ul
    .parent() //sale del ul
    .parent() //Se planta en el div
    .find(".resaltado"); //parent() es para devolverse de donde se esta...
  console.log(
    "cuando se necesita algo de cierta etiqueta estando en otra...",
    buscarEtiqResaltado
  );
});
