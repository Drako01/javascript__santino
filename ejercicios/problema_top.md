# Problemas con Solucion:

### **Problema: Sistema de Gestión de Alquiler de Vehículos**
**Descripción:**

Imagina que estás desarrollando un simulador para gestionar el alquiler de vehículos en una agencia de alquiler de autos. En este simulador, cada vehículo tiene un nombre (marca y modelo), un precio de alquiler por día, y un estado de disponibilidad (disponible o alquilado). Debes permitir que el usuario realice las siguientes acciones:

1. **Registrar un nuevo vehículo:** Agregar un nuevo vehículo al sistema, especificando su nombre, precio de alquiler por día, y estado inicial como disponible.
2. **Alquilar un vehículo:** Cambiar el estado de un vehículo a "alquilado" si está disponible, y mostrar un mensaje de confirmación.
3. **Devolver un vehículo:** Cambiar el estado de un vehículo a "disponible" si está alquilado, y mostrar un mensaje de confirmación.
4. **Mostrar la información del vehículo:** Mostrar los detalles del vehículo (nombre, precio de alquiler por día, y estado actual).
5. **Salir del programa:** Finalizar el programa.

El programa debe seguir funcionando hasta que el usuario elija salir.

---

### **Requisitos:**

1. **Clase Vehículo:** 
   - Debe tener atributos para el nombre (marca y modelo), el precio de alquiler por día, y el estado de disponibilidad.
   - Debe tener métodos para alquilar el vehículo, devolverlo, y mostrar su información.

2. **Gestión del Programa:** 
   - El programa debe permitir que el usuario realice las acciones mencionadas a través de un ciclo que continúe hasta que el usuario decida salir.

---

### **Ejemplo de uso:**

1. El usuario registra un nuevo vehículo: "Toyota Corolla", $50 por día, disponible.
2. Luego, el usuario alquila el "Toyota Corolla".
3. El usuario intenta alquilarlo de nuevo, pero recibe un mensaje de que ya está alquilado.
4. El usuario devuelve el "Toyota Corolla".
5. El usuario decide mostrar la información del vehículo.
6. Finalmente, el usuario sale del programa.

---

### **Solución Sugerida en Código:**

```javascript
class Vehiculo {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = true; // Estado inicial como disponible
    }

    alquilar() {
        if (this.disponible) {
            this.disponible = false;
            console.log(`${this.nombre} ha sido alquilado.`);
        } else {
            console.log(`${this.nombre} ya está alquilado.`);
        }
    }

    devolver() {
        if (!this.disponible) {
            this.disponible = true;
            console.log(`${this.nombre} ha sido devuelto y ahora está disponible.`);
        } else {
            console.log(`${this.nombre} ya está disponible.`);
        }
    }

    mostrarInfo() {
        const estado = this.disponible ? "Disponible" : "Alquilado";
        console.log(`Vehículo: ${this.nombre}, Precio por día: $${this.precio}, Estado: ${estado}`);
    }
}

// Ciclo principal para interactuar con el usuario
let continuar = true;
let vehiculo;

while (continuar) {
    let accion = prompt("Elija una acción: 1) Registrar vehículo 2) Alquilar 3) Devolver 4) Mostrar información 5) Salir");

    switch (accion) {
        case '1':
            let nombre = prompt("Ingrese el nombre del vehículo (marca y modelo):");
            let precio = parseFloat(prompt("Ingrese el precio de alquiler por día:"));
            vehiculo = new Vehiculo(nombre, precio);
            console.log(`Vehículo ${vehiculo.nombre} registrado exitosamente.`);
            break;

        case '2':
            if (vehiculo) {
                vehiculo.alquilar();
            } else {
                console.log("No hay ningún vehículo registrado.");
            }
            break;

        case '3':
            if (vehiculo) {
                vehiculo.devolver();
            } else {
                console.log("No hay ningún vehículo registrado.");
            }
            break;

        case '4':
            if (vehiculo) {
                vehiculo.mostrarInfo();
            } else {
                console.log("No hay ningún vehículo registrado.");
            }
            break;

        case '5':
            continuar = false;
            console.log("Saliendo del programa...");
            break;

        default:
            console.log("Opción no válida. Intente de nuevo.");
            break;
    }
}
```

---

### **Explicación:**

1. **Clase Vehículo:**
   - **Constructor:** Define los atributos del vehículo, con el estado inicial de disponibilidad como `true`.
   - **Métodos:** 
     - `alquilar()` cambia el estado a "alquilado" si está disponible.
     - `devolver()` cambia el estado a "disponible" si estaba alquilado.
     - `mostrarInfo()` muestra la información del vehículo, incluyendo su estado actual.

2. **Gestión del Programa:** 
   - Usa un ciclo para permitir al usuario realizar las acciones mencionadas hasta que elija salir.
   - Cada acción está vinculada a una opción que el usuario puede seleccionar a través de `prompt`.



---

### **Problema: Sistema de Registro de Usuarios**
**Descripción:**

Imagina que estás desarrollando un sistema de registro de usuarios para una aplicación. En este sistema, cada usuario tiene un nombre, edad, correo electrónico, teléfono y una preferencia (puede ser cualquier dato adicional que desees, como su color favorito o su hobby). El sistema debe permitir que el usuario realice las siguientes acciones:

1. **Registrar un nuevo usuario:** Permitir que el usuario ingrese su nombre, edad, correo electrónico, teléfono y preferencia. Luego, mostrar un mensaje de confirmación con los datos registrados.
2. **Mostrar la información del usuario registrado:** Mostrar todos los datos del usuario que ha sido registrado.
3. **Modificar un dato del usuario:** Permitir que el usuario modifique uno de los datos ingresados previamente (por ejemplo, cambiar el correo electrónico o la preferencia).
4. **Salir del programa:** Finalizar el programa.

El programa debe seguir funcionando hasta que el usuario elija salir.

---

### **Requisitos:**

1. **Clase Usuario:**
   - Debe tener atributos para el nombre, edad, correo electrónico, teléfono, y preferencia.
   - Debe tener métodos para modificar los datos del usuario y para mostrar la información completa del usuario.

2. **Gestión del Programa:**
   - El programa debe permitir que el usuario realice las acciones mencionadas a través de un ciclo que continúe hasta que el usuario decida salir.

---

### **Ejemplo de uso:**

1. El usuario registra un nuevo usuario: "Juan Pérez", 30 años, juan.perez@example.com, (123) 456-7890, color favorito: azul.
2. Luego, el usuario muestra la información del usuario registrado.
3. El usuario decide cambiar su correo electrónico a juan.perez@nuevoemail.com.
4. El usuario muestra la información del usuario modificado.
5. Finalmente, el usuario sale del programa.

---

### **Solución Sugerida en Código:**

```javascript
class Usuario {
    constructor(nombre, edad, email, telefono, preferencia) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
        this.preferencia = preferencia; // Puede ser cualquier dato adicional, como "color favorito"
    }

    modificarDato(campo, nuevoValor) {
        if (this.hasOwnProperty(campo)) {
            this[campo] = nuevoValor;
            console.log(`${campo} ha sido actualizado a: ${nuevoValor}`);
        } else {
            console.log(`El campo ${campo} no es válido.`);
        }
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Email: ${this.email}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Preferencia: ${this.preferencia}`);
    }
}

// Ciclo principal para interactuar con el usuario
let continuar = true;
let usuario;

while (continuar) {
    let accion = prompt("Elija una acción: 1) Registrar usuario 2) Mostrar información 3) Modificar dato 4) Salir");

    switch (accion) {
        case '1':
            let nombre = prompt("Ingrese el nombre:");
            let edad = parseInt(prompt("Ingrese la edad:"));
            let email = prompt("Ingrese el correo electrónico:");
            let telefono = prompt("Ingrese el teléfono:");
            let preferencia = prompt("Ingrese su preferencia (ej. color favorito, hobby, etc.):");
            usuario = new Usuario(nombre, edad, email, telefono, preferencia);
            console.log(`Usuario ${usuario.nombre} registrado exitosamente.`);
            break;

        case '2':
            if (usuario) {
                usuario.mostrarInfo();
            } else {
                console.log("No hay ningún usuario registrado.");
            }
            break;

        case '3':
            if (usuario) {
                let campo = prompt("¿Qué dato desea modificar? (nombre, edad, email, telefono, preferencia)");
                let nuevoValor = prompt(`Ingrese el nuevo valor para ${campo}:`);
                usuario.modificarDato(campo, nuevoValor);
            } else {
                console.log("No hay ningún usuario registrado.");
            }
            break;

        case '4':
            continuar = false;
            console.log("Saliendo del programa...");
            break;

        default:
            console.log("Opción no válida. Intente de nuevo.");
            break;
    }
}
```

---

### **Explicación:**

1. **Clase Usuario:**
   - **Constructor:** Define los atributos del usuario (nombre, edad, email, teléfono, y preferencia).
   - **Métodos:** 
     - `modificarDato(campo, nuevoValor)`: Permite modificar cualquier atributo del usuario, validando si el campo es válido.
     - `mostrarInfo()`: Muestra toda la información del usuario registrado.

2. **Gestión del Programa:**
   - Usa un ciclo para permitir al usuario realizar las acciones mencionadas hasta que elija salir.
   - Cada acción está vinculada a una opción que el usuario puede seleccionar a través de `prompt`.

