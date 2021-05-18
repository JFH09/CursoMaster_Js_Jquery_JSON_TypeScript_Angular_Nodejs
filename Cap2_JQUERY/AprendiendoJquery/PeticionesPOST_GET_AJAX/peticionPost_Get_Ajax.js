$(document).ready(function () {
  console.log("Cargo bien...");

  //LOAD- SE PUEDE USAR COMO PARA HACER UN TIPO DE PETICIONES... A UNA PAGINA?
  //$("#datos").load("https://reqres.in/"); //Load

  //GET Y POST
  //https://reqres.in/api/users?page=2, se puede pasar un segundo parametro si se quier
  $.get("https://reqres.in/api/users", { page: 2 }, function (respuesta) {
    console.log(respuesta);
    respuesta.data.forEach((elemento, i) => {
      $("#datosGet").append(
        "<p>" + elemento.email + " / " + elemento.first_name + "</p>"
      );
    });
    "#datosGet".append(respuesta.data[0]);
  });

  /*
  var nuevoUsuario = {
    nombre: "Julian",
    email: "julian@gmail.com",
  };
  $.post("https://reqres.in/api/users", nuevoUsuario, function (respuesta) {
    console.log(respuesta); //En caso de que sea correcto el post...lo mismo para arriba..
  });*/

  $("#btnGuardar").click(function () {
    var nombreUsuario = $("#nuevoUsuNombre").val();
    var emailUsuario = $("#nuevoUsuEmail").val();
    var nuevoUsuario = {
      nombre: nombreUsuario,
      email: emailUsuario,
    };
    var nombre222 = document.querySelector("#nuevoUsuNombre").value;
    console.log("js, valor ingreso...", nombre222);
    console.log("Se ingreso...", nuevoUsuario);

    $.post("https://reqres.in/api/users", nuevoUsuario, function (respuesta) {
      console.log(respuesta);
    });
  });

  $("#formulario2").submit(function (e) {
    e.preventDefault();
    var nombrenuevoForm = $("input[name='nombre2']").val();
    var emailnuevoForm = $("input[name='email2']").val();
    var usuarioForm = {
      nombre: nombrenuevoForm,
      email: emailnuevoForm,
    };

    console.log("Fomulario2", usuarioForm);

    $.post($(this).attr("action"), usuarioForm, function (respuesta) {
      console.log("RESP", respuesta);
    }).done(function () {
      alert("Usuario añadido correctamente...");
    });

    //PETICIONES AJAX

    $.ajax({
      type: "POST",
      url: $(this).attr("action"),
      data: usuarioForm,
      beforeSend: function () {
        console.log("Enviando Usuario CON AJAX...");
      },
      success: function (resouestaCorrecta) {
        console.log("Satisfacorio AJAX", resouestaCorrecta);
      },
      error: function (respuestaError) {
        console.log("ocurrio un error", respuestaError);
      },
      timeout: 5000, //Tiempo que tarde como max la peticion...Si tarda mas, entra al error...
    });
    return false;
  });
});
