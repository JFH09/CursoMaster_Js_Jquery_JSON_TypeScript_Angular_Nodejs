//import {Camiseta} from "./camiseta";
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicación JS cargada");
    }
    Main.prototype.getCamiseta = function () {
        return new Camiseta("rojo", "ada", "fadssa", "L", 12);
    };
    return Main;
}());
var main = new Main();
