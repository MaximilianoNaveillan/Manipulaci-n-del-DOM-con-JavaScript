function inicio() {
  console.log('Inicio del programa');
}
function fin() {
  console.log('Fin del programa');
}
inicio();

setTimeout(() => {
  console.log('Mensaje con retraso');
  fin();
}, 3000);

//Ejercicio Callbacks Asincronos//

// Definimos la función que recibe un número y un callback
function procesar(numero, callback) {
  console.log('Procesando número...');

  // Simulamos una operación que demora 2 segundos
  setTimeout(() => {
    let resultado = numero * 2;

    // Llamamos al callback pasando el resultado
    callback(resultado);
  }, 2000);
}

// Llamamos a la función pasando un número y un callback
procesar(5, (resultado) => {
  console.log('Resultado procesado:', resultado);
});
