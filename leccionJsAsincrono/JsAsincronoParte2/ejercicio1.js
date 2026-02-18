// Obtener Usuarios

// 1️⃣ Creamos la función obtenerUsuario
function obtenerUsuario() {
  // 2️⃣ Devolvemos una promesa, que representa una funcion asincrona que puede cumplirse (resolve) o no (reject)
  return new Promise((resolve, reject) => {
    // Simulamos un retraso de 2 segundos
    setTimeout(() => {
      // 3️⃣ Generamos un número aleatorio entre 0 y 1
      const numeroAleatorio = Math.random();

      console.log('Número aleatorio generado:', numeroAleatorio); // Se imprime en consola el valor generado. Este número se usará para decidir si la promesa se cumple o falla.

      // 4️⃣ Si el número es mayor o igual a 0.5, resolvemos la promesa
      if (numeroAleatorio >= 0.5) {
        resolve('👤 Usuario encontrado');
      }
      // 5️⃣ Si es menor a 0.5, rechazamos la promesa
      else {
        reject('❌ Error: Usuario no encontrado');
      }
    }, 2000); // 2000ms = 2 segundos
  });
}

// 6️⃣ Consumimos la promesa usando .then() y .catch()
obtenerUsuario()
  .then((mensaje) => {
    // Se ejecuta sólo si la promesa fue resuelta (resolve)
    console.log('✅ Éxito:', mensaje);
  })
  .catch((error) => {
    // Se ejecuta sólo si la promesa fue rechazada (Reject)
    console.error('⚠️ Fallo:', error);
  });
