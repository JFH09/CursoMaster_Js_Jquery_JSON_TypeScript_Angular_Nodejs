//import {Camiseta} from "./camiseta";
class Main{

    constructor(){ // Es el que se ejecuta de primeras
        console.log("Aplicación JS cargada");
    }

    getCamiseta(){
        return new Camiseta("rojo", "ada", "fadssa", "L", 12);
    }
}
var main = new Main();