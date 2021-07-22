function sumar(numero1 = 0, numero2 = 0) { //numero1 y numero2 son parámetros
    console.log(numero1 + numero2);
}

sumar(10, 10); // argumentos o valores reales
sumar(3, 3);
sumar(3.5, 3.5);
sumar(2);

const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();