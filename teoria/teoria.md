### Teoría sobre Bucles en JavaScript

#### 1. Bucles `for`
El bucle `for` es una estructura que permite ejecutar un bloque de código varias veces. Se compone de tres partes principales:
- **Inicialización:** Se establece una variable de control, normalmente un contador.
- **Condición:** Mientras la condición sea verdadera, el bucle seguirá ejecutándose.
- **Incremento/Decremento:** Después de cada iteración, la variable de control se incrementa o decrementa.

**Sintaxis:**
```javascript
for (inicialización; condición; incremento/decremento) {
    // Código a ejecutar
}
```

**Ejemplo:**
```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i); // Imprime los números del 1 al 10
}
```

#### 2. Bucles `while`
El bucle `while` ejecuta un bloque de código mientras una condición especificada sea verdadera. A diferencia de `for`, `while` evalúa la condición antes de ejecutar el código.

**Sintaxis:**
```javascript
while (condición) {
    // Código a ejecutar
}
```

**Ejemplo:**
```javascript
let i = 1;
while (i <= 10) {
    console.log(i); // Imprime los números del 1 al 10
    i++;
}
```

#### 3. Bucles `do...while`
El bucle `do...while` es similar al bucle `while`, pero con una diferencia clave: el bloque de código se ejecuta al menos una vez, ya que la condición se evalúa después de cada ejecución.

**Sintaxis:**
```javascript
do {
    // Código a ejecutar
} while (condición);
```

**Ejemplo:**
```javascript
let i = 1;
do {
    console.log(i); // Imprime los números del 1 al 10
    i++;
} while (i <= 10);
```

### Sentencias `break` y `continue`

#### 4. `break`
La sentencia `break` se utiliza para salir de un bucle antes de que termine normalmente. Cuando `break` se encuentra dentro de un bucle, el control del programa sale inmediatamente del bucle.

**Ejemplo:**
```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Sale del bucle cuando i es igual a 5
    }
    console.log(i);
}
```

#### 5. `continue`
La sentencia `continue` se usa para omitir la iteración actual del bucle y pasar a la siguiente. A diferencia de `break`, `continue` no sale del bucle, sino que salta al siguiente ciclo de la iteración.

**Ejemplo:**
```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Omite los números pares
    }
    console.log(i); // Imprime solo números impares
}
```

### Estructura `switch`

La sentencia `switch` permite ejecutar uno de varios bloques de código basado en el valor de una expresión. Es útil cuando se necesitan comparar el mismo valor o expresión con varias opciones.

**Sintaxis:**
```javascript
switch (expresión) {
    case valor1:
        // Código a ejecutar si la expresión es igual a valor1
        break;
    case valor2:
        // Código a ejecutar si la expresión es igual a valor2
        break;
    // Más casos...
    default:
        // Código a ejecutar si la expresión no coincide con ningún valor
}
```

**Ejemplo:**
```javascript
let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    // Más casos...
    default:
        console.log("Día no válido");
}
```

### Aplicaciones Combinadas

Puedes combinar bucles y sentencias como `break`, `continue`, y `switch` para crear estructuras de control más complejas. Por ejemplo, puedes utilizar un bucle `for` junto con un `switch` para ejecutar diferentes acciones basadas en el valor del contador.

**Ejemplo:**
```javascript
for (let i = 1; i <= 10; i++) {
    switch (i) {
        case 3:
            console.log("Número es 3");
            break;
        case 5:
            console.log("Número es 5");
            break;
        default:
            console.log(i);
    }
}
```



---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)