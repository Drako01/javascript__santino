// let numeroA = 10;
// let numeroB = 20;
// const NUMEROC = 3;

// // Operaciones basicas
// let suma = numeroA + numeroB;
// console.log(suma);
// console.log(numeroA - NUMEROC);
// let multiplicacion = numeroB * NUMEROC;
// console.log(multiplicacion);
// let division = numeroA / numeroB;
// console.log(division);

// let stringA = "Hola";
// let stringB = "Mundo";
// const ESPACIO = " ";

// // Concatenacion de Strings
// console.log(stringA + ESPACIO + stringB);
// console.log(stringA, stringB);

// Prompt / Alert

// let nombre = prompt("Ingrese su Nombre");
// let edad = prompt("Ingrese su Edad");
// let email = prompt("Ingrese su Email");

// console.log("El nombre ingresado es " + nombre);
// console.log("La edad de " + nombre + " es de " + edad + " Años");
// console.log("El Email de " + nombre + " es " + email);

// alert("El nombre ingresado es " + nombre);
// alert("La edad de " + nombre + " es de " + edad + " Años");
// alert("El Email de " + nombre + " es " + email);

// let numeroA = prompt("Ingrese un numero");
// let numeroB = prompt("Ingrese otro numero");
// // Todos los datos del Prompt se guardan como un String
// console.log(numeroA + numeroB);

// Parceo de datos
// parseInt => Me convierte el dato recibido en un Numero entero
// let numeroA = parseInt(prompt("Ingrese un numero")); 
// let numeroB = parseInt(prompt("Ingrese otro numero"));
// console.log(numeroA + numeroB);
// NaN => Esto significa que el dato ingresado NO es un Numero

// parseFloat => Me convierte el dato recibido en un Numero entero
// let numeroA = parseFloat(prompt("Ingrese un numero")); 
// let numeroB = parseFloat(prompt("Ingrese otro numero"));
// console.log(numeroA + numeroB);

// Control de flujo
// Tipo de datos Booleanos
// const V = true;
// const F = false;

// Condicionales
// si se cumple la condicion, entonces se ejecuta todo lo que esta entre {}
// if (condicion) {
//     condigo a ejecutar
// }
// Para que la condicion se cumpla, debe ser true

// if (V) {
//     console.log("El dato es verdadero");
// }

// let numero = parseFloat(prompt("Ingrese un numero")); 
// // Si usamos == estamos comparando o viendo si son iguales
// if (numero == 0) {
//     console.log("El numero ingresado es Cero");
// } else {
//     console.log("El numero ingresado es Distinto de Cero, Usted ingreso: " + numero);
// }

// let nombreIngresado = prompt("Ingrese su nombre");

// if ( nombreIngresado == "") {
//     alert("Usted no ingreso su Nombre");
//     nombreIngresado = prompt("Ingrese su nombre");
// } else {
//     console.log("El nombre ingresado es " + nombreIngresado);
// }

// let numero = parseFloat(prompt("Ingrese un numero"));

// if (isNaN(numero)) {
//     alert("Usted No ingreso un numero");
//     numero = parseFloat(prompt("Ingrese un numero"));
// } else if (numero < 0) {
//     console.log("Usted ingreso un Numero Negativo");
// } else if (numero > 0) {
//     console.log("Usted ingreso un Numero Positivo");
// } else {
//     console.log("Usted ingreso el Numero Cero");
// }

// Operadores Logicos
// Tablas de Verdad
// const V = true;
// const F = false;
// // Operadores Logicos
// // Operador && (and)
// console.log("Tabla de Verdad de Operador && (and)")
// console.log(V && V); // true
// console.log(V && F); // false
// console.log(F && V); // false
// console.log(F && F); // false

// // Operador || (and)
// console.log("Tabla de Verdad de Operador || (or)")
// console.log(V || V); // true
// console.log(V || F); // true
// console.log(F || V); // true
// console.log(F || F); // false

// Ejercicio de Ejemplo usando &&
// let nombreIngresado = prompt("Ingrese su Nombre");
// let apellidoIngresado = prompt("Ingrese su Apellido");

// if ((nombreIngresado != "") && (apellidoIngresado != "")) {
//     console.log("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
// } else {
//     alert("Error al ingresar los datos del Usuario");
// }

// Ejercicio de Ejemplo usando ||
// let nombreIngresado = prompt("Ingrese su Nombre");

// if ((nombreIngresado == "SANTINO") || (nombreIngresado == "santino")) {
//     console.log("Usted ingreso SANTINO o santino");
// } else {
//     console.log("Usted ingreso " + nombreIngresado);
// }


// Ejercicio de Ejemplo usando || y &&
// let nombreIngresado = prompt("Ingrese su Nombre");

// if (((nombreIngresado == "SANTINO") || (nombreIngresado == "santino")) && (nombreIngresado != "")) {
//     console.log("Usted ingreso SANTINO o santino");
// } else if (nombreIngresado == "") {
//     nombreIngresado = prompt("Ingrese su Nombre");
// } else {
//     console.log("Usted ingreso " + nombreIngresado);
// }