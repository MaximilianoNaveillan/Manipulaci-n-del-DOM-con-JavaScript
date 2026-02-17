/*
============================================================
JavaScript Asíncrono - Parte II
AE4.2: Utilizar elementos de programación asíncrona para 
resolver un problema simple distinguiendo los diversos 
mecanismos para su implementación acorde al lenguaje JavaScript.
============================================================

OBJETIVOS DE APRENDIZAJE
✔ Comprender qué es la programación asíncrona.
✔ Diferenciar código síncrono vs asíncrono.
✔ Aplicar Promesas y async/await.
✔ Manejar errores con .catch() y try/catch.
*/

/* ============================================================
1️⃣ DIFERENCIA ENTRE CÓDIGO SÍNCRONO Y ASÍNCRONO
============================================================ */

/*
SÍNCRONO:
Se ejecuta línea por línea. 
Si una tarea tarda, bloquea todo el programa.
*/

console.log('Inicio síncrono');

function tareaPesada() {
  for (let i = 0; i < 1e9; i++) {} // Simula tarea larga
  console.log('Tarea pesada terminada');
}

tareaPesada();
console.log('Fin síncrono');

/*
ASÍNCRONO:
Permite ejecutar tareas largas sin bloquear el flujo principal.
*/

console.log('Inicio asíncrono');

setTimeout(() => {
  console.log('Tarea ejecutada después de 2 segundos');
}, 2000);

console.log('Fin asíncrono');

/* ============================================================
2️⃣ CREANDO Y USANDO UNA PROMESA
📌 Objetivo: Explicar qué es una Promesa y cómo manejar su resultado.
============================================================ */

/*
Una Promesa representa un valor que puede estar:
- Pendiente (pending)
- Resuelta (fulfilled)
- Rechazada (rejected)
*/

const miPromesa = new Promise((resolve, reject) => {
  // Simulamos una operación asíncrona
  setTimeout(() => {
    const exito = Math.random() > 0.5; // 50% éxito o error

    if (exito) {
      resolve('✅ La promesa fue resuelta correctamente');
    } else {
      reject('❌ La promesa fue rechazada');
    }
  }, 1500);
});

/*
.then() se ejecuta si la promesa se resuelve.
.catch() captura el error si se rechaza.
*/

miPromesa
  .then((resultado) => {
    console.log('THEN:', resultado);
  })
  .catch((error) => {
    console.error('CATCH:', error);
  });

/* ============================================================
3️⃣ ASYNC / AWAIT
📌 Objetivo: Reemplazar .then() y .catch() con async/await
============================================================ */

/*
async convierte una función en asíncrona.
await detiene la ejecución hasta que la promesa se resuelva.
*/

function obtenerDatosSimulados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5;

      if (exito) {
        resolve('📦 Datos recibidos correctamente');
      } else {
        reject('🚨 Error al obtener los datos');
      }
    }, 2000);
  });
}

async function ejecutarAsyncAwait() {
  try {
    console.log('⏳ Esperando datos...');

    const resultado = await obtenerDatosSimulados();

    console.log('RESULTADO:', resultado);
  } catch (error) {
    console.error('ERROR CAPTURADO:', error);
  }
}

ejecutarAsyncAwait();

/* ============================================================
4️⃣ MANEJO DE ERRORES CON TRY/CATCH
============================================================ */

/*
Ventaja:
✔ Código más limpio
✔ Evita encadenar múltiples .catch()
✔ Más legible y estructurado
*/

/* ============================================================
🎯 DEMO FINAL
============================================================

En esta demo vimos:

✔ setTimeout (simulación de tareas largas)
✔ Promesas con resolve y reject
✔ .then() y .catch()
✔ async/await
✔ Manejo de errores con try/catch

Esto permite escribir código más eficiente,
no bloqueante y más fácil de mantener.
============================================================
*/
