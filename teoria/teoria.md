# Algo de Teoría para complementar lo visto en Clase

En JavaScript, el **parsing** (parseo) se refiere a convertir datos de un tipo a otro, 
mientras que `typeof` se utiliza para determinar el tipo de un dato.

### Parsing en JavaScript

#### Parseo de cadenas a números

- **`parseInt()`**: Convierte una cadena a un número entero.
  
  ```javascript
  let str = "123";
  let num = parseInt(str); // 123
  ```

- **`parseFloat()`**: Convierte una cadena a un número con punto decimal.
  
  ```javascript
  let str = "123.45";
  let num = parseFloat(str); // 123.45
  ```

- **`Number()`**: Convierte una cadena a un número. Funciona con enteros y decimales.
  
  ```javascript
  let strInt = "123";
  let strFloat = "123.45";
  let numInt = Number(strInt); // 123
  let numFloat = Number(strFloat); // 123.45
  ```

#### Parseo de otros tipos de datos

- **`String()`**: Convierte un número o un booleano a una cadena.
  
  ```javascript
  let num = 123;
  let bool = true;
  let strNum = String(num); // "123"
  let strBool = String(bool); // "true"
  ```

- **`Boolean()`**: Convierte un valor a booleano.
  
  ```javascript
  let str = "hello";
  let num = 0;
  let boolStr = Boolean(str); // true
  let boolNum = Boolean(num); // false
  ```

### `typeof` en JavaScript

`typeof` es un operador que devuelve una cadena indicando el tipo del operando.

#### Ejemplos de uso de `typeof`

```javascript
console.log(typeof 123); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (esto es un error histórico en JavaScript)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (los arrays son un tipo especial de objeto)
console.log(typeof function(){}); // "function"
console.log(typeof Symbol()); // "symbol"
```

#### Uso en combinaciones

Puedes usar `typeof` junto con el parseo para verificar y convertir tipos de datos según sea necesario.

```javascript
let value = "456";
if (typeof value === "string") {
  let num = parseInt(value);
  console.log(typeof num); // "number"
}
```


El operador `===` en JavaScript se conoce como el operador de igualdad estricta. Se utiliza para comparar dos valores y verificar si son iguales tanto en valor como en tipo. A diferencia del operador `==`, que solo compara el valor, el operador `===` también compara el tipo de los valores.

### Ejemplos de Uso del Operador `===`

#### Comparación de Números
```javascript
let num1 = 5;
let num2 = 5;
console.log(num1 === num2); // true
```

#### Comparación de Cadenas
```javascript
let str1 = "hello";
let str2 = "hello";
console.log(str1 === str2); // true
```

#### Comparación de Tipos Diferentes
```javascript
let num = 5;
let str = "5";
console.log(num === str); // false
```

#### Comparación de Booleanos
```javascript
let bool1 = true;
let bool2 = true;
console.log(bool1 === bool2); // true
```

### Diferencias entre `===` y `==`

El operador `==` hace una comparación menos estricta porque realiza conversiones de tipo implícitas si los valores no son del mismo tipo. Esto puede llevar a resultados inesperados.

#### Ejemplos de `==`
```javascript
let num = 5;
let str = "5";
console.log(num == str); // true (porque se convierte '5' a 5 antes de la comparación)
```

#### Ejemplos de `===`
```javascript
let num = 5;
let str = "5";
console.log(num === str); // false (porque no son del mismo tipo)
```

### ¿Cuándo Utilizar `===`?

#### Evitar Errores de Comparación

Usar `===` ayuda a evitar errores que pueden surgir de las conversiones de tipo implícitas. Esto es especialmente útil cuando trabajas con datos provenientes de diferentes fuentes, como entradas del usuario o datos de una API.

#### Comparación de Tipos

Si necesitas asegurarte de que dos variables no solo tienen el mismo valor, sino también el mismo tipo, `===` es la mejor opción.

#### Código Más Seguro y Legible

El uso de `===` hace que tu código sea más explícito y legible, ya que no se realizan conversiones de tipo detrás de escena. Esto facilita la comprensión del comportamiento del código.

### Ejemplos Prácticos

#### Validación de Entradas de Usuario
Supongamos que estás desarrollando un formulario que solo acepta números como entrada:

```javascript
let userInput = prompt("Introduce un número:");
if (typeof userInput === "string") {
  userInput = parseInt(userInput, 10);
}
if (userInput === 10) {
  console.log("Has introducido el número 10.");
} else {
  console.log("El número introducido no es 10.");
}
```

## ¿Qué es una función en JavaScript?

Una función en JavaScript es un bloque de código diseñado para realizar una tarea específica. Piensa en una función como una "receta" que le dice a la computadora exactamente qué pasos debe seguir para hacer algo, como sumar dos números o mostrar un mensaje en la pantalla.

### ¿Por qué usar funciones?

1. **Reutilización**: Puedes escribir una función una vez y usarla tantas veces como quieras.
2. **Organización**: Las funciones ayudan a mantener el código limpio y organizado.
3. **Facilidad de mantenimiento**: Si necesitas cambiar algo, solo lo haces en la función, y todos los lugares donde se usa se actualizan automáticamente.

### Cómo crear una función

En JavaScript, se crean funciones utilizando la palabra clave `function`. Aquí hay un ejemplo de una función que suma dos números:

```javascript
function sumar(a, b) {
    return a + b;
}
```

- `function`: Palabra clave que indica que estás definiendo una función.
- `sumar`: Nombre de la función (puedes elegir cualquier nombre).
- `(a, b)`: Los "parámetros" de la función, es decir, las entradas que la función necesita para hacer su trabajo.
- `{ return a + b; }`: El "cuerpo" de la función, que es el código que se ejecuta cuando llamas a la función. La palabra clave `return` devuelve el resultado de la función.

### Cómo usar (llamar) una función

Una vez que has creado una función, puedes usarla llamándola por su nombre y pasándole los valores (argumentos) que necesita:

```javascript
let resultado = sumar(3, 5);
console.log(resultado); // Esto mostrará 8 en la consola
```

En este ejemplo:
- `sumar(3, 5)` llama a la función `sumar` y le pasa los valores 3 y 5.
- La función `sumar` suma esos dos números y devuelve el resultado.
- El resultado (8) se guarda en la variable `resultado` y luego se imprime en la consola.

### Funciones con o sin parámetros

Las funciones no siempre necesitan parámetros. Por ejemplo, aquí hay una función sin parámetros:

```javascript
function saludar() {
    console.log("¡Hola, mundo!");
}
```

Y puedes llamarla simplemente así:

```javascript
saludar(); // Mostrará "¡Hola, mundo!" en la consola
```

### Funciones anónimas y flecha (Arrow Functions)

En JavaScript, también puedes crear funciones sin nombre, llamadas funciones anónimas. Estas a menudo se usan en situaciones donde la función se pasa como argumento a otra función.

```javascript
let multiplicar = function(a, b) {
    return a * b;
};

console.log(multiplicar(4, 5)); // Mostrará 20 en la consola
```

Otra forma moderna de escribir funciones en JavaScript es usando **Arrow Functions** (funciones flecha):

```javascript
let dividir = (a, b) => a / b;

console.log(dividir(10, 2)); // Mostrará 5 en la consola
```

Las funciones flecha son más compactas y se utilizan mucho en el código moderno.

### Resumen

- **Funciones** son bloques de código reutilizables.
- **Parámetros** son las entradas que la función necesita.
- **`return`** se usa para devolver un valor desde una función.
- Puedes **llamar** a una función para que haga su trabajo.
- JavaScript también tiene **funciones anónimas** y **funciones flecha**.


## Funciones Recurrentes

### ¿Qué es una función recurrente?

Una función recurrente es una función que se llama a sí misma. Las funciones recurrentes se usan comúnmente para resolver problemas que pueden ser desglosados en subproblemas más pequeños del mismo tipo.

### Ejemplo Básico

Un ejemplo clásico de una función recurrente es la función para calcular el factorial de un número:

```javascript
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // 120
```

En este ejemplo, la función `factorial` se llama a sí misma hasta que `n` es 0.

### Componentes de una función recursiva

Una función recursiva generalmente tiene dos componentes principales:
1. **Caso base**: Es la condición que detiene la recursión. Sin un caso base, la función seguiría llamándose indefinidamente, lo que podría causar un desbordamiento de pila.
2. **Caso recursivo**: Es la parte de la función que se llama a sí misma con un subconjunto del problema original.

### Ejemplo de Suma de Números

Este ejemplo muestra una función recursiva que suma los números de 1 a n.

```javascript
function suma(n) {
    if (n <= 1) {
        return n;
    } else {
        return n + suma(n - 1);
    }
}

console.log(suma(5)); // 15 (5 + 4 + 3 + 2 + 1)
```

### Ejemplo de Secuencia de Fibonacci

La secuencia de Fibonacci es una serie de números en la que cada número es la suma de los dos anteriores. Aquí hay una función recursiva para calcular el enésimo número de Fibonacci:

```javascript
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(6)); // 8 (0, 1, 1, 2, 3, 5, 8)
```

### Ejemplo de Potencia

Este ejemplo muestra una función recursiva que calcula la potencia de un número.

```javascript
function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    } else {
        return base * potencia(base, exponente - 1);
    }
}

console.log(potencia(2, 3)); // 8 (2^3 = 2 * 2 * 2)
```

### Ejemplo de Invertir una Cadena

Este ejemplo muestra una función recursiva que invierte una cadena.

```javascript
function invertirCadena(cadena) {
    if (cadena === "") {
        return "";
    } else {
        return invertirCadena(cadena.substr(1)) + cadena.charAt(0);
    }
}

console.log(invertirCadena("hola")); // "aloh"
```

### Consideraciones al usar recursividad

- **Eficiencia**: Algunas funciones recursivas pueden ser ineficientes si realizan muchos cálculos repetidos, como la función de Fibonacci que se muestra arriba. Para mejorar la eficiencia, se pueden usar técnicas como la memoización.
- **Complejidad**: La recursividad puede hacer que el código sea más difícil de entender y depurar. Es importante asegurarse de que el caso base esté correctamente definido para evitar bucles infinitos.
- **Profundidad de la pila**: Las funciones recursivas utilizan la pila de llamadas. Si la recursión es demasiado profunda, puede causar un desbordamiento de pila. Las iteraciones a menudo pueden ser una alternativa más segura para problemas que requieren muchas llamadas recursivas.

---

## Objetos, Clases, Constructores y `this`

### ¿Qué es un objeto?

En JavaScript, un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. Los valores de las propiedades pueden ser valores primitivos, objetos u otras funciones.

### Ejemplo Básico

```javascript
const persona = {
    nombre: 'Ana',
    edad: 30,
    saludar: function() {
        console.log('Hola, mi nombre es ' + this.nombre);
    }
};

persona.saludar(); // Hola, mi nombre es Ana
```

En este ejemplo, `persona` es un objeto con propiedades `nombre`, `edad` y un método `saludar`.

### ¿Qué es un constructor?

En JavaScript, un constructor es una función especial que se utiliza para crear y inicializar objetos cuando se utiliza con la palabra clave `new`.

### Ejemplo Básico de Constructor

```javascript
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

const persona1 = new Persona('Juan', 25);
console.log(persona1.nombre); // Juan
console.log(persona1.edad);   // 25
```

En este ejemplo, `Persona` es un constructor que inicializa los objetos con propiedades `nombre` y `edad`.

### ¿Qué es una clase?

En JavaScript, una clase es una plantilla para crear objetos. Una clase encapsula datos y funciones que operan sobre esos datos en una sola entidad.

### Ejemplo Básico de Clase

```javascript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log('Hola, mi nombre es ' + this.nombre);
    }
}

const persona1 = new Persona('Carlos', 28);
persona1.saludar(); // Hola, mi nombre es Carlos
```

En este ejemplo, `Persona` es una clase con un constructor y un método `saludar`.

### Uso de `this`

En JavaScript, `this` es una palabra clave que se refiere al objeto actual en el contexto de ejecución. En una función de objeto, `this` se refiere al objeto al que pertenece la función.

#### Ejemplo Básico de `this`

```javascript
const persona = {
    nombre: 'Lucía',
    edad: 32,
    saludar: function() {
        console.log('Hola, mi nombre es ' + this.nombre);
    }
};

persona.saludar(); // Hola, mi nombre es Lucía
```

### Recorrer un Objeto con `for...in`

#### ¿Qué es `for...in`?

El bucle `for...in` itera sobre todas las propiedades enumerables de un objeto.

#### Ejemplo Básico

```javascript
const persona = {
    nombre: 'Lucía',
    edad: 32,
    profesion: 'Ingeniera'
};

for (let propiedad in persona) {
    console.log(propiedad + ': ' + persona[propiedad]);
}

// nombre: Lucía
// edad: 32
// profesion: Ingeniera
```

En este ejemplo, el bucle `for...in` recorre todas las propiedades del objeto `persona` y las imprime.

### Uso de `in` en Objetos

El operador `in` se utiliza para verificar si una propiedad existe en un objeto.

#### Ejemplo Básico

```javascript
const persona = {
    nombre: 'Mario',
    edad: 40
};

console.log('nombre' in persona); // true
console.log('profesion' in persona); // false
```

En este ejemplo, el operador `in` verifica si las propiedades `nombre` y `profesion` existen en el objeto `persona`.

## Ejemplos Prácticos

### Crear un Objeto Usando un Constructor

```javascript
function Animal(tipo, sonido) {
    this.tipo = tipo;
    this.sonido = sonido;
}

const perro = new Animal('Perro', 'Ladrido');
console.log(perro.tipo); // Perro
console.log(perro.sonido); // Ladrido
```

### Definir Métodos en una Clase

```javascript
class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    arrancar() {
        console.log(this.marca + ' ' + this.modelo + ' está arrancando.');
    }
}

const miCoche = new Coche('Toyota', 'Corolla');
miCoche.arrancar(); // Toyota Corolla está arrancando.
```


## Herencia en Clases

### ¿Qué es la Herencia?

**Herencia** es un concepto en programación que permite que una clase tome (herede) propiedades y métodos de otra clase. Es como cuando un hijo hereda características de sus padres. En JavaScript, esto permite que una nueva clase (llamada **subclase** o **clase hija**) utilice el código de una clase existente (llamada **superclase** o **clase madre**), sin tener que escribirlo nuevamente.

#### Ejemplo de Herencia

Imagina que tienes una clase `Animal`, que tiene una propiedad `nombre` y un método `hacerSonido`. Luego, creas una nueva clase `Perro` que hereda de `Animal`.

```javascript
// Clase base o superclase
class Animal {
    constructor(nombre) {
        this.nombre = nombre; // Propiedad nombre
    }

    hacerSonido() {
        console.log(this.nombre + ' hace un sonido.'); // Método que imprime un mensaje
    }
}

// Subclase que hereda de Animal
class Perro extends Animal {
    hacerSonido() {
        console.log(this.nombre + ' ladra.'); // Método que sobrescribe el comportamiento
    }
}

const miPerro = new Perro('Rex');
miPerro.hacerSonido(); // Muestra "Rex ladra."
```

En este ejemplo:
- `Perro` hereda de `Animal`. Esto significa que `Perro` obtiene la propiedad `nombre` automáticamente.
- `Perro` tiene su propio método `hacerSonido`, que reemplaza al método `hacerSonido` de `Animal`. Por eso, cuando llamas a `hacerSonido`, el perro "ladra" en lugar de hacer un sonido genérico.

### ¿Qué es el Polimorfismo?

**Polimorfismo** es una palabra larga que significa "muchas formas". En programación, el polimorfismo te permite utilizar un mismo método en diferentes clases, pero con un comportamiento específico para cada clase. En otras palabras, aunque el método tenga el mismo nombre en varias clases, cada clase lo ejecuta de manera diferente.

#### Ejemplo de Polimorfismo

Sigamos con el ejemplo anterior. Ahora agregamos otra clase, `Gato`, que también hereda de `Animal` pero hace algo diferente cuando se le dice que haga un sonido.

```javascript
class Gato extends Animal {
    hacerSonido() {
        console.log(this.nombre + ' maúlla.'); // El gato maúlla
    }
}

const miGato = new Gato('Misu');
miGato.hacerSonido(); // Muestra "Misu maúlla."

const otroPerro = new Perro('Fido');
otroPerro.hacerSonido(); // Muestra "Fido ladra."
```

Aquí:
- Tanto `Gato` como `Perro` heredan de `Animal` y ambos tienen un método llamado `hacerSonido`.
- Sin embargo, el método `hacerSonido` se comporta de manera diferente en `Gato` (maúlla) y en `Perro` (ladra).
- Esto es polimorfismo: el mismo método (`hacerSonido`) tiene diferentes comportamientos según la clase que lo implemente.

### Resumiendo

- **Herencia**: Permite que una clase (como `Perro` o `Gato`) use las propiedades y métodos de otra clase (como `Animal`).
- **Polimorfismo**: Permite que un método (como `hacerSonido`) haga cosas diferentes dependiendo de la clase en la que se encuentre.


---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)
