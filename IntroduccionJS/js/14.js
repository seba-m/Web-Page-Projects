//arreglo o arrays

const numeros = [10, 20, 30, 40, 50];
console.log(numeros);

/*
// acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[2]);
console.log(numeros[200]);

//conocer la extension de un arreglo
console.log(meses.length);

numeros.forEach(function(numeros, i) {
    console.log(numeros + " " + i);
});*/

numeros.push(60, 70, 80); // al final del arreglo
numeros.unshift(-10, -20, -30); //al inicio del arreglo 

console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

//meses.pop(); //elimina el ultimo elemento
//meses.shift(); //elimina el primer elemento

meses.splice(2, 1); //elimina el elemento en la posicion 2

console.table(meses);

// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Julio', 'Agosto', 'Septiembre'];
console.table(nuevoArreglo);