// inicioPrograma() se ejecuta inmediatamente (síncrona).
function inicioPrograma() {
  console.log('Inicio del programa');
}

// Función finPrograma tambien es síncrona
function finPrograma() {
  console.log('Fin del programa');
}

// Ejecución
inicioPrograma();

// setTimeout() es una funcion(método) asíncrono usando 3 segundos
// ya que programa la ejecución del mensaje después de 3 segundos y
// continúa con el siguiente código.
setTimeout(function () {
  console.log('Mensaje después de 3 segundos');
  // finPrograma();
}, 3000);

finPrograma();

// 1.- ¿Por qué "Fin del programa" aparece antes que el mensaje con retraso?

// RESP: La función finPrograma() se ejecuta antes del mensaje del
// setTimeout. Ya que JavaScript no espera a que termine el setTimeout
// para continuar con la ejecución del programa.

// Después de 3 segundos, aparece el mensaje retrasado. "Mensaje después de 3 segundos"

// 2.- - ¿JavaScript ejecutó el código en orden?
// RESP: JavaScript lee y ejecuta el código en orden, pero hay una
// diferencia clave entre código síncrono y código asíncrono:
// Las funciones inicioPrograma() y finPrograma() son síncronas,
// Y se ejecutan inmediatamente en el orden que aparecen.
// El método setTimeout() es asíncrono. Esto significa que JavaScript
// lo considera para que se ejecute después de 3 segundos, pero no se
// detiene a esperar. El código siguiente (finPrograma()) continúa
// ejecutándose de inmediato.

// Metodo distinto a función = función es un bloque de código que se puede llamar por su nombre.
// Metodo = es es una función que pertenece a un objeto. Ej: setTimeout()
// setTimeout() ES UN METODO GLOBALA FUNCION DE jAVASCRIPT QUE DESPUES DE UN TIEMPO DETERMINADO
//- 3.- ¿Qué significa que JavaScript sea monohilo?
// RESP: significa que tiene un solo “hilo” de ejecución, es decir, solo puede
// ejecutar una tarea a la vez en el mismo momento dentro de un contexto de
// ejecución.
