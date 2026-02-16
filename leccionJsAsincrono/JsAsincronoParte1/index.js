/**********************************************************************
 *  PROGRAMACIÓN ASÍNCRONA EN JAVASCRIPT
 *  ---------------------------------------------------------------
 *  Resumen explicativo + ejemplos prácticos
 *  Autor: Demo educativa
 **********************************************************************/

/**********************************************************************
 * 1️⃣ ¿Qué es la Programación Asíncrona?
 *
 * Es un modelo donde las operaciones NO bloquean el flujo principal.
 * Permite ejecutar tareas que toman tiempo (APIs, archivos, timers)
 * sin detener la ejecución del programa.
 *
 * JavaScript es monohilo (single-threaded), por lo que necesita
 * un modelo asíncrono para no congelar la aplicación.
 **********************************************************************/

console.log('===== EJEMPLO 1: Código Bloqueante vs Asíncrono =====');

/*
🧵 ¿Qué es un Thread?
Un Thread (hilo) es la unidad básica de ejecución.
JavaScript tiene UN SOLO hilo principal.
Si una tarea tarda mucho, bloquea todo.
*/

// ⏳ Código Bloqueante (Síncrono)

// ⚡ Código Asíncrono (No bloqueante)

// Descomenta uno a la vez para probar:
// ejemploBloqueante();

/*
💡 Pregunta:
¿Por qué "Fin asíncrono" aparece antes que 
"Tarea asíncrona completada"?
*/

/**********************************************************************
 * 2️⃣ CALLBACKS
 *
 * Un callback es una función que se pasa como argumento
 * para ejecutarse después de una operación.
 **********************************************************************/

console.log('\n===== EJEMPLO 2: Callbacks =====');

/*
💡 Pregunta:
¿Qué pasaría si eliminamos el setTimeout?
*/

/**********************************************************************
 * 3️⃣ CALLBACK HELL
 *
 * Problema: demasiados callbacks anidados
 * dificultan la lectura y mantenimiento.
 **********************************************************************/

console.log('\n===== EJEMPLO 3: Callback Hell =====');

// Anidación (Callback Hell)

/*
💡 Problema:
Mientras más tareas agregamos, más difícil de leer se vuelve.
¿Cómo lo mejoramos?
*/

/**********************************************************************
 * 4️⃣ PROMESAS
 *
 * Una Promesa es un objeto que representa una operación futura.
 * Estados:
 *  - Pending
 *  - Resolved
 *  - Rejected
 **********************************************************************/

console.log('\n===== EJEMPLO 4: Promesas =====');

/*
✅ Ventajas sobre callbacks:
- Menos anidamiento
- Manejo estructurado de errores
- Encadenamiento con .then()
*/

/**********************************************************************
 * 5️⃣ ENCADENAMIENTO DE PROMESAS
 **********************************************************************/

console.log('\n===== EJEMPLO 5: Encadenamiento =====');

/*
💡 Pregunta:
¿Qué pasaría si una promesa falla?
Se ejecuta automáticamente el .catch()
*/

/**********************************************************************
 * 6️⃣ ASYNC / AWAIT
 *
 * Permite escribir código asíncrono como si fuera síncrono.
 * Hace el código más claro y legible.
 **********************************************************************/

console.log('\n===== EJEMPLO 6: Async / Await =====');

/*
💡 Diferencia con Promesas:
- Más legible
- Parece código síncrono
- Más fácil de mantener
*/

/**********************************************************************
 * 7️⃣ REFLEXIONES FINALES
 **********************************************************************/

/*
¿Por qué JavaScript necesita programación asíncrona?

Porque es monohilo. Si bloqueamos el hilo principal,
la aplicación web se congela.

¿Cómo afecta el código bloqueante en una web?

- Congela la interfaz
- Mala experiencia de usuario
- No responde a eventos

¿Cuándo usar cada uno?

Callbacks:
- Código simple o APIs antiguas

Promesas:
- Manejo estructurado de asincronía
- Encadenamiento

Async/Await:
- Código moderno
- Mejor legibilidad
- Proyectos profesionales

¿Por qué async/await es más legible?
Porque elimina el encadenamiento de .then()
y permite leer el flujo de arriba hacia abajo.
*/
/**********************************************************************
 *  PROGRAMACIÓN ASÍNCRONA EN JAVASCRIPT
 *  ---------------------------------------------------------------
 *  Resumen explicativo + ejemplos prácticos
 *  Autor: Demo educativa
 **********************************************************************/

/**********************************************************************
 * 1️⃣ ¿Qué es la Programación Asíncrona?
 *
 * Es un modelo donde las operaciones NO bloquean el flujo principal.
 * Permite ejecutar tareas que toman tiempo (APIs, archivos, timers)
 * sin detener la ejecución del programa.
 *
 * JavaScript es monohilo (single-threaded), por lo que necesita
 * un modelo asíncrono para no congelar la aplicación.
 **********************************************************************/

console.log('===== EJEMPLO 1: Código Bloqueante vs Asíncrono =====');

/*
🧵 ¿Qué es un Thread?
Un Thread (hilo) es la unidad básica de ejecución.
JavaScript tiene UN SOLO hilo principal.
Si una tarea tarda mucho, bloquea todo.
*/

// ⏳ Código Bloqueante (Síncrono)

// ⚡ Código Asíncrono (No bloqueante)
f;
// Descomenta uno a la vez para probar:
// ejemploBloqueante();

/*
💡 Pregunta:
¿Por qué "Fin asíncrono" aparece antes que 
"Tarea asíncrona completada"?
*/

/**********************************************************************
 * 2️⃣ CALLBACKS
 *
 * Un callback es una función que se pasa como argumento
 * para ejecutarse después de una operación.
 **********************************************************************/

console.log('\n===== EJEMPLO 2: Callbacks =====');

/*
💡 Pregunta:
¿Qué pasaría si eliminamos el setTimeout?
*/

/**********************************************************************
 * 3️⃣ CALLBACK HELL
 *
 * Problema: demasiados callbacks anidados
 * dificultan la lectura y mantenimiento.
 **********************************************************************/

console.log('\n===== EJEMPLO 3: Callback Hell =====');

// Anidación (Callback Hell)

/*
💡 Problema:
Mientras más tareas agregamos, más difícil de leer se vuelve.
¿Cómo lo mejoramos?
*/

/**********************************************************************
 * 4️⃣ PROMESAS
 *
 * Una Promesa es un objeto que representa una operación futura.
 * Estados:
 *  - Pending
 *  - Resolved
 *  - Rejected
 **********************************************************************/

console.log('\n===== EJEMPLO 4: Promesas =====');

/*
✅ Ventajas sobre callbacks:
- Menos anidamiento
- Manejo estructurado de errores
- Encadenamiento con .then()
*/

/**********************************************************************
 * 5️⃣ ENCADENAMIENTO DE PROMESAS
 **********************************************************************/

console.log('\n===== EJEMPLO 5: Encadenamiento =====');

/*
💡 Pregunta:
¿Qué pasaría si una promesa falla?
Se ejecuta automáticamente el .catch()
*/

/**********************************************************************
 * 6️⃣ ASYNC / AWAIT
 *
 * Permite escribir código asíncrono como si fuera síncrono.
 * Hace el código más claro y legible.
 **********************************************************************/

console.log('\n===== EJEMPLO 6: Async / Await =====');

/*
💡 Diferencia con Promesas:
- Más legible
- Parece código síncrono
- Más fácil de mantener
*/

/**********************************************************************
 * 7️⃣ REFLEXIONES FINALES
 **********************************************************************/

/*
¿Por qué JavaScript necesita programación asíncrona?

Porque es monohilo. Si bloqueamos el hilo principal,
la aplicación web se congela.

¿Cómo afecta el código bloqueante en una web?

- Congela la interfaz
- Mala experiencia de usuario
- No responde a eventos

¿Cuándo usar cada uno?

Callbacks:
- Código simple o APIs antiguas

Promesas:
- Manejo estructurado de asincronía
- Encadenamiento

Async/Await:
- Código moderno
- Mejor legibilidad
- Proyectos profesionales

¿Por qué async/await es más legible?
Porque elimina el encadenamiento de .then()
y permite leer el flujo de arriba hacia abajo.
*/
