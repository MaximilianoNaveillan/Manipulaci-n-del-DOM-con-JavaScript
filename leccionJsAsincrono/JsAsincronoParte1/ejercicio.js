//EJERCICIO 1//

function inicio() {
  console.log('Inicio del programa');
}
setTimeout(() => {
  console.log('Mensaje con retraso');
}, 3000);
function fin() {
  console.log('Fin del programa');
}

inicio(); // Se ejecuta inmediatamente
setTimeout(() => {
  console.log('Mensaje con retraso');
  fin();
}, 3001);
// Se programa para ejecutarse después de 3 segundos
// Se ejecuta inmediatamente después de inicio()

//*¿Por qué "Fin del programa" aparece antes que el mensaje con retraso?
//Porque setTimeout no detiene el flujo del programa. Solo agenda la tarea para más tarde.

//¿JavaScript ejecutó el código en orden?
//Sí, pero las tareas asíncronas como setTimeout se manejan aparte, en una cola de eventos.

//¿Qué significa que JavaScript sea monohilo?
//Que solo tiene un hilo de ejecución principal. No puede hacer dos cosas a la vez, pero puede delegar tareas (como esperar 3 segundos) y seguir con lo demás.
//______________________________________//
//______________________________________//

//EJERCICIO 2//

function procesar(numero, callback) {
  setTimeout(() => {
    callback(numero * 2);
  }, 2000);
}
procesar(5, (resultado) => {
  console.log('Resultado:', resultado);
});

//¿Qué pasaría si eliminamos el setTimeout?
//Si eliminas el setTimeout y dejas la función de impresión directamente en el flujo, el código se vuelve totalmente síncrono.

//¿Por qué el callback se ejecuta después?
//El callback (la función que está dentro del setTimeout) se ejecuta después por el funcionamiento de la Cola de Tareas (Callback Queue)

//¿Qué ventaja tiene usar callbacks en procesos demorados?
//La ventaja principal es la Eficiencia y la Fluidez (No Bloqueo)
