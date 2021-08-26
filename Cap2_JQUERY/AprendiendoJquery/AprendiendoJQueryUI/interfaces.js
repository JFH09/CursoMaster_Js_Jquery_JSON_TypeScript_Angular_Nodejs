$(document).ready(function () {
  console.log("Esta cargado...");

  $(".elemento").draggable(); //MOVER ELEMENTOS LIBREMENTE ...

  //Redimensionar
  $(".elemento").resizable(); // Se necesitan los links de la libreria de jquery ui

  //Seleccionar elementos

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! solo se puede dejar uno activo el por eso se comenta...
  //$(".lista-seleccionable").selectable();
  $(".lista-seleccionable").sortable({
    update: function (event, ui) {
      console.log("Ha cambiado la lista...");
    },
  });

  //DROP
  $("#elemento-movido").draggable();
  $("#area").droppable({
    drop: function () {
      console.log("Has soltado algo dentro del area...");
    },
  });
});
