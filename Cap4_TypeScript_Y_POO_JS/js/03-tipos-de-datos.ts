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


//MULTIPLES TIPOS DE DATOS
let multiple: string | number = "un valor"; // de esta forma recibe uno o el otro 
console.log(multiple);
multiple = 12;
console.log(multiple); //no salta error por que acepta numeros tambien, lo que no pasaria con un bool


//CREAR UN TIPO DE DATO
//Con este se puede crear un tipo de dato que acepte lo que yo nececite
type letras_o_numeros = string | number;

let con_tipo_mio : letras_o_numeros = "letras o numeros";
console.log(con_tipo_mio);
con_tipo_mio = 3232;
console.log(con_tipo_mio);

// tipo Let VS Var **********
/* 
    cuando se declara con let es una variable en bloque 
    cuando se declara con var es una variable global

    EJEMPLO:
*/

var numero1 = 12;
var numero2 = 14;

if(numero1 == 12){
    let numero1 = 44;  //como se declara con let no cambia su valor al primero declarado como
    var numero2 = 55; // este que si se declara con var

    console.log(numero1, " / ",numero2); //muestra 44 y 55 
}

console.log(numero1, " /  " ,numero2) //muestra 12 yy 55