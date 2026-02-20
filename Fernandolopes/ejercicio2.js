// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', function () {
  console.log('✅ DOM cargado - Inicializando demo de promesas');

  // Cargar previews de código
  cargarCodePreviews();

  // Conectar eventos a botones
  bindEventos();

  console.log('✅ App inicializada correctamente');
});

// ========== PROMESAS - EJERCICIO 1 ==========
function obtenerUsuario() {
  return new Promise((resolve, reject) => {
    const status = document.getElementById('status-ej1');
    status.textContent = '⏳ Esperando 2 segundos...';
    status.className = 'status bg-warning p-3 rounded loading';

    setTimeout(() => {
      const random = Math.random();
      console.log(`🎲 Ej1 - Número aleatorio: ${random.toFixed(2)}`);

      if (random >= 0.5) {
        resolve('👤 Usuario encontrado');
      } else {
        reject('❌ Error: Usuario no encontrado');
      }
    }, 2000); // Exactamente 2 segundos como pide el ejercicio
  });
}

// ========== PROMESAS - EJERCICIO 2 ==========
function cargarUsuario() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log('👤 Usuario cargado (2s)');
      resolve('👤 Usuario cargado');
    }, 2000)
  );
}

function cargarPedidos() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log('📦 Pedidos cargados (3s)');
      resolve('📦 Pedidos cargados');
    }, 3000)
  );
}

function cargarMensajes() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log('💬 Mensajes cargados (1s)');
      resolve('💬 Mensajes cargados');
    }, 1000)
  );
}

// ========== EVENTOS DE BOTONES ==========
function bindEventos() {
  // Botón Ejercicio 1
  document.getElementById('btn-ej1').addEventListener('click', ejecutarEjercicio1);

  // Botón Ejercicio 2
  document.getElementById('btn-ej2').addEventListener('click', ejecutarEjercicio2);

  console.log('🔗 Eventos conectados a botones');
}

function ejecutarEjercicio1() {
  console.log('🚀 Ejecutando Ejercicio 1...');

  obtenerUsuario()
    .then((msg) => {
      // ÉXITO
      const status = document.getElementById('status-ej1');
      status.innerHTML =
        '<i class="fas fa-check-circle text-success mr-2"></i><strong>✅ ÉXITO</strong>';
      document.getElementById('result-ej1').textContent = msg;
      console.log('✅ Ej1 completado:', msg);
    })
    .catch((err) => {
      // ERROR
      const status = document.getElementById('status-ej1');
      status.innerHTML =
        '<i class="fas fa-times-circle text-danger mr-2"></i><strong>❌ ERROR</strong>';
      document.getElementById('result-ej1').textContent = err;
      console.log('❌ Ej1 falló:', err);
    });
}

function ejecutarEjercicio2() {
  console.log('🚀 Ejecutando Ejercicio 2 - Promise.all()...');

  const status = document.getElementById('status-ej2');
  status.textContent = '⏳ Cargando en paralelo (máx 3s)...';
  status.className = 'status bg-info p-3 rounded loading';

  Promise.all([cargarUsuario(), cargarPedidos(), cargarMensajes()])
    .then((results) => {
      // TODAS completadas
      status.innerHTML =
        '<i class="fas fa-check-double text-success mr-2"></i><strong>✅ TODOS completados</strong>';
      const output = `✅ Todos los datos cargados!\n\n👤 ${results[0]}\n📦 ${results[1]}\n💬 ${results[2]}`;
      document.getElementById('result-ej2').textContent = output;
      console.log('✅ Ej2 completado:', results);
    })
    .catch((err) => {
      // ALGUNA falló
      status.innerHTML =
        '<i class="fas fa-exclamation-triangle text-danger mr-2"></i><strong>❌ ALGUNA falló</strong>';
      document.getElementById('result-ej2').textContent = `Error: ${err}`;
      console.log('❌ Ej2 falló:', err);
    });
}

// ========== PREVIEWS DE CÓDIGO ==========
function cargarCodePreviews() {
  // Código Ejercicio 1
  document.getElementById('code-ej1').textContent = `function obtenerUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numeroAleatorio = Math.random();
      if (numeroAleatorio >= 0.5) {
        resolve("👤 Usuario encontrado");
      } else {
        reject("❌ Error: Usuario no encontrado");
      }
    }, 2000);
  });
}

obtenerUsuario()
  .then(msg => console.log(msg))
  .catch(err => console.error(err));`;

  // Código Ejercicio 2
  document.getElementById('code-ej2').textContent = `function cargarUsuario() {
  return new Promise(r => setTimeout(() => r("👤 Usuario"), 2000));
}
function cargarPedidos() {
  return new Promise(r => setTimeout(() => r("📦 Pedidos"), 3000));
}
function cargarMensajes() {
  return new Promise(r => setTimeout(() => r("💬 Mensajes"), 1000));
}

Promise.all([cargarUsuario(), cargarPedidos(), cargarMensajes()])
  .then(() => console.log("✅ Todos los datos cargados"))
  .catch(err => console.error(err));`;

  console.log('📄 Previews de código cargados');
}
