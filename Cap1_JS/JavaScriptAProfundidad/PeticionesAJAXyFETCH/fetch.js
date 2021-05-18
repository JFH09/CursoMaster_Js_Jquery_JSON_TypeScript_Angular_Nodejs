"use strict ";
var mostrarListadoUsuarios = document.querySelector("#listadoUsuarios");
//var listaUsuarios = [];

obtenerUsuarios()
  .then((datos) => datos.json()) //Se capturan los datos, se combierten en un json (Obj de javaScript)
  .then((usuarios) => {
    //en la variable datos ya se tiene guardados
    //listaUsuarios = usuarios.data; //Se podrian guardar eun arreglo la variable usuarios y enviarla a la funcion

    listadoUsuarios(usuarios.data);
    return otraPromesaTimeOut();
  })
  .then((datosOtraPromesa) => {
    console.log(datosOtraPromesa);
    var divPromesaTimeOut = document.querySelector("#promesaTimeOut");
    var h3PromesaTimeOut = document.createElement("h3");

    h3PromesaTimeOut.innerHTML = datosOtraPromesa;
    divPromesaTimeOut.appendChild(h3PromesaTimeOut);
    return obtenerUsuarioJanet();
  })
  .then((janet) => janet.json())
  .then((usuarioJanet) => {
    mostrarUsuJanet(usuarioJanet.data);

    return obtenerHaciendoMasEnElProgramaUnaPromesa();
  })
  .then((datosNuevaPromesa) => {
    //Los datos se pueden manipular desde aqui ...
    console.log(datosNuevaPromesa);
    var div_persona = document.querySelector("#usuarioPersona");
    var persona = document.createElement("h3");
    persona.innerHTML = "Info persona : " + datosNuevaPromesa;
    div_persona.appendChild(persona);
    //-------
    var datosaJSON = JSON.parse(datosNuevaPromesa);
    console.log(
      "Aqui se pone una funcion y se puede manipular el JSON ...(nombre ->)",
      datosaJSON.nombre
    );
  })
  .catch((error) => {
    //Para capturar el error
    console.log(error);
    alert("Ocurrio un error en las peticiones!!! janet?", error);
  });

function obtenerUsuarioJanet() {
  return fetch("https://reqres.in/api/users/2");
}
function obtenerUsuarios() {
  return fetch("https://reqres.in/api/users?page=2");
}

function otraPromesaTimeOut() {
  var otraPromesa = {
    nombre: "Otra Promesa",
    tipo: "promesa con setTimeOut",
    cuanto: "tres segundos",
  };

  return new Promise((resolve, reject) => {
    var otraPromesaString = "";
    setTimeout(function () {
      otraPromesaString = JSON.stringify(otraPromesa);

      if (typeof otraPromesaString != "string" || otraPromesaString == "") {
        return reject("Error no funciono");
      }

      return resolve(otraPromesaString);
    }, 3000);
  });
}

function obtenerHaciendoMasEnElProgramaUnaPromesa() {
  var persona = {
    nombre: "Joselito",
    apellido: "Perez",
    edad: 32,
  };

  return new Promise((resolve, reject) => {
    //Forma de crear una nueva promesa...
    var stringPersona = JSON.stringify(persona);

    if (typeof stringPersona != "string") {
      return reject("error no se pudo"); //Si es diferente a tipo string lance el error...
    }
    return resolve(stringPersona);
  });
}
function mostrarUsuJanet(usuarioJanet) {
  console.log(usuarioJanet);
  var spanJanet = document.querySelector("#cargadoDatosJanet");
  var divJanet = document.querySelector("#usuarioJanet");
  var nombreJanet = document.createElement("h3");
  var avatarimg = document.createElement("img");

  nombreJanet.innerHTML =
    "Nombre: " +
    usuarioJanet.first_name +
    "/ Apellido:  " +
    usuarioJanet.last_name +
    "/ Email: " +
    usuarioJanet.email;

  divJanet.appendChild(nombreJanet);
  avatarimg.src = usuarioJanet.avatar;
  avatarimg.width = "100";
  divJanet.appendChild(avatarimg);

  spanJanet.style.display = "none";
}

function listadoUsuarios(listaUsuarios) {
  listaUsuarios.map((usuario, i) => {
    let nombre = document.createElement("h3");

    nombre.innerHTML = i + ". " + usuario.first_name + " " + usuario.last_name;

    mostrarListadoUsuarios.appendChild(nombre);
    var cargadoDatos = document.querySelector("#cargadoDatos");
    cargadoDatos.style.display = "none";
  });
}
