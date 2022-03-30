//Interface - son como obligaciones que se le colocan a una clase para que se cumpla
interface CamisetaBase {
    setColor(color);
    getColor();
}

//Decoradores -> no lo entendi bien  (Creo que son para agregar funcionalidades a una clase o algo asi...)
function estampar(logo: string){
    return function(target: Function){
        // Aqui el target.prototype.(Nombre de lo que se le va agregar) = function...
        target.prototype.estampacion = function():void {
            console.log("Camiseta estampada con el logo de : " + logo);
        }
    }
}

// !implementar el decorador
@estampar("Esto es el logo de la estampa :O") //No se termina con ;

// Clase (modelo del objeto)
class Camiseta  implements CamisetaBase{  //aparece error por que la compatibilidad con los decoradore es experimental y toca cambiar eso en las reglas de un archivo...
    //Propiedades (caracteristicas del objeto)

    private color: string; // si coloco las propiedades privadas solo las podria acceder desde dentro de la clase (camiseta {})
    private modelo: string; // si estan publicas se puede hacer directamente el setteo de las propiedades despuesd del fin de 
    private marca: string; // la clase para hacerlo con las propiedades privadas se hace apartor de un metodo...
    private talla: string;
    private precio: number;

    // Metodos (funciones o acciones del objeto)
    // El constructor sirve para poder darle unos valores iniciales a los parametros...
    constructor (color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    //Si se le colocan metodos con diferente nombre a los que estan el la interface 
    //- no servira porque es una obligacion que se llamen de la forma que se coloco ahi...
    public setColor (color){  
        this.color = color;
    }

    public getColor (){
        return this.color;
    }
}

// !Herencia 
// Clase Hija

class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha() :boolean{ //:boolean -> Devuelve un boolean
        return this.capucha;
    }
}




// *ASI ES COMO SE USA DESDE EL MISMO archivo

var n_camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 10);
n_camiseta.setColor("Nuevo_Color");
//!agregando/llamando el metodo del decorador (estampacion)
n_camiseta.estampacion(); //aparece error por que la compatibilidad con los decoradore es experimental y toca cambiar eso en las reglas de un archivo...
console.log(n_camiseta);

//*Creando un objeto de clase hija Sudadera

var sudadera_nike = new Sudadera("Negro","Manga Larga","Nike","M",23);
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