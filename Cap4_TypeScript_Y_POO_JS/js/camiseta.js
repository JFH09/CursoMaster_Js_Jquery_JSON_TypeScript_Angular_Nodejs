// Clase (modelo del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    // Metodos (funciones o acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var n_camiseta = new Camiseta();
n_camiseta.setColor("Rojo");
var playera = new Camiseta();
playera.setColor("Azul");
console.log(n_camiseta.getColor(), playera);
/* ESTO SERVIRIA SOLO SI LAS PROPIEDADES ESTUVIERAN PUBLICAS (YA NO SERIA NECESARIO LOS METODOS DENTRO DE LA CLASE) */
// var n_camiseta = new Camiseta();
// n_camiseta.color =  "rojo";
// n_camiseta.modelo = "Manga larga";
// n_camiseta.marca = "Nike";
// n_camiseta.talla = "L";
// n_camiseta.precio = 10;
// var playera = new Camiseta();
// playera.color =  "Azul";
// playera.modelo = "Manga corta";
// playera.marca = "Under Armour";
// playera.talla = "L";
// playera.precio = 15;
// console.log(n_camiseta, playera);
