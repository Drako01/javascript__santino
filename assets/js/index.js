// class Producto {

//     constructor(nombre, precio, stock, categoria){
//         this.nombre = nombre;
//         this.precio = parseFloat(precio);
//         this.stock = parseInt(stock);
//         this.categoria = categoria;
//         this.vendido = false;
//     }

//     sumarIva() {
//         this.precio = (this.precio * 1.21).toFixed(2);
//     }

//     vender(cantidad){
//         this.cantidad = cantidad;
//         this.vendido = true;
//         this.stock = this.stock - this.cantidad;
//         console.log("El producto " + this.nombre + " se vendio.!");
//         console.log("Se vendieron " + this.cantidad + " unidades de " + this.nombre);
//         console.log("Ahora quedan ", this.stock, " Unidades");
//     }

//     mostrarInfo(){
//         console.log(`Producto ${this.nombre}`);
//         console.log(`Precio $${this.precio}`);
//         console.log(`Stock ${this.stock} Unidades`);
//         console.log(`Categoria ${this.categoria}`);
//     }

// }


// let continuar = true;
// let contador = 1;
// let productos = {};

// while(continuar){
//     let nombre = prompt("Ingrese nombre del Producto");
//     let precio = prompt("Ingrese el precio");
//     let stock = prompt("Catidad actual");
//     let categoria = prompt("Categoria?");

//     let producto = new Producto(nombre, precio, stock, categoria);

//     productos[`producto${contador}`] = producto;

//     producto.sumarIva();
//     producto.mostrarInfo();

//     let vender = prompt("¿Desea vender uno de estos Productos? (si/no)");
//     if(vender.toLowerCase() === "si"){
//         let cantidad = prompt("¿Cuantas Unidades quiere vender?");
//         producto.vender(parseInt(cantidad));
//     }

//     let respuesta = prompt("¿Desea agregar un nuevo producto? (si/no)");
//     if(respuesta.toLowerCase() !== "si"){
//         continuar = false;
//     }

//     contador++;

// }

// console.log("Proceso terminado...");


/**
 * Problema 10: Calculadora de Pago de Estacionamiento
    Descripción:

    Crea un programa que calcule el costo del estacionamiento en un garaje. El usuario debe ingresar el número de horas que 
    ha estacionado su vehículo y el programa debe calcular el costo total en función de la siguiente tarifa:

    Las primeras dos horas: $5 cada una.
    A partir de la tercera hora: $3 por hora adicional.
    El programa debe mostrar el costo total y permitir que el usuario calcule el costo para varios vehículos.
 */

// function calcularCostoDelEstacionamiento(horas) {

//     const tarifaPrimerasDosHoras = 5;
//     const tarifaHorasAdicionales = 3;
//     let costoTotal;

//     if (horas <= 2 && horas > 0) {
//         costoTotal = tarifaPrimerasDosHoras * horas;
//     } else {
//         costoTotal = (2 * tarifaPrimerasDosHoras) + ((horas - 2) * tarifaHorasAdicionales);
//     }

//     return costoTotal;
// }

// function calcularEstacionamiento() {
//     let continuar = true;
//     let costoAcumulado = 0;

//     do {
//         let horas = parseFloat(prompt("Ingrese el número de horas que estuvo estacionado:"));

//         if (isNaN(horas) || horas < 0) {
//             console.error("Error, Ingrese un Valor correcto de Horas.!!");
//             continue;
//         }

//         let costo = calcularCostoDelEstacionamiento(horas); // Devuelve un Valor
//         costoAcumulado += costo;
//         console.log(`El costo del Estacionamiento es de: $${costo}.- ARG
//                     El Costo Acumulado es de: $${costoAcumulado}.- ARG
//                     `);

//         continuar = confirm("¿Desea calcular el Costo de Otro Vehiculo? (si/no)");

//     } while (continuar)
//     console.log(`El costo Total a Pagar del Estacionamiento es de: $${costoAcumulado}.- ARG`);
// }


// calcularEstacionamiento();


/**
 * Problema: Simulador de Gestión de Inventario de una Tienda
    Descripción:
    Imagina que estás desarrollando un simulador para gestionar el inventario de una tienda. En este simulador, cada producto tiene un 
    nombre, un precio y una cantidad en stock. Debes permitir que el usuario realice las siguientes acciones:

    Agregar un nuevo producto al inventario.
    Vender un producto, lo que reduce la cantidad en stock.
    Mostrar el inventario completo, listando todos los productos con su nombre, precio y cantidad en stock.
    Salir del programa.
    Cada una de estas acciones debe ser manejada por un método en la clase Producto o en una clase Inventario. El programa debe seguir 
    funcionando hasta que el usuario elija salir.

    Requisitos:
    Crea una clase Producto que tenga atributos para el nombre, el precio y la cantidad en stock. La clase también debe tener métodos 
    para vender el producto y para mostrar la información del producto.

    Crea una clase Inventario que tenga métodos para agregar un nuevo producto, vender un producto (buscando por nombre), y mostrar el 
    inventario completo.

    Usa un ciclo para permitir que el usuario realice múltiples acciones hasta que decida salir.

    Ejemplo de uso:
    El usuario agrega un nuevo producto: "Manzanas", $1.50, 30 unidades.
    Luego, el usuario vende 5 unidades de "Manzanas".
    El usuario agrega otro producto: "Naranjas", $2.00, 20 unidades.
    El usuario decide mostrar el inventario completo.
    Finalmente, el usuario sale del programa.
 */

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.siguiente = null;
    }

    vender(cantidadVendida) {
        if (cantidadVendida <= this.stock) {
            this.stock -= cantidadVendida;
            console.log(`Se vendieron ${cantidadVendida} unidades de ${this.nombre}`);
        } else {
            console.error(`Error, No hay suficiente ${this.nombre} en Stock para realizar esta Venta.!`)
        }
    }

    mostrarInformacion() {
        console.log(`Producto: ${this.nombre}\n Precio: $${this.precio}.-\n Stock: ${this.stock} Unidades.`);
    }
}

class Inventario {
    constructor(){
        this.primerProducto = null; // Referencia al Primer Producto de la Lista
    }

    agregarProducto(nombre, precio, cantidad) {
        let nuevoProducto = new Producto(nombre, precio, cantidad);
        if(this.primerProducto === null) {
            this.primerProducto = nuevoProducto;
        } else {
            let siguienteProducto = this.primerProducto;
            while(siguienteProducto.siguiente !== null) {
                siguienteProducto = siguienteProducto.siguiente;
            }

            siguienteProducto.siguiente = nuevoProducto;
        }

        console.log(`Producto ${nombre} agregado al Inventario.!`)
    }

    venderProducto(nombre, cantidad) {
        let actual = this.primerProducto;
        while(actual !== null) { // Mientras existan Productos
            if(actual.nombre === nombre) {
                actual.vender(cantidad);
                return;
            }
            actual = actual.siguiente;
        }

        console.error(`El Producto ${nombre} no esta en el Inventario.!`);
    }

    mostrarInventario(){
        if(this.primerProducto === null) {
            console.warn("El Inventario esta Vacio.!");
        } else {
            let actual = this.primerProducto;
            while(actual !== null) { 
                actual.mostrarInformacion();
                actual = actual.siguiente;
            }
        }
    }
}

function principal() {
    let inventario = new Inventario();
    let continuar = true;


    while(continuar) {
        let opcion = prompt(
            "Seleccione una Opcion:\n" +
            "1. Agregar producto\n" + 
            "2. Vender Producto\n" + 
            "3. Mostrar Inventario\n" +
            "4. Salir"
        );

        switch(opcion){
            case '1':
                let nombre = prompt("Ingrese el nombre del Producto:");
                let precio = parseFloat(prompt("Ingrese el Precio: "));
                let cantidad = parseInt(prompt("Ingrese la cantidad: "));
                inventario.agregarProducto(nombre, precio, cantidad);
                break;
            case '2':
                let nombreVenta = prompt("Ingrese el Nombre del Producto a Vender: ");
                let cantidadVenta = parseInt(prompt("Ingrese la Cantidad a Vender:"));
                inventario.venderProducto(nombreVenta, cantidadVenta);
                break;
            case '3': 
                inventario.mostrarInventario();
                break;
            case '4':
                continuar = false;
                console.log("Saliendo del Programa...");
                break;
            default:
                console.error("Error, Opción no valida. Intente Nuevamente.!")
        }
    }
}

principal();

/**
 * Explicacion:
 * 
 * 
 */