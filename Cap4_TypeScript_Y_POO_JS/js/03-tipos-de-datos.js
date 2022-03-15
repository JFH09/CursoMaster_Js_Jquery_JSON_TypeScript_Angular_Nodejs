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
