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

// class Producto {
//     constructor(nombre, precio, stock) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//         this.siguiente = null;
//     }

//     vender(cantidadVendida) {
//         if (cantidadVendida <= this.stock) {
//             this.stock -= cantidadVendida;
//             console.log(`Se vendieron ${cantidadVendida} unidades de ${this.nombre}`);
//         } else {
//             console.error(`Error, No hay suficiente ${this.nombre} en Stock para realizar esta Venta.!`)
//         }
//     }

//     mostrarInformacion() {
//         console.log(`Producto: ${this.nombre}\n Precio: $${this.precio}.-\n Stock: ${this.stock} Unidades.`);
//     }
// }

// class Inventario {
//     constructor(){
//         this.primerProducto = null; // Referencia al Primer Producto de la Lista
//     }

//     agregarProducto(nombre, precio, cantidad) {
//         let nuevoProducto = new Producto(nombre, precio, cantidad);
//         if(this.primerProducto === null) {
//             this.primerProducto = nuevoProducto;
//         } else {
//             let siguienteProducto = this.primerProducto;
//             while(siguienteProducto.siguiente !== null) {
//                 siguienteProducto = siguienteProducto.siguiente;
//             }

//             siguienteProducto.siguiente = nuevoProducto;
//         }

//         console.log(`Producto ${nombre} agregado al Inventario.!`)
//     }

//     venderProducto(nombre, cantidad) {
//         let actual = this.primerProducto;
//         while(actual !== null) { // Mientras existan Productos
//             if(actual.nombre === nombre) {
//                 actual.vender(cantidad);
//                 return;
//             }
//             actual = actual.siguiente;
//         }

//         console.error(`El Producto ${nombre} no esta en el Inventario.!`);
//     }

//     mostrarInventario(){
//         if(this.primerProducto === null) {
//             console.warn("El Inventario esta Vacio.!");
//         } else {
//             let actual = this.primerProducto;
//             while(actual !== null) { 
//                 actual.mostrarInformacion();
//                 actual = actual.siguiente;
//             }
//         }
//     }
// }

// function principal() {
//     let inventario = new Inventario();
//     let continuar = true;


//     while(continuar) {
//         let opcion = prompt(
//             "Seleccione una Opcion:\n" +
//             "1. Agregar producto\n" + 
//             "2. Vender Producto\n" + 
//             "3. Mostrar Inventario\n" +
//             "4. Salir"
//         );

//         switch(opcion){
//             case '1':
//                 let nombre = prompt("Ingrese el nombre del Producto:");
//                 let precio = parseFloat(prompt("Ingrese el Precio: "));
//                 let cantidad = parseInt(prompt("Ingrese la cantidad: "));
//                 inventario.agregarProducto(nombre, precio, cantidad);
//                 break;
//             case '2':
//                 let nombreVenta = prompt("Ingrese el Nombre del Producto a Vender: ");
//                 let cantidadVenta = parseInt(prompt("Ingrese la Cantidad a Vender:"));
//                 inventario.venderProducto(nombreVenta, cantidadVenta);
//                 break;
//             case '3': 
//                 inventario.mostrarInventario();
//                 break;
//             case '4':
//                 continuar = false;
//                 console.log("Saliendo del Programa...");
//                 break;
//             default:
//                 console.error("Error, Opción no valida. Intente Nuevamente.!")
//         }
//     }
// }

// principal();

/**
 * Explicacion:
 * 
 *  ver:  /teoria/explicacion_ej10.md
 */


/**
 * 
 * ### Problema 1: Calculadora de Descuentos
**Nivel de dificultad: Básico**

**Descripción:**
    Crea un programa que calcule el precio final de un producto después de aplicar un descuento. 
    El usuario debe ingresar el precio original del producto y el porcentaje de descuento. 
    El programa debe mostrar el precio final.

**Objetivos:**
- Uso de variables.
- Uso de operadores aritméticos.
- Manejo de entradas y salidas con `prompt` y `console.log`.
 */

// let precioOriginal = parseFloat(prompt("Ingrese el precio original del Producto"));
// let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de Descuento a Aplicar"));

// console.log("El Precio final es: $", precioOriginal - (precioOriginal * porcentajeDescuento / 100))

/**
 * ### Problema 2: Contador de Números Pares
**Nivel de dificultad: Básico**

**Descripción:**
    Crea un programa que cuente cuántos números pares hay entre 1 y 
    un número dado por el usuario. El programa debe usar un ciclo 
    para recorrer los números y contar cuántos son pares.

**Objetivos:**
- Uso de ciclos (`for` o `while`).
- Uso de condicionales (`if`).
- Manejo de entradas y salidas.
 */

// let limite = parseInt(prompt("Ingrese un numero"));

// let contador = 0;

// for(let i = 1; i <= limite; i++) { // i es el Iterador
//     if(i % 2 === 0) { // Esto es para los Pares
//         contador++;
//     }
// }

// console.log("La antidad de Numeros Pares entre 1 y " 
//             + limite + ", es de: " + contador + " números.");

/**
 * ### Problema 3: Calculadora de Sueldos
**Nivel de dificultad: Intermedio**

**Descripción:**
    Crea un programa que calcule el sueldo total de un empleado 
    basado en su salario base y las horas extra trabajadas. 
    El programa debe pedir al usuario el salario base, el número de 
    horas extra, y la tarifa de pago por hora extra. Luego, el programa 
    debe calcular y mostrar el sueldo total.

**Objetivos:**
- Creación de funciones para realizar cálculos.
- Uso de operadores aritméticos.
- Uso de condicionales y ciclos para validar entradas.
 */

// let salarioBase = parseFloat(prompt("Ingrese el salario Base: "))
// let horasExtra = parseInt(prompt("Ingrese la cantidad de Horas Extra"))
// let tarifaHoraExtra = parseFloat(prompt("Ingrese la tarifa de la Hora Extra"))

// const calcularSueldo = (salario, horas, tarifa) => {
//     let pagoExtra = horas * tarifa;    
//     return salario + pagoExtra;
// }

// let sueldoTotal = calcularSueldo(salarioBase, horasExtra, tarifaHoraExtra);

// console.log("El sueldo total es de: $",  sueldoTotal.toFixed(2)) // .toFixed(2) limita la cantidad de Decimales de un Flotante a 2 y ademas lo convierte a un String

/**
 * ### Problema 4: Agenda de Contactos
**Nivel de dificultad: Intermedio**

**Descripción:**
Crea un programa que simule una agenda de contactos básica. 
    El programa debe permitir al usuario agregar un contacto (nombre y número de teléfono)
    y mostrar todos los contactos guardados. Debe ser capaz de almacenar múltiples contactos.

**Objetivos:**
- Introducción al uso de objetos en JavaScript.
- Uso de funciones para agregar y mostrar contactos.
- Uso de un ciclo para recorrer los contactos.

 */

// let agenda = []; // Definimos un Array (lista) vacio.

// const agregarContacto = (nombre , telefono) => {
//     let contacto = {
//         nombre: nombre,
//         telefono: telefono
//     }
//     agenda.push(contacto);
// }

// const mostrarContacto = () => {
//     console.log(agenda);
// }

// let continuar;

// do{
//     let nombre = prompt("Ingrese un Nombre");
//     let telefono = parseInt(prompt("Ingrese el telefono"));

//     if(isNaN(telefono) || telefono <= 0) {
//         console.error("Ingrese un telefono valido")
//         continue;
//     }

//     agregarContacto(nombre, telefono);

//     continuar = prompt("¿Desea cargar otro contacto? (si/no)").toLowerCase();

// }while(continuar === 'si');

// mostrarContacto();

/**
 * ### Problema 5: Sistema de Gestión de Productos (Versión Simplificada)
**Nivel de dificultad: Intermedio-Avanzado**

**Descripción:**
    Crea un programa que permita gestionar un solo producto en un inventario. 
    El programa debe permitir al usuario agregar un producto con su nombre, precio 
    y cantidad en stock, vender parte del stock y mostrar la información del producto.

**Objetivos:**
- Creación de una clase `Producto`.
- Uso de métodos para manipular los datos del producto.
- Uso de un ciclo para interactuar con el usuario.
 */

// class Producto {
//     constructor(nombreParametro, precioParametro, stockParametro) {
//         this.nombre = nombreParametro;
//         this.precio = precioParametro;
//         this.stock = stockParametro;
//     }

//     vender(cantidad) {
//         if(cantidad <= this.stock) {
//             this.stock -= cantidad;
//             console.log(`Se vendieron ${cantidad} Unidades de ${this.nombre}`);
//         } else {
//             console.error("Error, no hay suficiente Stock para vender " + cantidad 
//                             + " Unidades de " + this.nombre + ".!")
//         }
//     }

//     mostrarInformacion() {
//         console.log(
//             "Producto: " + this.nombre + "\n" +
//             "Precio: $" + this.precio + "\n" +
//             "Stock Disponible: " + this.stock + " Unidades\n"
//         )
//     }
// }

// let nombreProducto = prompt("Ingrese el Nombre del Producto");
// let precioProducto = parseFloat(prompt("Ingrese el Precio"));
// if (isNaN(precioProducto) || precioProducto <= 0){
//     console.error("Error, Ingrese un Precio correcto")
// }

// let stockProducto = parseInt(prompt("Ingrese el Stock Inicial"))
// if (isNaN(stockProducto) || stockProducto <= 0){
//     console.error("Error, Ingrese un Stock correcto")
// }

// const producto1 = new Producto(nombreProducto, precioProducto, stockProducto);

// // console.log(producto1);

// producto1.mostrarInformacion();

// let cantidadAVender = parseInt(prompt("Ingrese la cantidad de " 
//                         + producto1.nombre + " que desea Vender"));

// producto1.vender(cantidadAVender);

// producto1.mostrarInformacion();

/**
 * ### Problema 6: Perfil de Usuario
    Descripción: Crea un programa que gestione un perfil de usuario. 
    El programa debe permitir al usuario ingresar su nombre, edad y 
    correo electrónico, y luego mostrar esta información en la consola.

    Objetivos:

    Introducción al uso de objetos en JavaScript.
    Uso de funciones para establecer y mostrar las propiedades de un objeto.
 * 
 */

// class Usuario{
//     constructor(nombre, edad, email){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.email = email
//     }
//     mostrarPerfilDeUsuario(){
//         console.log(
//                         "Perfil del Usuario:\n" + 
//                         "-------------------\n" + 
//                         "Nombre: " + this.nombre + "\n" +
//                         "Edad: " + this.edad + "\n" +
//                         "Correo Electrónico: " + this.email
//                     )
//     }
// }

// let nombreUsuario = prompt("Ingrese el Nombre del Usuario");
// let edadUsuario = parseInt(prompt("Ingrese la Edad del Usuario"));
// if (isNaN(edadUsuario) || edadUsuario <= 0){
//     console.error("Error, Ingrese una Edad correcta")
// }
// let emailUsuario = prompt("Ingrese el Email del Usuario");

// const usuario1 = new Usuario(nombreUsuario, edadUsuario, emailUsuario);

// usuario1.mostrarPerfilDeUsuario();
