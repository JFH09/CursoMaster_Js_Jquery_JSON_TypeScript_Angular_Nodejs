"use strict";

//La funcion de callback es lo mismo que una funcion anonima pero sin el function...
"use strict";

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
  var suma = numero1 + numero2;

  sumaYmuestra(suma);
  sumaPorDos(suma);

  return suma; //No creo que sea muy necesario usarlo
}
//Solo use la variable para saber que devolvia, no es necesario usarla por que ya se imprime en las funciones anonimas
var loquedevuelvesumame = sumame(
  3,
  4,
  (datoDeSumame) => {
    console.log("El dato que envia de sumame es : " + datoDeSumame);
  },
  (datofuncionSumame) => {
    console.log("La suma de sumame por dos es : " + datofuncionSumame * 2);
  }
);

console.log("Sumame devuvle = " + loquedevuelvesumame);
