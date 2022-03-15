//String 
let cadena: string = "Es un string";

console.log(cadena);

//number

let numero: number = 12;

console.log(numero);

//Boleano

let verdadero_falso : boolean = true;
console.log(verdadero_falso);

// Any 

let cualquiera: any = "hola";
console.log(cualquiera);
cualquiera  = 77;
console.log(cualquiera); //Se fueraza a que el tipado fuerte se retire y acepte cualquier valor

// Array

//se declara un array de tipo string Array<"tipo"> asi solo acepta valores de string 
var lenguajes: Array<String> = ["PHP", "JS", "CSS"]; 
console.log(lenguajes)

var lenguajes_2: Array<any> = ["PHP", 1 ,"JS", 3 , "CSS"]; 
console.log(lenguajes_2);

var lenguajes_3: Array<number> = [1,2,3];

// Otra forma para declarar el array ....
let years: number[] = [12,13,14];
console.log(years);

let years_day: any[] = [12, "Lunes",13, "martes",14]; //array de lo que sea...
console.log(years_day);
