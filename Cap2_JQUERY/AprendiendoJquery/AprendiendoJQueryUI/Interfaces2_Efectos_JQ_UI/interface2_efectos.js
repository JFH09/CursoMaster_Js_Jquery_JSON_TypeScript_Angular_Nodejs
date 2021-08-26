$(document).ready(function () {
  $("#mostrar").click(function () {
    $(".caja-efectos").toggle("fade");
  });

  $("#mostrar2").click(function () {
    $(".caja-efectos2").toggle("explode");
  });

  $("#mostrar3").click(function () {
    $(".caja-efectos3").toggle("blind"); //slide lo mueve de un lado a otro
    //$(".caja-efectos3").toggle("slide"); como el drop pero sin el degradado
  });

  $("#mostrar4").click(function () {
    $(".caja-efectos4").toggle("drop");
  });

  $("#mostrar5").click(function () {
    $(".caja-efectos5").toggle("fold");
  });

  $("#mostrar6").click(function () {
    $(".caja-efectos6").toggle("puff");
  });

  $("#mostrar7").click(function () {
    $(".caja-efectos7").toggle("scale");
  });

  $("#mostrar8").click(function () {
    $(".caja-efectos8").toggle("schake");
  });

  $("#mostrar9").click(function () {
    $(".caja-efectos9").toggle("shake");
  });

  $("#mostrar10").click(function () {
    $(".caja-efectos10").toggle("shake", 4000); //4000 (4 Segundos) o "slow"
  });
});
