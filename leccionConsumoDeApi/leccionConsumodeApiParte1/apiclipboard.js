// Espera a que el documento HTML cargue completamente
document.addEventListener('DOMContentLoaded', () => {
  // Obtener referencias a los elementos del HTML
  const textoCopiar = document.getElementById('textoCopiar'); // Input donde se escribe
  const textoPegar = document.getElementById('textoPegar'); // Input donde se pegará
  const btnCopiar = document.getElementById('btnCopiar'); // Botón copiar
  const btnPegar = document.getElementById('btnPegar'); // Botón pegar
  const mensaje = document.getElementById('mensaje'); // Párrafo de mensajes

  // ==============================
  // FUNCIÓN PARA COPIAR TEXTO
  // ==============================
  btnCopiar.addEventListener('click', () => {
    // Obtener el texto escrito por el usuario
    const texto = textoCopiar.value;

    // writeText() devuelve una promesa. Por que NO COPIA TEXTO AL INSTANTE ya que
    // depende de: Los permisos que haga el navegador para acceder al portapapeles de windows.
    // El tiempo utilizado por el usuario al interactuar cuando ingresa un texto.

    // Como no se ´puede saber en el momento si la operacion fue exitosa o no. writeText()
    // devuelve una promesa para posteriomente manejar ambos casos cuanso sea el momento de resolverse.
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        // Si la promesa se cumple, mostramos mensaje de éxito
        mensaje.textContent = 'Texto copiado correctamente ✔';
      })
      .catch((err) => {
        // Si ocurre un error, lo mostramos
        mensaje.textContent = 'Error al copiar: ' + err;
      });
  });

  // ==============================
  // FUNCIÓN PARA PEGAR TEXTO
  // ==============================
  btnPegar.addEventListener('click', async () => {
    // btnPegar.addEventListener('click', .... le dice al navegador: “Cuando el
    // usuario haga click en este botón, ejecuta la función asincronica que viene después”.
    // Esto permite usar await dentro de la función, lo que hace que el código espere
    // resultados de operaciones que toman tiempo (como leer del portapapeles) sin bloquear
    // todo el navegador.

    try {
      // try abre un bloque en donde ponemos el código que podría fallar.
      // Si ocurre un error dentro del bloque, el flujo se pasa automáticamente al bloque catch.

      // readText() es asíncrona → usamos await
      // navigator.clipboard.readText(); = Es un método asíncrono que lee el contenido del
      // portapapeles del sistema operativo.

      // await= hace que la ejecución espere hasta que el navegador termine de leer el texto y lo devuelva.
      const texto = await navigator.clipboard.readText();

      // Colocamos el texto leído en el segundo input
      textoPegar.value = texto;

      // Mensaje de confirmación
      mensaje.textContent = 'Texto pegado correctamente ✔';
    } catch (err) {
      // Si ocurre cualquier error al leer el portapapeles (por ejemplo, permisos
      // denegados o navegador no compatible), el flujo de ejecución del programa se va aquí.
      mensaje.textContent = 'Error al pegar: ' + err; // err -> contiene información sobre el error ocurrido. Es decir "err" captura el error ocurrido y lo muestra.
    }
  });
});
