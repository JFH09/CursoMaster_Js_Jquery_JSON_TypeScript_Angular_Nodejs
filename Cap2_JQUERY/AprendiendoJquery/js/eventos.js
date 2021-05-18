$(document).ready(function () {
  console.log("funciona correctamente...");

  //MouseOver y MouseOut
  var caja = $("#caja");

  /*
  caja.mouseover(function () {
    $(this).css("background", "red");
  });

  caja.mouseout(function () {
    $(this).css("background", "yellow");
  });
*/
  //Hover

  function cambiaVerde() {
    $(this).css("background", "green");
  }

  function cambiaGris() {
    $(this).css("background", "gray");
  }

  caja.hover(cambiaVerde, cambiaGris); //se se pone encima se ejecuta el verde, cuando se sale, el gris...

  //Click y DOBLE CLICK

  caja.click(function () {
    $(this).css("background", "blue").css("color", "white");
  });

  //DOBLE CLICK-----dblclick
  caja.dblclick(function () {
    $(this).css("background", "pink").css("color", "black");
  });

  // Focus y blur
  var inputNombre = $("#nombre");
  var datos = $("#datos");

  inputNombre.focus(function () {
    //Cuando se da click en algo como foco...
    $(this).css("border", "2px solid green");
  });

  inputNombre.blur(function () {
    //Cuando se sale del foco(Cuando se da click fuera)
    $(this).css("border", "1px solid black");
    var textoInput = $(this).val();
    datos.text(textoInput).show();
  });

  //Mousedown y mouseup
  datos.mousedown(function () {
    $(this).css("border-color", "red"); //cuando se mantiene el click del mause en "datos"
  });

  datos.mouseup(function () {
    //cuando se levanta el click del mause en "datos"
    $(this).css("border-color", "purple");
  });

  //Mousemove -> CAPTURA EL MOVIMIENTO DEL MAUSE...
  $(document).mousemove(function () {
    $("body").css("cursor", "none");
    console.log("En X -> " + event.clientX);
    console.log("En Y -> " + event.clientY);

    $("#sigueme").css("left", event.clientX).css("top", event.clientY);
  });
});
