//Funciones y tipado fuerte
//en realidad es una funcion como normalmente se conoce, lo diferente es que se puede => si se quiere o no
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "El numero es => " + numero;
}
console.log(getNumero(55));
