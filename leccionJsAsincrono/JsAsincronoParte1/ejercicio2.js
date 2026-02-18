// 1. Función procesar que recibe un número y un callback
function procesar(numero, callback) {
  console.log(`Iniciando procesamiento del número ${numero}...`);

  // 2. Simular proceso demorado usando setTimeout
  setTimeout(() => {
    const resultado = numero * 2; // Ejemplo de "proceso": duplicar el número
    callback(resultado); // Ejecutar el callback con el resultado
  }, 2000); // 2 segundos de demora
}

// 3. Llamada a procesar
procesar(5, function (resultado) {
  console.log(`Resultado del procesamiento: ${resultado}`);
});

// 1.- Qué pasaría si eliminamos setTimeout

//RESP: Si quitamos el setTimeout, la función procesar se
// ejecutaría completamente de forma síncrona.
// El callback se ejecuta inmediatamente, sin
// demora, porque no hay nada que lo retrase.

// 2.- ¿Por qué el callback se ejecuta después con setTimeout?

// RESP: Cuando usamos setTimeout, JavaScript no espera a que
// termine el tiempo. En lugar de eso:
// Programa el callback para que se ejecute después del retraso.
// Continúa con el resto del código.
// Una vez transcurrido el tiempo, el callback entra a la cola
// de eventos.
// El hilo principal lo toma cuando está libre y lo ejecuta.
// Esto significa que el callback se ejecuta “después” del retraso, no de inmediato.

// 3.- Ventajas de usar callbacks en procesos demorados
// RESP: Permiten no bloquear el hilo principal, es decir, JavaScript puede seguir
// ejecutando otras tareas mientras espera.
// Hacen posible trabajar con operaciones asíncronas como:
// a) Llamadas a APIs (fetch).
// b) Lectura de archivos.
// c) Timers (setTimeout / setInterval).
// Permiten controlar qué hacer después de que termine un proceso, incluso si tarda
// mucho tiempo.
// Ejemplo real: leer datos de un servidor sin congelar la interfaz de usuario.
