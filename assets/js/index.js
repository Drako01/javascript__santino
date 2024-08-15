// Ciclos e Iteraciones
// Ciclos por Conteo
// Estructura for

// Ciclos Condicionales
// Estructura while
// Estructura do While

// let numero;
// numero = 0;
// console.log(numero);
// numero = numero + 1;
// console.log(numero);
// numero = numero + 1;
// console.log(numero);
// numero = numero + 1;
// console.log(numero);
// numero = numero + 1;
// console.log(numero);
// numero = numero + 1;
// console.log(numero);
// console.log("Sin en for");

// i++ es igual a decir i = i + 1
// for (let i = 1; i <= 40; i++) {
//     console.log(i);
// }
// console.log("Con en for");
// Estructura del ciclo for
// for (desde; hasta; autoincrementacion) {
//     Lo que quieras que se repita.
// }
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }



// Ciclos por condiciones
// let repetir = true;
// while(repetir){
//     console.log("Hasta el infinito y mas alla....")
// }


// let ingreseNumero = parseInt(prompt("Ingrese un numero"));
// let valorIngresado = isNaN(ingreseNumero); // o true o false
// if (valorIngresado) {
//     console.log("Usted ha ingresado un String");
//     while (valorIngresado) {
//         ingreseNumero = parseInt(prompt("Ingrese un numero"));
//         valorIngresado = isNaN(ingreseNumero);
//     }
// }
// console.log("Tabla de Multiplicar del " + ingreseNumero);
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingreseNumero * i;
//     console.log(ingreseNumero + " X " + i + " = " + resultado);
// }


// do While

// let repetir = false;

// do {
//     console.log("Solo una Vez")
// } while (repetir);

// let numeroDoWhile = 0;
// do {
//     numeroDoWhile = prompt("ingrese un numero")
//     console.log(numeroDoWhile)
// } while (parseInt(numeroDoWhile));

// Sentencias Break y Continue

// for(let i = 1; i < 10; i++){
//     if(i == 5) {
//         break;
//     }
//     console.log("Esta es la Iteracion Nro: " + i + " Usando Break");    
// }

// for(let i = 1; i < 10; i++){
//     if(i == 5) {
//         continue;
//     }
//     console.log("Esta es la Iteracion Nro: " + i + " Usando Continue");    
// }

// Estructura Switch

// let numeroDia;

// do {
//     numeroDia = parseInt(prompt("Ingrese el día de la semana (1-7)"));
//     if (numeroDia < 1 || numeroDia > 7 || isNaN(numeroDia)) {
//         console.log("Número inválido. Por favor, ingrese un número del 1 al 7.");
//     }
// } while (numeroDia < 1 || numeroDia > 7 || isNaN(numeroDia));

// switch (numeroDia) {
//     case 1:
//         console.log("Hoy es Lunes");
//         break;
//     case 2:
//         console.log("Hoy es Martes");
//         break;
//     case 3:
//         console.log("Hoy es Miércoles");
//         break;
//     case 4:
//         console.log("Hoy es Jueves");
//         break;
//     case 5:
//         console.log("Hoy es Viernes");
//         break;
//     case 6:
//         console.log("Hoy es Sábado");
//         break;
//     case 7:
//         console.log("Hoy es Domingo");
//         break;
// }

/**
 * Escribe un programa en JavaScript que clasifique números en tres rangos: bajos (1-10), medios (11-20), 
 * y altos (21-30). El programa debe permitir que el usuario ingrese números de manera repetida mediante 
 * prompt hasta que decida detenerse escribiendo la palabra "salir". Los números ingresados deben ser 
 * clasificados y contados según el rango al que pertenecen. Al finalizar, el programa debe mostrar un 
 * resumen con el número total de entradas en cada categoría.
 */

// let bajo = 0;
// let medio = 0;
// let alto = 0;
// let continuar = true;


// while (continuar) {
//     let ingreseNumero = prompt("Ingrese un Numero.! (o escribe 'Salir' para terminar)");

//     if (ingreseNumero.toLowerCase() === "salir") {
//         continuar = false;
//         break;
//     }

//     let numero = parseInt(ingreseNumero);

//     if (isNaN(numero)) {
//         console.log("Che nabo, ingresa un numero valido.!!");
//         continue;
//     }

//     switch (true) {
//         case (numero >= 1 && numero <= 10):
//             bajo++;
//             break;
//         case (numero > 10 && numero <= 20):
//             medio++;
//             break;
//         case ( numero > 20 && numero <= 30):
//             alto++;
//             break;
//         default:
//             console.log("Numero fuera de Rango. Ingrese un numero entre 1 y 30.!");
//             break;
//     }

// }

// console.log("Cantidad de números Bajos: " + bajo);

// console.log("Cantidad de números Medios: " + medio);

// console.log("Cantidad de números Altos: " + alto);

/**
 * Crea un programa en JavaScript que actúe como una calculadora simple. El programa debe permitir al usuario
 *  ingresar dos números y seleccionar una operación matemática básica (suma, resta, multiplicación o división) 
 * usando un menú presentado a través de prompt. Después de realizar la operación seleccionada, el programa debe 
 * mostrar el resultado al usuario y preguntar si desea realizar otra operación. El programa continuará ejecutándose 
 * hasta que el usuario decida salir escribiendo "salir".
 */

// let continuar;

// do {
//     let numeroA = parseFloat(prompt("Ingrese el 1er Numero"));
//     if (isNaN(numeroA)) {
//         console.log("Che nabo, ingresa un numeroA valido.!!");
//         continue;
//     }
//     let numeroB = parseFloat(prompt("Ingrese el 2do Numero"));
//     if (isNaN(numeroB)) {
//         console.log("Che nabo, ingresa un numeroB valido.!!");
//         continue;
//     }
//     let operacion = prompt("Elija la Operacion entre: (+, -, *, /)");

//     let resultado;

//     switch (operacion) {
//         case '+':
//             resultado = numeroA + numeroB;
//             console.log(`El resultado de ${numeroA} + ${numeroB} es igual a ${resultado}`);
//             break;
//         case '-':
//             resultado = numeroA - numeroB;
//             console.log(`El resultado de ${numeroA} - ${numeroB} es igual a ${resultado}`);
//             break;
//         case '*':
//             resultado = numeroA * numeroB;
//             console.log(`El resultado de ${numeroA} x ${numeroB} es igual a ${resultado}`);
//             break;
//         case '/':
//             if (numeroB === 0) {
//                 console.error("Error, No se puede dividir por 0.!!");
//             } else {
//                 resultado = numeroA / numeroB;
//                 console.log(`El resultado de ${numeroA} x ${numeroB} es igual a ${resultado}`);
//             }
//             break;
//         default:
//             console.error("Error, Operacion NO Valida.!!");
//     }

//     continuar = prompt("¿Quiere realizar otra operacion? (si/no): ").toLowerCase();

//     if (continuar.toLowerCase() === "salir" || continuar.toLowerCase() === "no") {
//         continuar = false;
//         break;
//     }

// } while (continuar === 'si');

// console.log("Gracias por usar la Calculadora.!");



/**
 * 
 * Escribe un programa en JavaScript que permita al usuario convertir diferentes unidades de longitud 
 * (metros a kilómetros, metros a centímetros, kilómetros a metros, y centímetros a metros). El programa 
 * debe solicitar al usuario que ingrese un valor numérico y la conversión que desea realizar, y luego 
 * mostrar el resultado de la conversión. El usuario debe poder realizar tantas conversiones como desee 
 * hasta que decida salir del programa.
 */


// let continuar;

// do {
//     let valor = parseFloat(prompt("Ingrese un valor de Longitud: "));
//     if (isNaN(valor)) {
//         console.error("Che nabo, ingresa un numeroA valido.!!");
//         continue;
//     }

//     let opcion = prompt("Elija la conversion:\n" +
//         "1. Metros a Kilómetros\n" + 
//         "2. Metros a Centímetros\n" +
//         "3. Kilómetros a Metros\n" + 
//         "4. Centímetros a Metros\n" +
//         "Seleccione una Opción entre 1 y 4"
//     );

//     let resultado;

//     switch(opcion) {
//         case '1':
//             resultado = valor / 1000;
//             console.log(`${valor} metros son ${resultado} kilómetros`);
//             break;
//         case '2':
//             resultado = valor * 100;
//             console.log(`${valor} metros son ${resultado} centímetros`);
//             break;
//         case '3':
//             resultado = valor * 1000;
//             console.log(`${valor} kilómetros son ${resultado} metros`);
//             break;
//         case '4':
//             resultado = valor / 100;
//             console.log(`${valor} centímetros son ${resultado} metros`);
//             break;
//         default:
//             console.error("Error, Opcion inválida.!")
//     }

//     continuar = prompt("¿Quiere realizar otra conversion? (si/no): ").toLowerCase();

// } while (continuar === 'si');

// console.log("Gracias por usar la Calculadora de conversiones.!");

/**
 * Crea un programa en JavaScript que permita al usuario convertir entre diferentes escalas de 
 * temperatura: Celsius, Fahrenheit, y Kelvin. El programa debe solicitar al usuario que ingrese 
 * una temperatura y la conversión que desea realizar, y luego mostrar el resultado de la conversión. 
 * El usuario debe poder realizar tantas conversiones como desee hasta que decida salir del programa. 
 */