let nombreRepositor = prompt("Por favor ingrese su nombre de repositor");
console.log("Bienvenido repositor " + nombreRepositor);

let productos = [];


class Producto { 
    constructor(nombre, precio, cantidad) { 
    this.nombre = nombre;       
    this.precio = precio;
    this.cantidad = cantidad;   
} 
}


function inicializarProductos() {
    const nombres = ["Manzana", "Pera", "Banana", "Uva"];
    const precios = [15, 20, 20, 20];
    const cantidades = [10, 50, 25, 30];

    for (let i = 0; i < nombres.length; i++) {
        productos.push(new Producto(nombres[i], precios[i], cantidades[i]));
    }
}


function buscarProducto() {
    let disponibilidad = confirm("¿Desea ver primero los productos disponibles?");

    if (disponibilidad) {
        console.log("Productos disponibles:");
        productos.forEach(producto => {
            console.log(`${producto.nombre}: Precio $${producto.precio}, Cantidad ${producto.cantidad}`);
        });
    } else {
        alert("Gracias por visitar.");
    }

    let nombreBuscado = prompt("Ingrese el nombre del producto a buscar:");
    let resultado = productos.find(producto => producto.nombre.toLowerCase() === nombreBuscado.toLowerCase());

    if (resultado) {
        alert(`Producto encontrado: ${resultado.nombre}, Precio: $${resultado.precio}, Cantidad: ${resultado.cantidad}`);
    } else {
        alert("Producto no encontrado.");
    }
}


function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));

    let producto = new Producto(nombre, precio, cantidad);
    productos.push(producto);
    alert(`Producto ${nombre} agregado correctamente.`);
    console.log(`Producto agregado: ${nombre}, Precio: $${precio}, Cantidad: ${cantidad}`);

}


function eliminarProducto() {
    let nombreEliminar = prompt("Ingrese el nombre del producto a eliminar:");
    let indice = productos.findIndex(producto => producto.nombre.toLowerCase() === nombreEliminar.toLowerCase());

    if (indice !== -1) {
        console.log(`Eliminando producto: ${productos[indice].nombre}, Precio: $${productos[indice].precio}, Cantidad: ${productos[indice].cantidad}`);
        productos.splice(indice, 1);
        alert(`Producto ${nombreEliminar} eliminado correctamente.`);
    } else {
        alert("Producto no encontrado.");
    }
}


function menu() {
    inicializarProductos(); 
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Buscar producto\n3. Eliminar un producto\n4. Salir");
        
        switch (opcion) {
            case '1':
                agregarProducto();
                break;
            case '2':
                buscarProducto();
                break;
            case '3':
                eliminarProducto();
                break;
            case '4':
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción no válida, por favor intente nuevamente.");
        }
    } while (opcion !== '4');
}


menu();
