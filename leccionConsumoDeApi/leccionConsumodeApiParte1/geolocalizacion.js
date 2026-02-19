// Función principal que se ejecuta cuando el usuario hace clic en el botón MOSTRAR UBICACION

function obtenerUbicacion() {
  // Obtenemos el contenedor donde mostraremos la información de las corrdenadas.
  // document -> Representa toda la página HTML cargada en el navegador y document
  // representa el objeto principal del DOM.

  const contenedor = document.getElementById('resultado');

  // Primero verificamos si ya existe una ubicación guardada en LocalStorage
  // ¿Que es LocalStorage?-> Es una especie de memoria dentro del navegador que
  // guarda datos para ser usados despues incluso si el usuario cierra la
  // página. No se envian al servidor y solo guarda texto o string en formato JSON (Clave-Valor)

  // IMPORTANTE: .getElementById('resultado'); -> Lo que hace es buscar en el archivo
  // geolicalizacion.html el elemento que tenga "resultado", si lo encuentra, lo muestra.
  // y lo guarda en la variable "contenedor" para ser usada. En caso contrario, devuelve NULL.

  let ubicacionGuardada = localStorage.getItem('ultimaUbicacion');

  // Si existe una ubicación guardada, se devuelve el valor guardado como texto o string.
  if (ubicacionGuardada) {
    // Convertimos el texto guardado (string) nuevamente a objeto
    let datos = JSON.parse(ubicacionGuardada);

    // Mostramos en pantalla la información almacenada
    contenedor.innerHTML = `
            <p><strong>Ubicación cargada desde LocalStorage</strong></p>
            <p>Latitud: ${datos.latitud}</p>
            <p>Longitud: ${datos.longitud}</p>
        `;
  } else {
    // Si NO hay ubicación guardada, verificamos si el navegador soporta geolocalización
    if (navigator.geolocation) {
      // Llamamos a la API de geolocalización. Esta función solicita permiso al usuario
      navigator.geolocation.getCurrentPosition(
        // "navigator.geolocation.getCurrentPosition" -> Es una API de geolicalización del
        // navegador utilizado y sirve para obtener la ubicación actual del usuario (GPS).
        function (position) {
          // Extraemos la latitud del objeto position
          let lat = position.coords.latitude;

          // Extraemos la longitud del objeto position
          let lon = position.coords.longitude;

          // Creamos un objeto con las coordenadas
          let ubicacion = {
            latitud: lat,
            longitud: lon,
          };

          // Convertimos el objeto a texto (string) ya que en el almacenamiento
          // interno del navegador o LocalStorage solo puede guardar strings
          localStorage.setItem('ultimaUbicacion', JSON.stringify(ubicacion));

          // Mostramos la información en pantalla
          contenedor.innerHTML = `
                        <p><strong>Ubicación obtenida del GPS</strong></p>
                        <p>Latitud: ${lat}</p>
                        <p>Longitud: ${lon}</p>
                    `;
        },

        // Función que se ejecuta si ocurre un error o el usuario niega el permiso
        function (error) {
          contenedor.innerHTML = `
                        <p style="color:red;">
                            No se pudo obtener la ubicación.
                            El usuario negó el permiso o ocurrió un error.
                        </p>
                    `;
        }
      );
    } else {
      // Mensaje si el navegador no soporta geolocalización

      // contenedor.innerHTML = Es una propiedad que permite modificar
      // el contenido HTML interno de ese elemento.
      // Es decir, Borra lo que había dentro del contenedor e inserta el
      // código HTML entre ` Y ` usado generalmente cuando ocurren errores.
      contenedor.innerHTML = `
                <p style="color:red;">
                    Tu navegador no soporta geolocalización.
                </p>
            `;
    }
  }
}
