// for loop
/*
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}
*/
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

for (let i = 0; i < carrito.length; i++) {
    console.log(`Nombre: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

// while loop

let i = 0; //indice

while (i < carrito.length) { //condicion

    console.log(`Nombre: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);

    i++; // incremento
}

// do while loop

let i = 100;
do {
    console.log(i);
    i++;
} while (i < 10);