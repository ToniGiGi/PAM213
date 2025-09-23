const productos = [
    { nombre: "laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 },
];


const PF = productos.filter(producto => producto.precio > 1000);

const AF = PF.map(producto => producto.nombre);

console.log(productos);
console.log("-----------------------------------");
console.log(AF);