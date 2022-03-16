//String 
var cadena = "Es un string";
console.log(cadena);
//number
var numero = 12;
console.log(numero);
//Boleano
var verdadero_falso = true;
console.log(verdadero_falso);
// Any 
var cualquiera = "hola";
console.log(cualquiera);
cualquiera = 77;
console.log(cualquiera); //Se fueraza a que el tipado fuerte se retire y acepte cualquier valor
// Array
//se declara un array de tipo string Array<"tipo"> asi solo acepta valores de string 
var lenguajes = ["PHP", "JS", "CSS"];
console.log(lenguajes);
var lenguajes_2 = ["PHP", 1, "JS", 3, "CSS"];
console.log(lenguajes_2);
var lenguajes_3 = [1, 2, 3];
// Otra forma para declarar el array ....
var years = [12, 13, 14];
console.log(years);
var years_day = [12, "Lunes", 13, "martes", 14]; //array de lo que sea...
console.log(years_day);
//MULTIPLES TIPOS DE DATOS
var multiple = "un valor"; // de esta forma recibe uno o el otro 
console.log(multiple);
multiple = 12;
console.log(multiple); //no salta error por que acepta numeros tambien, lo que no pasaria con un bool
var con_tipo_mio = "letras o numeros";
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
if (numero1 == 12) {
    var numero1_1 = 44; //como se declara con let no cambia su valor al primero declarado como
    var numero2 = 55; // este que si se declara con var
    console.log(numero1_1, " / ", numero2); //muestra 44 y 55 
}
console.log(numero1, " /  ", numero2); //muestra 12 yy 55
