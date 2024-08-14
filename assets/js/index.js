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

let numeroDia;

do {
    numeroDia = parseInt(prompt("Ingrese el día de la semana (1-7)"));
    if (numeroDia < 1 || numeroDia > 7 || isNaN(numeroDia)) {
        console.log("Número inválido. Por favor, ingrese un número del 1 al 7.");
    }
} while (numeroDia < 1 || numeroDia > 7 || isNaN(numeroDia));

switch (numeroDia) {
    case 1:
        console.log("Hoy es Lunes");
        break;
    case 2:
        console.log("Hoy es Martes");
        break;
    case 3:
        console.log("Hoy es Miércoles");
        break;
    case 4:
        console.log("Hoy es Jueves");
        break;
    case 5:
        console.log("Hoy es Viernes");
        break;
    case 6:
        console.log("Hoy es Sábado");
        break;
    case 7:
        console.log("Hoy es Domingo");
        break;
}
