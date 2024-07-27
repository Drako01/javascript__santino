# Bienvenida al Curso de JavaScript

<p align="center"> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="Javascript" width="100" height="100"/></a> 
 <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="100" height="100"/></a> <a href="https://www.w3schools.com/css/" target="_blank"> 
 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="100" height="100"/></a> 
</p>



---



¡Hola Santino! Bienvenido al curso de JavaScript. En este documento encontrarás información valiosa sobre las buenas prácticas en JavaScript y cómo iniciar la estructura de una aplicación web.

## Buenas Prácticas en JavaScript

1. **Usa `let` y `const` en lugar de `var`**:
   - `let` y `const` tienen un alcance de bloque, lo que reduce errores relacionados con el alcance de las variables.
   - Usa `const` para variables que no cambiarán su valor y `let` para las que sí.

2. **Escribe código claro y legible**:
   - Usa nombres de variables descriptivos.
   - Escribe funciones pequeñas y enfocadas en una sola tarea.
   - Añade comentarios cuando sea necesario, pero evita comentarios innecesarios.

3. **Sigue un estilo de código consistente**:
   - Usa una convención de nombres consistente (camelCase para variables y funciones).
   - Mantén una indentación consistente (2 o 4 espacios).
   - Usa punto y coma al final de las declaraciones.

4. **Evita el código duplicado**:
   - Reutiliza funciones y evita copiar y pegar código.
   - Usa módulos para organizar el código y separar funcionalidades.

5. **Manejo adecuado de errores**:
   - Usa `try...catch` para manejar errores.
   - Añade mensajes de error claros y útiles.

## Estructura de una Aplicación Web

Una estructura organizada y modular es clave para mantener un proyecto escalable y fácil de mantener. Aquí te presentamos una estructura de ejemplo y las ventajas y desventajas de este enfoque.

### Estructura de Carpetas

```plaintext
├── index.html
├── contact.html
├── products.html
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   ├── base/
│   │   │   ├── reset.css
│   │   │   ├── typography.css
│   │   │   └── variables.css
│   │   ├── components/
│   │   │   ├── buttons.css
│   │   │   ├── forms.css
│   │   │   └── modals.css
│   │   ├── layout/
│   │   │   ├── header.css
│   │   │   └── footer.css
│   ├── js/
│   │   └── index.js
│   ├── img/
│   └── fonts/
├── README.md
```

### Ventajas

- **Modularidad**: Separa estilos, scripts e imágenes en carpetas específicas para facilitar la búsqueda y el mantenimiento.
- **Reutilización**: Los componentes reutilizables, como botones y formularios, se definen una vez y se usan en varias partes del proyecto.
- **Escalabilidad**: La estructura organizada permite agregar nuevas funcionalidades sin desordenar el proyecto existente.

### Desventajas

- **Complejidad Inicial**: Puede parecer complejo al principio para proyectos pequeños.
- **Sobrecarga de Archivos**: La creación de muchos archivos pequeños puede ser abrumadora si no se gestiona adecuadamente.

## Importancia de las Buenas Prácticas

Seguir buenas prácticas es esencial para desarrollar código limpio, mantenible y escalable. Ayuda a:
- **Reducir Errores**: Minimiza los errores comunes y facilita la depuración.
- **Mejorar la Colaboración**: Un código claro y bien documentado facilita el trabajo en equipo.
- **Optimizar el Rendimiento**: Un código bien estructurado puede mejorar la velocidad de carga y la experiencia del usuario.

¡Espero que disfrutes el curso y aprendas mucho!

---

## Autor: Alejandro Di Stefano

[GitHub](https://github.com/Drako01) 


