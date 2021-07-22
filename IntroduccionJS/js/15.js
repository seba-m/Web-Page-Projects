const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Monitor 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

//foreach
meses.forEach(function(mes) {
    if (mes == 'Marzo') {
        console.log("Marzo si existe");
    }
});

//Includes

let resultado = meses.includes('Marzo');

//some ideal para arreglo de objetos

resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular';
});

//Reduce

resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0);

//filter
resultado = carrito.filter(function(producto) {
    return producto.precio < 400;
});

resultado = carrito.filter(function(producto) {
    return producto.nombre !== 'Celular';
});


console.log(resultado);