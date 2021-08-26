$(document).ready(function () {
  $("#popup").dialog();

  $("#lanzar-popup").click(function (e) {
    e.preventDefault();
    $("#popup-error").dialog();
  });
});
