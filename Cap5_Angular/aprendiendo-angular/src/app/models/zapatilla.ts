export class Zapatilla{
    //! Angular permite ahorrar el proceso de 
    //!crear propiedades
    // public nombre: string;
    // public marca: string;
    // public color: string;
    // public precio: number;
    // public stock: boolean;
    //!y definirles el valor 
    // constructor(nombre:string, marca:string, color:string, precio:number, stock:boolean ){
    //     this.nombre = nombre;
    //     this.marca = marca;
    //     this.color = color;
    //     this.precio = precio;
    //     this.stock = stock;
    // }

    // *Esto se hace dentro del mismo constructor, definiendolas y crearlas
    constructor( //es lo mismo de arriba, se ahorra aprox la mitad del codigo
        public nombre: string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean,
    ){} 

}