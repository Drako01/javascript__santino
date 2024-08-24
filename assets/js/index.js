// Programacion Orientada a Objetos
// let nombre = "Santino";
// let edad = 19;
// let email = "santino@mail.com";
// let altura = 1.80;

// console.log(nombre, edad, email, altura)
// // Creamos un Objeto Persona

// const persona1 = {
//     nombre: "Santino",
//     edad: 19,
//     email: "santino@mail.com",
//     altura: 1.80
// }

// const persona2 = {
//     nombre: "Alejandro",
//     edad: 48,
//     email: "alejandro@mail.com",
//     altura: 1.80
// }

// console.log(persona1);
// console.log(persona2);

// const objeto = {
//     clave: "Valor",
//     clave: "Valor",
//     clave: "Valor",
//     clave: "Valor",
// }

// console.log(persona1.nombre);
// console.log(persona1["email"]);

// persona1["email"] = "santinocorregido@mail.com";
// console.log(persona1["email"]);

// Uso de Constructores
// Uso de this
// function Persona(nombre, edad, altura, email) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.altura = altura;
//     this.email = email;
// }

// // Instancia de Objeto
// const persona1 = new Persona("Santino", 19, 1.80, "santino@mail.com");
// const persona2 = new Persona("Alejandro", 48, 1.80, "alejandro@mail.com");

// console.log(persona1);
// console.log(persona2);

// Crear Objetos usando literales
// function Persona(objeto) { // Le paso el Objeto 
//     this.nombre = objeto.nombre;
//     this.edad = objeto.edad;
//     this.altura = objeto.altura;
//     this.email = objeto.email;
// }

// const persona1 = new Persona({
//     nombre: "Santino",
//     edad: 19,
//     email: "santino@mail.com",
//     altura: 1.80
// })

// console.log(persona1);

// Diferencia entre funcion y metodo
// let cadena = "Hola Santino";
// let numero = 10;

// console.log(typeof(cadena));
// console.log(typeof(numero));

// // El String es un Objeto que tiene sus propios metodos
// console.log(cadena.toUpperCase());
// console.log(cadena.toLowerCase());
// console.log(cadena.length); // Cuenta la cantidad de caracteres de la cadena

// function saludar(){
//     console.log("Hola")
// }

// saludar() // Funcion
// toUpperCase() // Metodo => Solo puede ser llamada desde el Objeto en el cual fue creado
// cadena.toLowerCase()

// // Los Objetos tiene Atributos y Metodos
// function Persona(nombre, edad, altura, email) {
//     // Atributos
//     this.nombre = nombre;
//     this.edad = edad;
//     this.altura = altura;
//     this.email = email;
//     // Metodos
//     this.hablar = function () { console.log("Hola soy " + this.nombre) };
//     this.caminar = function () { console.log("Hola, soy " + this.nombre + " y estoy caminando") };
// }

// const persona1 = new Persona("Santino", 19, 1.80, "santino@mail.com");
// // const persona2 = new Persona("Alejandro", 48, 1.80, "alejandro@mail.com");
// console.log(persona1);

// persona1.hablar();
// persona2.hablar();

// persona1.caminar();
// persona2.caminar();

// Operador IN

// console.log("nombre" in persona1); // true
// console.log("apellido" in persona1); // false

// for(let i = 0; i < 5; i++){
//     console.log("Vuelta Nro: " + i)
// }

// for in
// for (const propiedad in persona1) {
//     console.log(persona1[propiedad]); // Por cada propiedad de persona1, haceme un console.log de esa propiedad
// }

// for(const propiedad in persona2) {
//     console.log(persona1[propiedad]);
// }

/**
 * Operador IN
 * El operador in devuelve true si la propiedad especificada existe en el objeto. 
 * 
 * Operador FOR...IN
    Mientras que el bucle for...in permite acceder a todas las propiedades del objeto, 
    obteniendo una propiedad por cada iteración.
 */

// Clases
// class Vehiculo{

//     // Atributos
//     constructor(color, tipo, ruedas, marca, motor){
//         this.color = color;
//         this.tipo = tipo;
//         this.ruedas = ruedas;
//         this.marca = marca;
//         this.motor = motor;
//     }

//     // Metodos
//     encender() {
//         console.log("El/La " + this.tipo + " esta Encendido");
//     }
// }

// const auto = new Vehiculo("Azul", "Auto", 4, "Ford", 1.6);
// auto.encender()
// console.log(auto);

// const moto = new Vehiculo("Blanco", "Moto", 2, "BMW", 650);
// moto.encender()
// console.log(moto);

class Producto {

    constructor(nombre, precio, stock, categoria){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.categoria = categoria;
        this.vendido = false;
    }

    sumarIva() {
        this.precio = (this.precio * 1.21).toFixed(2);
    }

    vender(cantidad){
        this.cantidad = cantidad;
        this.vendido = true;
        this.stock = this.stock - this.cantidad;
        console.log("El producto " + this.nombre + " se vendio.!");
        console.log("Se vendieron " + this.cantidad + " unidades de " + this.nombre);
        console.log("Ahora quedan ", this.stock, " Unidades");        
    }

    mostrarInfo(){
        console.log(`Producto ${this.nombre}`);
        console.log(`Precio $${this.precio}`);
        console.log(`Stock ${this.stock} Unidades`);
        console.log(`Categoria ${this.categoria}`);
    }

}

// const producto1 = new Producto("Azucar", 1250.50, 100, "Almacen");
// const producto2 = new Producto("Fernet", 10890.50, 100, "Bebidas");

// console.log(producto1);
// producto1.sumarIva();
// producto1.vender(4);
// console.log(producto2);
// producto2.sumarIva();
// producto2.vender(15);

let continuar = true;
let contador = 1;
let productos = {};

while(continuar){
    let nombre = prompt("Ingrese nombre del Producto");
    let precio = prompt("Ingrese el precio");
    let stock = prompt("Catidad actual");
    let categoria = prompt("Categoria?");

    let producto = new Producto(nombre, precio, stock, categoria);

    productos[`producto${contador}`] = producto;

    producto.sumarIva();
    producto.mostrarInfo();

    let vender = prompt("¿Desea vender uno de estos Productos? (si/no)");
    if(vender.toLowerCase() === "si"){
        let cantidad = prompt("¿Cuantas Unidades quiere vender?");
        producto.vender(parseInt(cantidad));
    }

    let respuesta = prompt("¿Desea agregar un nuevo producto? (si/no)");
    if(respuesta.toLowerCase() !== "si"){
        continuar = false;
    }

    contador++;

}

console.log("Proceso terminado...");