//clase objetos con json
var bicicleta = {
  //se puede cambiar la propiedad del mismo json , es como hacer una clase bicicleta "poo en js"
  color: "rojo",
  modelo: "BMX",
  frenos: "De Disco",
  velocidadMaxima: "60km",
  cambiaColor: function (nuevo_color) {
    //viendolo de esa manera esta seria el metodo de la clase que modf/hace cosas con la info en ella
    //bicicleta.color = nuevo_color
    this.color = nuevo_color;
    console.log(this);
  },
};

console.log(bicicleta);

bicicleta.cambiaColor("Azul");
