# Explicacion paso a paso de como resolver el Ejercicio 10.


```javascript
Problema: Simulador de Gestión de Inventario de una Tienda
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
```


### Paso 1: Definición de la clase `Producto`

```javascript
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.siguiente = null;
    }
```

- **Clase `Producto`:** Este es un plano (o plantilla) que define cómo se verá cada producto en nuestro inventario.
- **`constructor(nombre, precio, stock)`:** Este método especial se ejecuta cuando creamos un nuevo producto. Se encarga de asignar el nombre, precio y stock del producto. Además, crea un enlace (`this.siguiente`) que inicialmente es `null`, y que usaremos para enlazar productos en una lista.

### Paso 2: Métodos de la clase `Producto`

```javascript
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
```

- **`vender(cantidadVendida)`:** Este método resta la cantidad vendida del stock del producto si hay suficiente stock disponible. Si no hay suficiente, muestra un mensaje de error.
- **`mostrarInformacion()`:** Este método muestra los detalles del producto, como su nombre, precio y la cantidad que queda en stock.

### Paso 3: Definición de la clase `Inventario`

```javascript
class Inventario {
    constructor(){
        this.primerProducto = null;
    }
```

- **Clase `Inventario`:** Este es el plano que define cómo gestionaremos el conjunto de productos.
- **`constructor()`:** Inicializa el inventario. Al principio, `primerProducto` es `null`, lo que significa que no hay ningún producto en el inventario.

### Paso 4: Métodos de la clase `Inventario`

```javascript
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
```

- **`agregarProducto(nombre, precio, cantidad)`:** 
    1. Crea un nuevo producto usando la clase `Producto`.
    2. Si el inventario está vacío (`primerProducto` es `null`), el nuevo producto se convierte en el primer producto del inventario.
    3. Si ya hay productos en el inventario, busca el último producto en la lista y enlaza el nuevo producto al final de la lista.
    4. Muestra un mensaje indicando que el producto se ha agregado al inventario.

```javascript
    venderProducto(nombre, cantidad) {
        let actual = this.primerProducto;
        while(actual !== null) {
            if(actual.nombre === nombre) {
                actual.vender(cantidad);
                return;
            }
            actual = actual.siguiente;
        }

        console.error(`El Producto ${nombre} no esta en el Inventario.!`);
    }
```

- **`venderProducto(nombre, cantidad)`:** 
    1. Comienza con el primer producto en el inventario (`primerProducto`).
    2. Recorre la lista de productos uno por uno, buscando el producto con el nombre especificado.
    3. Si lo encuentra, llama al método `vender()` de ese producto para reducir su stock.
    4. Si no encuentra el producto, muestra un mensaje de error.

```javascript
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
```

- **`mostrarInventario()`:** 
    1. Si no hay productos en el inventario, muestra un mensaje advirtiendo que está vacío.
    2. Si hay productos, recorre la lista y muestra la información de cada producto usando el método `mostrarInformacion()`.

### Paso 5: Programa Principal

```javascript
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
```

- **`principal()`:** Esta es la función que controla todo el programa.
    1. **`let inventario = new Inventario();`**: Crea un nuevo inventario vacío.
    2. **`let continuar = true;`**: Define una variable para controlar si el programa sigue corriendo.
    3. **`while(continuar) { ... }`**: Mantiene el programa en ejecución hasta que el usuario decida salir.
    4. **`switch(opcion)`**: Dependiendo de la opción elegida, el programa permite agregar un producto, vender un producto, mostrar el inventario o salir.
    5. **Opciones:**
       - **Opción 1:** Permite al usuario agregar un producto pidiéndole el nombre, precio y cantidad.
       - **Opción 2:** Permite al usuario vender un producto pidiendo el nombre y la cantidad.
       - **Opción 3:** Muestra todos los productos en el inventario.
       - **Opción 4:** Sale del programa.
