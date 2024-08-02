# Teoría Básica de JavaScript

#### Variables y Constantes

1. **Variables**:
   - En JavaScript, una variable es un contenedor para almacenar datos.
   - Para declarar una variable usamos `let` o `var`.
   - Ejemplo: `let nombre = "Alejandro";`

2. **Constantes**:
   - Una constante es similar a una variable, pero su valor no puede cambiar una vez asignado.
   - Se declara usando `const`.
   - Ejemplo: `const PI = 3.14159;`

#### Entrada y Salida

3. **Prompt**:
   - `prompt` es una función que muestra un cuadro de diálogo que solicita al usuario que ingrese algún dato.
   - Ejemplo: `let edad = prompt("Ingrese su edad");`

4. **Alert**:
   - `alert` muestra un cuadro de diálogo con un mensaje y un botón de "Aceptar".
   - Ejemplo: `alert("Hola!");`

5. **Console.log**:
   - `console.log` imprime mensajes en la consola del navegador.
   - Es útil para depurar el código.
   - Ejemplo: `console.log("La edad ingresada es: " + edad);`

#### Control de Flujo

6. **if**:
   - La sentencia `if` se utiliza para ejecutar un bloque de código solo si una condición es verdadera.
   - Ejemplo:
     ```javascript
     if (edad >= 18) {
       console.log("Eres mayor de edad");
     }
     ```

7. **if else**:
   - `if else` permite ejecutar un bloque de código si una condición es verdadera, y otro bloque si es falsa.
   - Ejemplo:
     ```javascript
     if (numero % 2 === 0) {
       console.log("El número es par");
     } else {
       console.log("El número es impar");
     }
     ```

8. **if else if**:
   - `if else if` permite evaluar múltiples condiciones en secuencia.
   - Ejemplo:
     ```javascript
     if (numero > 100) {
       console.log("El número es mayor que 100");
     } else if (numero < 100) {
       console.log("El número es menor que 100");
     } else {
       console.log("El número es igual a 100");
     }
     ```

#### Operadores Lógicos

9. **Operadores Lógicos**:
   - `&&` (AND): Devuelve `true` si ambas condiciones son verdaderas.
   - `||` (OR): Devuelve `true` si al menos una de las condiciones es verdadera.
   - `!` (NOT): Invierte el valor booleano.
   - Ejemplo:
     ```javascript
     if (edad > 18 && edad < 65) {
       console.log("Estás en edad laboral");
     }
     ```

#### Manejo de Tipos de Datos

10. **Conversión de Tipos**:
    - A veces es necesario convertir entre diferentes tipos de datos.
    - Para convertir una cadena a un número, usamos `parseInt` o `parseFloat`.
    - Ejemplo:
      ```javascript
      let edad = prompt("Ingrese su edad");
      let edadNumero = parseInt(edad);
      ```

#### Comentarios

11. **Comentarios**:
    - Los comentarios son líneas de texto que no se ejecutan y se usan para describir el código.
    - Comentarios de una línea usan `//` y comentarios de múltiples líneas usan `/* ... */`.
    - Ejemplo:
      ```javascript
      // Esto es un comentario de una línea
      /* Esto es un comentario
         de múltiples líneas */
      ```


---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)