$(document).ready(function () {
  //slider
  if (window.location.href.indexOf("index") > -1) {
    //si en la url existe la palabra index
    $(".galeria").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200,
    });
  }

  //posts
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "prueba_titulo 1",
        date:
          "Publicado el dia " +
          moment().format("dddd") +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus risus enim, quis malesuada eros ultricies nec. Morbi non ex eget augue lacinia auctor id id justo. Ut venenatis mauris eget ex pellentesque, nec tincidunt leo elementum. Quisque sit amet quam malesuada, fringilla orci nec, elementum velit.",
      },
      {
        title: "prueba_titulo 2",
        date: moment().format("MMMM do YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus risus enim, quis malesuada eros ultricies nec. Morbi non ex eget augue lacinia auctor id id justo. Ut venenatis mauris eget ex pellentesque, nec tincidunt leo elementum. Quisque sit amet quam malesuada, fringilla orci nec, elementum velit.",
      },
      {
        title: "prueba_titulo 3",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus risus enim, quis malesuada eros ultricies nec. Morbi non ex eget augue lacinia auctor id id justo. Ut venenatis mauris eget ex pellentesque, nec tincidunt leo elementum. Quisque sit amet quam malesuada, fringilla orci nec, elementum velit.",
      },
      {
        title: "prueba_titulo 4",
        date:
          "Publicado el dia " +
          moment().format("dddd") +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus risus enim, quis malesuada eros ultricies nec. Morbi non ex eget augue lacinia auctor id id justo. Ut venenatis mauris eget ex pellentesque, nec tincidunt leo elementum. Quisque sit amet quam malesuada, fringilla orci nec, elementum velit.",
      },
      {
        title: "prueba_titulo 5",
        date:
          "Publicado el dia " +
          moment().format("dddd") +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus risus enim, quis malesuada eros ultricies nec. Morbi non ex eget augue lacinia auctor id id justo. Ut venenatis mauris eget ex pellentesque, nec tincidunt leo elementum. Quisque sit amet quam malesuada, fringilla orci nec, elementum velit.",
      },
    ];

    console.log(posts);

    /* 
                <article class="post">
                    <h2>Titulo del articulo</h2>
                    <span class="date">Fecha de publicación</span>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus risus enim, quis
                        malesuada eros ultricies nec. Morbi non ex eget augue lacinia auctor id id justo. Ut venenatis
                        mauris eget ex pellentesque, nec tincidunt leo elementum. Quisque sit amet quam malesuada,
                        fringilla orci nec, elementum velit. Duis ultrices vulputate sodales. Curabitur at tortor
                        mollis, elementum metus ut, accumsan risus. Nullam pellentesque risus eget ante iaculis, a
                        tristique eros maximus. Mauris nec posuere odio. Nunc ullamcorper hendrerit nunc sed consectetur
                    </p>
                    <a href="#" class="button-more">Leer Más</a>
                </article> 
  */

    posts.forEach((item, i) => {
      var post = `
          <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>

          <p>${item.content}</p>
          <a href="#" class="button-more">Leer Más</a>
      </article> 
    `;
      console.log(post);

      $("#posts").append(post);
    });
  }
  // selector de tema
  var theme = $("#theme");
  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
  });
  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
  });
  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });

  // Scroll hacia arriba - boton

  $(".subir").click(function (e) {
    e.preventDefault(); //es para que no se redireccione como es su deber original
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  //Login falso

  $("#login form").submit(function () {
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");
    about_parrafo.html(
      "<br><hr><strong>Bienvenido, " + form_name + "</strong>"
    );
    about_parrafo.append("<a href='#' id='logout'> Cerrar Sesión</a>");

    $("#login").hide();
    $("#logout").click(function () {
      localStorage.removeItem("form_name");
      //localstorage.clear(); se borra todo lo que esta guardado
      location.reload();
    });
  }

  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }
});
