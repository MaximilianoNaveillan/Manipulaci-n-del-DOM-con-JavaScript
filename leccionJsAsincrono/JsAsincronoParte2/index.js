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

/*
ASÍNCRONO:
Permite ejecutar tareas largas sin bloquear el flujo principal.
*/

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

/*
.then() se ejecuta si la promesa se resuelve.
.catch() captura el error si se rechaza.
*/

/* ============================================================
3️⃣ ASYNC / AWAIT
📌 Objetivo: Reemplazar .then() y .catch() con async/await
============================================================ */

/*
async convierte una función en asíncrona.
await detiene la ejecución hasta que la promesa se resuelva.
*/

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
