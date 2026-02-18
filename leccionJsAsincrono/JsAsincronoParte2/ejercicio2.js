// Carga de Usuarios

// 1️⃣ Función cargarUsuario → tarda 2 segundos
function cargarUsuario() {
  // Esta función devuelve una promesa.
  return new Promise((resolve, reject) => {
    // Promise es un objeto que representa una operación asíncrona que eventualmente tendrá un resultado exitoso (resolve) o erroneo (reject)
    setTimeout(() => {
      // setTimeout simula una operación asíncrona (por ejemplo, una petición a un servidor) que tarda 2 seg. en completarse.
      const exito = true; // podemos cambiar a false para simular error
      if (exito) {
        // Si exito es true, se llama a resolve('👤 Usuario cargado'), la promesa se marca como cumplida.
        resolve('👤 Usuario cargado');
      } else {
        //Si exito es false, se llama a reject('❌ Error al cargar usuario'), la promesa se marca como error
        reject('❌ Error al cargar usuario');
      }
    }, 2000);
  });
}

// 2️⃣ Función cargarPedidos → tarda 3 segundos
function cargarPedidos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = false; // cambiar a false para simular error
      if (exito) {
        // Si exito es true, se llama a resolve('👤 Pedidos cargados'), la promesa se marca como cumplida.
        resolve('🛒 Pedidos cargados');
      } else {
        //Si exito es false, se llama a reject('❌ Error al cargar pedidos'), la promesa se marca como error
        reject('❌ Error al cargar pedidos');
      }
    }, 3000);
  });
}

// 3️⃣ Función cargarMensajes → tarda 1 segundo
function cargarMensajes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; // cambiar a false para simular error
      if (exito) {
        // Si exito es true, se llama a resolve('👤 Mensajes cargados'), la promesa se marca como cumplida.
        resolve('✉️ Mensajes cargados');
      } else {
        //Si exito es false, se llama a reject('❌ Error al cargar mensajes'), la promesa se marca como error
        reject('❌ Error al cargar mensajes');
      }
    }, 1000);
  });
}

// 4️⃣ Ejecutamos todas las promesas en paralelo con Promise.all
Promise.all([cargarUsuario(), cargarPedidos(), cargarMensajes()])
  //Recibe un array de promesas y se resuelve solo cuando todas las promesas se cumplen y se rechaza si alguna promesa falla.

  // .then((resultados) -> Se ejecuta si todas las promesas se resolvieron exitosamente.
  .then((resultados) => {
    // resultados es un array con los valores de cada promesa
    console.log('✅ Todos los datos cargados');
    console.log('Detalles:', resultados);
  })

  // .catch -> Captura cualquier error si al menos una promesa falla.
  .catch((error) => {
    // Si alguna promesa falla, se captura aquí, y contiene el valor de reject de la promesa que falló.
    console.error('⚠️ Ocurrió un error:', error);
  });
