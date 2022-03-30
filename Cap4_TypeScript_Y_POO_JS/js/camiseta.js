var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decoradores -> no lo entendi bien  (Creo que son para agregar funcionalidades a una clase o algo asi...)
function estampar(logo) {
    return function (target) {
        // Aqui el target.prototype.(Nombre de lo que se le va agregar) = function...
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de : " + logo);
        };
    };
}
// !implementar el decorador
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
    //Si se le colocan metodos con diferente nombre a los que estan el la interface 
    //- no servira porque es una obligacion que se llamen de la forma que se coloco ahi...
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar("Esto es el logo de la estampa :O") //No se termina con ;
        // Clase (modelo del objeto)
    ], Camiseta);
    return Camiseta;
}());
// !Herencia 
// Clase Hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
// *ASI ES COMO SE USA DESDE EL MISMO archivo
var n_camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 10);
n_camiseta.setColor("Nuevo_Color");
//!agregando/llamando el metodo del decorador (estampacion)
n_camiseta.estampacion(); //aparece error por que la compatibilidad con los decoradore es experimental y toca cambiar eso en las reglas de un archivo...
console.log(n_camiseta);
//*Creando un objeto de clase hija Sudadera
var sudadera_nike = new Sudadera("Negro", "Manga Larga", "Nike", "M", 23);
sudadera_nike.setCapucha(true);
console.log(sudadera_nike);
sudadera_nike.setColor("Gris");
console.log(sudadera_nike);
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
