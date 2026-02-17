/**********************************************************************
 *  PROGRAMACIÓN ASÍNCRONA EN JAVASCRIPT
 *  ---------------------------------------------------------------
 *  Resumen explicativo + ejemplos prácticos
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
function ejemploBloqueante() {
  console.log('Inicio bloqueante');
  for (let i = 0; i < 1e9; i++) {} // simula tarea pesada
  console.log('Fin Bloqueante');
}

// ⚡ Código Asíncrono (No bloqueante)
function ejemploAsincrono() {
  console.log('Inicio asíncrono');

  setTimeout(() => {
    console.log('Tarea asíncrona completada');
  }, 2000);

  console.log('Fin asíncrono');
}

    setTimeout(()=>{
        console.log("Tarea Asincrona completada");
    }, 2000);
    }
}
// Descomenta uno a la vez para probar:
// ejemploBloqueante();
ejemploAsincrono();

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

function procesarDatos(callback) {
  console.log('Procesando datos...');

  setTimeout(() => {
    console.log('Datos listos');
    callback();
  }, 2000);
}

procesarDatos(() => {
  console.log('Callback ejecutado');
});

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

function tarea1(callback) {
  setTimeout(() => {
    console.log('Tarea 1 completada');
    callback();
  }, 1000);
}

function tarea2(callback) {
  setTimeout(() => {
    console.log('Tarea 2 completada');
    callback();
  }, 1000);
}

function tarea3(callback) {
  setTimeout(() => {
    console.log('Tarea 3 completada');
    callback();
  }, 1000);
}

// Anidación (Callback Hell)
tarea1(() => {
  tarea2(() => {
    tarea3(() => {
      console.log('Todas las tareas finalizadas');
    });
  });
});

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

function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = false;

      if (exito) {
        resolve('Datos obtenidos correctamente');
      } else {
        reject('Error al oblener los datos');
      }
    }, 2000);
  });
}

obtenerDatos()
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));

/*
✅ Ventajas sobre callbacks:
- Menos anidamiento
- Manejo estructurado de errores
- Encadenamiento con .then()
*/

/**********************************************************************
 * 5️⃣ ENCADENAMIENTO DE PROMESAS
 **********************************************************************/

function tarea(numero) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Tarea ${numero} completada`);
      resolve();
    }, 1000);
  });
}

tarea(1)
  .then(() => tarea(2))
  .then(() => tarea(3))
  .then(() => console.log('Todas las tareas finalizadas'))
  .catch((error) => console.error('Error: ', error));

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

async function ejecutarTareas() {
  try {
    console.log('Inicio');

    await tarea(1);
    await tarea(2);
    await tarea(3);

    console.log('Todas las tareas finalizadas');
  } catch (error) {
    console.error('Error en código:', error);
  }
}

ejecutarTareas();

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

Porque es monohilo. si bloqueamos hilo prncipal, la aplicación se congela.

¿Cómo afecta el código bloqueante en una web?

- Congela la interfaz
- Demora en carga de archivos.
- La web se realentiza.
- No responde a eventos

¿Cuándo usar cada uno?

Callbacks:
- Poco ocntrol en muchas tareas.
- Código simple o APIS antiguas.

Promesas ( then{} catch()):
- Encadenamiento
- Maejo estructurado de asincronía
- Mejor lejibilidad

Async/await:
- Código mas moderno.
- Encapsulamiento.
- Mejor lejibilidad.
- Proyectos profecionales.



¿Por qué async/await es más legible?
Porque elimina el encadenamiento de .then()
y permite leer el flujo de arriba hacia abajo.
*/
/**********************************************************************
 *  PROGRAMACIÓN ASÍNCRONA EN JAVASCRIPT
 *  ---------------------------------------------------------------
 *  Resumen explicativo + ejemplos prácticos
 *  Autor: Chorte Vue
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



¿Cómo afecta el código bloqueante en una web?



¿Cuándo usar cada uno?



¿Por qué async/await es más legible?

*/
