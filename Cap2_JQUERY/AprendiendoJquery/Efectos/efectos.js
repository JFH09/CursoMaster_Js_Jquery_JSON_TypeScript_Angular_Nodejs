$(document).ready(function () {
  console.log("Cargo...");

  var mostrarDiv = $("#mostrarDiv");
  var botonMostrar = $("#mostrar");
  var botonOcultar = $("#ocultar");

  botonOcultar.show();
  botonMostrar.hide();
  botonMostrar.click(function () {
    $(this).hide();
    botonOcultar.show();
    mostrarDiv.show("normal");
  });

  botonOcultar.click(function () {
    $(this).hide();
    botonMostrar.show("");
    mostrarDiv.hide("normal");
  });
  var mostrarDiv2 = $("#mostrarDiv2");
  var botonMostrar2 = $("#mostrar2");
  var botonOcultar2 = $("#ocultar2");

  botonOcultar2.show();
  botonMostrar2.hide();
  botonMostrar2.click(function () {
    $(this).hide();
    botonOcultar2.show();
    mostrarDiv2.fadeIn("normal");
  });

  botonOcultar2.click(function () {
    $(this).hide();
    botonMostrar2.show("");
    mostrarDiv2.fadeOut("normal");
  });

  var mostrarDiv3 = $("#mostrarDiv3");
  var botonMostrar3 = $("#mostrar3");
  var botonOcultar3 = $("#ocultar3");
  //la diferencia con el de arriba es la opacidad que tienen 1 como max 0 como min
  botonOcultar3.show();
  botonMostrar3.hide();
  botonMostrar3.click(function () {
    $(this).hide();
    botonOcultar3.show();
    mostrarDiv3.fadeTo("slow", 0.8);
  });

  botonOcultar3.click(function () {
    $(this).hide();
    botonMostrar3.show("");
    mostrarDiv3.fadeTo("slow", 0.2);
  });

  var mostraryOcultarDiv = $("#mostraryOcultarDiv");
  var botonMostraryOcultar = $("#mostraryOcultar");

  botonMostraryOcultar.click(function () {
    mostraryOcultarDiv.toggle("fast");
  });

  var mostraryOcultarDiv2 = $("#mostraryOcultarDiv2");
  var botonMostraryOcultar2 = $("#mostraryOcultar2");

  botonMostraryOcultar2.click(function () {
    mostraryOcultarDiv2.fadeToggle("fast", function () {
      console.log("cartel Ocultado..."); //se realiza el callbback para que no se demore en realizar otra logica en este metodo...
    });
  });

  var mostraryOcultarDiv3 = $("#mostraryOcultarDiv3");
  var botonMostraryOcultar3 = $("#mostraryOcultar3");

  botonMostraryOcultar3.click(function () {
    mostraryOcultarDiv3.slideToggle("fast"); //si es necesario 2 botones, con slideUp y slideDown
  });

  var animameDiv = $("#animameDiv");
  var botonAnimame = $("#animame");

  botonAnimame.click(function () {
    animameDiv
      .animate(
        {
          marginLeft: "500px",
          fontSize: "40px",
          height: "auto",
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "900px",
          marginTop: "60px",
        },
        "slow"
      )
      .animate(
        {
          marginLeft: "0px",
          borderRadius: "0px",
        },
        "slow"
      )
      .animate(
        {
          marginTop: "0px",
        },
        "slow"
      );
  });
});
