// 🎯 EJERCICIO 1: Manejo de promesas básicas
// Función que devuelve una promesa simulando una petición API

function obtenerUsuario() {
  return new Promise((resolve, reject) => {
    // Simulamos 2 segundos de espera (como una petición real a servidor)
    setTimeout(() => {
      const numeroAleatorio = Math.random(); // Número entre 0 y 1
      console.log(`🔢 Número aleatorio generado: ${numeroAleatorio.toFixed(2)}`);

      if (numeroAleatorio >= 0.5) {
        // ✅ Éxito: Usuario encontrado
        resolve('👤 Usuario encontrado');
      } else {
        // ❌ Error: Usuario no encontrado
        reject('❌ Error: Usuario no encontrado');
      }
    }, 2000); // 2 segundos de delay
  });
}

// 🚀 EJECUTAMOS la promesa con .then() y .catch()
obtenerUsuario()
  .then((mensajeExito) => {
    console.log(mensajeExito); // Muestra el mensaje si se resuelve
  })
  .catch((mensajeError) => {
    console.error(mensajeError); // Maneja el error si se rechaza
  });

// 🎯 EJERCICIO 2: Ejecutar promesas en paralelo con Promise.all()

// Promesa 1: Carga usuario (2 segundos)
function cargarUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('👤 Usuario cargado');
    }, 2000);
  });
}

// Promesa 2: Carga pedidos (3 segundos)
function cargarPedidos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('📦 Pedidos cargados');
    }, 3000);
  });
}

// Promesa 3: Carga mensajes (1 segundo)
function cargarMensajes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('💬 Mensajes cargados');
    }, 1000);
  });
}

// 🚀 Ejecutamos TODAS en paralelo con Promise.all()
// El tiempo total será ~3 segundos (el más largo), NO 6 segundos secuenciales
Promise.all([cargarUsuario(), cargarPedidos(), cargarMensajes()])
  .then((resultados) => {
    console.log('✅ Todos los datos cargados');
    console.log('Resultados individuales:', resultados);
  })
  .catch((error) => {
    console.error('❌ Error en alguna carga:', error);
  });

fetch('https://api.usuarios.com/123')
  .then((response) => response.json())
  .then((user) => console.log(user))
  .catch((error) => console.error('API falló'));
