// Clase (modelo del objeto)
var Camiseta = /** @class */ (function () {
    // Metodos (funciones o acciones del objeto)
    // El constructor sirve para poder darle unos valores iniciales a los parametros...
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var n_camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 10);
n_camiseta.setColor("Nuevo_Color");
console.log(n_camiseta);
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
