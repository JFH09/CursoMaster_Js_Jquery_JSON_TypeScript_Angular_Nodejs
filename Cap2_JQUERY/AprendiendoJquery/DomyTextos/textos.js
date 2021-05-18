$(document).ready(function () {
  obtenerTextoLinks();
  var listaLinks = $("#listaLinks");

  $("#botonAgregar")
    .removeAttr("disabled") //elimina el atributo disabled que tiene en el html...
    .click(function () {
      //con listaLinks.html -> se cambia a eso...(probar)
      listaLinks.append(
        //se agrega... es lo mismo / con prepend se agrega al principio de la lista
        //el before se lo agrega antes pero fuera de la lista del elemento seleccionado...
        //after se agrega despues pero fuera del elemento que seleccione...
        "<li><a href='" + $("#agregarLink").val() + "' >" + " </a></li>"
      );
      $("#agregarLink").val(" "); //se le agrega el valor vacio cuando ya alla hecho todo y pulsado el boton..
      obtenerTextoLinks();
    });

  console.log("Cantidad de etiq -> a", $("a").length);
});

function obtenerTextoLinks() {
  $("a").each(function (i) {
    var etiquetaAesta = $(this);
    console.log(etiquetaAesta); //Diferenta a ->
    console.log(this); //<-

    //Para obtener el texto que tiene dentro...
    var textoDea = etiquetaAesta.attr("href");
    console.log("Texto en etiqueta => ", textoDea);

    etiquetaAesta.attr("target", "_blank"); // tambien sirve para agregar algun tipo de atributo
    etiquetaAesta.removeAttr(); //para quitar el atributo que se agrego o algun otro...

    etiquetaAesta.text(textoDea);
  });
}
