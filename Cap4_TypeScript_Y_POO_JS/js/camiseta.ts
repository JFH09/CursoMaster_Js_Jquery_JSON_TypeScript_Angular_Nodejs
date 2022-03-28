// Clase (modelo del objeto)
class Camiseta{
    //Propiedades (caracteristicas del objeto)

    private color: string; // si coloco las propiedades privadas solo las podria acceder desde dentro de la clase (camiseta {})
    private modelo: string; // si estan publicas se puede hacer directamente el setteo de las propiedades despuesd del fin de 
    private marca: string; // la clase para hacerlo con las propiedades privadas se hace apartor de un metodo...
    private talla: string;
    private precio: number;

    // Metodos (funciones o acciones del objeto)
    public setColor (color){
        this.color = color;
    }

    public getColor (){
        return this.color;
    }
}

var n_camiseta = new Camiseta();

n_camiseta.setColor("Rojo");


var playera = new Camiseta();
playera.setColor("Azul")
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