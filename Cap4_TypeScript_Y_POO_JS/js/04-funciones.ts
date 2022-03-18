//Funciones y tipado fuerte

//en realidad es una funcion como normalmente se conoce, lo diferente es que se puede => si se quiere o no
function getNumero(numero:number /*se puede colocar el tipo de dato */ = 12) /*y el tipo de dato que devuelve*/:string{
    return "El numero es => " + numero;
}

console.log(getNumero(55));