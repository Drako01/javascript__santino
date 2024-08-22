function saludar() {
    console.log("Hola");
    console.log(10 + 5);
    let numero = 0;
    for (i = 0; i < 10; i++) {
        console.log("Valor: ", numero + i);
    }
}

// saludar();

// let nombreIngresado = prompt("Ingrese un Nombre:");
// console.log("El nombre ingresado es: " + nombreIngresado);
// nombreIngresado = prompt("Ingrese un Nombre:");
// console.log("El nombre ingresado es: " + nombreIngresado);
// nombreIngresado = prompt("Ingrese un Nombre:");
// console.log("El nombre ingresado es: " + nombreIngresado);
// nombreIngresado = prompt("Ingrese un Nombre:");
// console.log("El nombre ingresado es: " + nombreIngresado);
// nombreIngresado = prompt("Ingrese un Nombre:");
// console.log("El nombre ingresado es: " + nombreIngresado);

// function solicitarNombre() {
//     let nombreIngresado = prompt("Ingrese un Nombre:");
//     console.log("El nombre ingresado es: " + nombreIngresado);
// }

// solicitarNombre();
// solicitarNombre();
// solicitarNombre();
// solicitarNombre();


// Funciones con Parametros
// function mostrarNombre(nombre){
//     console.log(nombre);
// }
// // mostrarNombre("Santino");

// function suma(nuemro1, numero2) {
//     console.log(nuemro1 + numero2);
// }
// suma(2, 5);
// suma(6, 9);
// suma("Alejandro", " Di Stefano");

// let nombreIngresado = prompt("Ingrese un Nombre:");

// function solicitarNombre(pirulo) {
//     console.log("El nombre ingresado es: " + pirulo);
// }

// solicitarNombre(nombreIngresado); // Santino
// solicitarNombre("Alejandro");
// let resultado = 0;

// function suma(nuemro1, numero2) {
//     resultado = nuemro1 + numero2;
// }

// function mostrarResultado(mensaje){
//     console.log("El Resultado es: ", mensaje);
// }

// suma(3, 5);
// mostrarResultado(resultado);

// Funciones con Retorno
// function suma(nuemro1, numero2) {
//     return console.log("El Resultado es: ", nuemro1 + numero2);
// }

// suma(5, 62);

// Hagamos una Calculadora

// function calculadora(nuemro1, numero2, operacion) {
//     switch (operacion) {
//         case "+":
//             return console.log("El Resultado de la Suma es: ", nuemro1 + numero2);
//         case "-":
//             return console.log("El Resultado de la Resta es: ", nuemro1 - numero2);
//         case "*":
//             return console.log("El Resultado de la Multiplicación es: ", nuemro1 * numero2);
//         case "/":
//             if (numero2 !== 0) {
//                 return console.log("El Resultado de la División es: ", nuemro1 / numero2);
//             } else {
//                 return console.error("No se puede dividir por Cero");
//             }
//     }
// }

// calculadora(10, 5, '+');
// calculadora(10, 5, '-');
// calculadora(10, 5, '*');
// calculadora(10, 5, '/');
// calculadora(10, 0, '/');

// function suma(numero1, numero2) {
//     let resultado = numero1 + numero2;
//     return console.log("El Resultado es: ", resultado);
// }
// suma(5, 8);

// Funciones Anonimas

// function suma(nuemro1, numero2) {
//     return console.log("El Resultado es: ", nuemro1 + numero2);
// }

// const suma = function (a, b) { return console.log("El Resultado es: ", a + b) }
// suma(5, 6);

// const resta = function (a, b) { return console.log("El Resultado es: ", a - b) }
// resta(10, 4);

// // Funcion tipo flecha => Tiene un resturn implicito
// const sumar = (a, b) => { return console.log("El Resultado es: ", a + b) }
// sumar(10, 8);
// const restar = (a, b) => console.log("El Resultado es: ", a - b) 
// restar(10, 8);

// const iva = x => x * 1.21;

// let precio = 1000;
// console.log("El precio con el IVA es: $", iva(precio));

/**
 * Ejercicio 28. Crea una función llamada `perimetroRectangulo` que tome la longitud y 
 * la anchura de un rectángulo como parámetros y devuelva el perímetro del rectángulo.
 */

// function perimetroRectangulo(longitud, anchura){
//     return console.log("El perimetro del Rectangulo es de: ", longitud * 2 + anchura * 2);
// }

// perimetroRectangulo(100, 40);

/**
 * Ejercicio 10. Declara una variable llamada `esPar` y asígnale una función flecha que tome un número 
 * como parámetro y devuelva `true` si es par y `false` si es impar.
 */

// const esPar = a => a % 2 === 0

// console.log(esPar(4));
// console.log(esPar(5));

/**
 * 17. Llama a la función `calcularAreaRectangulo` con valores de base y altura 
 * proporcionados por el usuario e imprime el resultado en la consola.
 */
// let ingreseBase = parseInt(prompt("Ingrese la Base del Rectangulo"));
// let ingreseAltura = parseInt(prompt("Ingrese la Altura del Rectangulo"));

// function calcularAreaRectangulo(base = ingreseBase, altura = ingreseAltura){
//     return console.log("El area del Rectangulo es igual a: ", base * altura)
// }

// calcularAreaRectangulo();

/**
 * 26. Crea una función llamada `areaCirculo` que tome el radio de un 
 * círculo como parámetro y devuelva el área del círculo.
 */

// let ingreseRadio = parseInt(prompt("Ingrese la Radio del círculo"));

// const areaCirculo = radio => console.log("El area del círculo es igual a: ", radio * radio * 3.14);

// areaCirculo(ingreseRadio);

/**
Problema: Calculadora de Edad en Días usando Funciones
Crea un programa que calcule la edad total de una persona en días utilizando funciones. 
El programa debe:

Crear una función llamada calcularEdadEnDias que tome tres parámetros: años, meses, y días. La función debe devolver 
la edad total en días considerando:

1 año = 365 días
1 mes = 30 días (para simplificar)
Crear una función llamada solicitarEdad que solicite al usuario que ingrese su edad en años, meses, y días. Esta 
función debe llamar a calcularEdadEnDias y mostrar el resultado.

Crear una función llamada ejecutarCalculadoraDeEdad que permita al usuario realizar el cálculo varias veces si lo desea, 
preguntando después de cada cálculo si quiere realizar otro.
*/

// function calcularEdadEnDias(anios, meses, dias){
//     return console.log("Llevas ", (anios * 365) + (meses * 30) + dias , " dias de vida.");
// }

// let aniosVividos = parseInt(prompt("Ingrese Nro de años vividos"));
// let mesesVividos = parseInt(prompt("Ingrese Nro de meses vividos"));
// let diasVividos = parseInt(prompt("Ingrese Nro de dias vividos"));

// calcularEdadEnDias(aniosVividos, mesesVividos, diasVividos);



/**
 * Problema: Juego de Adivinanza de Números
Crea un programa que permita al usuario jugar un juego de adivinanza de números. 
El programa debe:

Generar un número aleatorio entre 1 y 100.

Crear una función llamada adivinarNumero que solicite al usuario que adivine el número. 
La función debe dar pistas si el número ingresado es demasiado alto o bajo y seguir 
solicitando un nuevo intento hasta que el usuario adivine correctamente.

Crear una función llamada jugarDeNuevo que pregunte al usuario si quiere jugar otra 
vez después de adivinar el número correctamente.

Crear una función llamada iniciarJuego que inicie el juego y lo reinicie si el usuario
decide jugar de nuevo.

Mantener un contador de intentos dentro de adivinarNumero para informar al usuario 
cuántos intentos le tomó adivinar el número correctamente.
 */

// Objeto Math

function generarNumeroAleatorio() { // Esto genera un numero aleatorio entre 1 y 100;
    return Math.floor(Math.random() * 100 + 1);
}

function adivinarNumero(numeroAleatoreo) {
    let intentos = 0;
    let adivinanza;

    do {
        adivinanza = parseInt(prompt("Adivina el Número aleatoreo"))
        intentos++;

        if (adivinanza < numeroAleatoreo) {
            console.warn("Muy bajo, Intente nuevamente.!")
        } else if (adivinanza > numeroAleatoreo) {
            console.warn("Muy Alto, Intente nuevamente.!")
        } else if (adivinanza === numeroAleatoreo) {
            console.log(`¡Correcto! Has ganado en ${intentos} Intentos.!!`)
        }

    } while (adivinanza !== numeroAleatoreo);

}

function jugarDeNuevo() {
    return confirm("¿Quiere jugar Nuevamente?"); // Retorna un Boolean
}

function iniciarJuego() {
    do {
        const numeroAleatoreo = generarNumeroAleatorio();
        adivinarNumero(numeroAleatoreo);
    } while (jugarDeNuevo())

}

iniciarJuego();
