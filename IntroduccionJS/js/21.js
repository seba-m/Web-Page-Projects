//arrow functions
const sumar = (n1, n2) => console.log(n1 + n2);
sumar(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

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
meses.forEach(mes => {
    if (mes == 'Marzo') {
        console.log("Marzo si existe");
    }
});

let resultado;

//some ideal para arreglo de objetos
resultado = carrito.some(producto => producto.nombre === 'Celular');


//Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//filter
resultado = carrito.filter(producto => producto.precio < 400);
resultado = carrito.filter(producto => producto.nombre !== 'Celular');

console.log(resultado);