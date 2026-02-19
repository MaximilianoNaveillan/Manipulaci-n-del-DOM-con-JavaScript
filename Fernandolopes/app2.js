// ESPERA COMPLETA A QUE TODO CARGA
window.addEventListener('load', function () {
  console.log('🚀 Iniciando app...');

  // Elementos con getElementById (MÁS SEGURO)
  const msgEl = document.getElementById('msg');
  const outEl = document.getElementById('out');
  const btnEl = document.getElementById('btn');
  const btnCacheEl = document.getElementById('btnCache');
  const btnClearEl = document.getElementById('btnClear');

  // SI FALTA CUALQUIER ELEMENTO → ALERTA ROJA
  if (!msgEl || !outEl || !btnEl) {
    document.body.innerHTML =
      '<div class="container mt-5"><div class="alert alert-danger"><h2>❌ ERROR: HTML incompleto</h2><p>Verifica que todos los IDs existan.</p></div></div>';
    return;
  }

  const STORAGE_KEY = 'ubicacion_gps';

  // MOSTRAR DATOS
  function mostrar(data, fuente) {
    msgEl.textContent = `Fuente: ${fuente}`;
    outEl.textContent = JSON.stringify(data, null, 2);
  }

  // GUARDAR EN LOCALSTORAGE
  function guardar(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  // CARGAR DE LOCALSTORAGE
  function cargar() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  // BOTÓN GPS
  btnEl.onclick = function () {
    if (!navigator.geolocation) {
      msgEl.textContent = '❌ Sin GPS en navegador';
      return;
    }

    btnEl.disabled = true;
    btnEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> GPS...';

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const data = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          precision: pos.coords.accuracy,
          fecha: new Date().toLocaleString('es-CL'),
        };
        guardar(data);
        mostrar(data, '🟢 GPS NUEVO');
        btnEl.disabled = false;
        btnEl.innerHTML = '<i class="fas fa-map-marker-alt mr-2"></i>Obtener GPS';
      },
      (err) => {
        const cache = cargar();
        if (cache) mostrar(cache, '🟡 CACHE');
        else msgEl.textContent = `❌ Error: ${err.message}`;
        btnEl.disabled = false;
        btnEl.innerHTML = '<i class="fas fa-map-marker-alt mr-2"></i>Obtener GPS';
      },
      { timeout: 10000 }
    );
  };

  // BOTÓN CACHE
  btnCacheEl.onclick = function () {
    const data = cargar();
    if (data) mostrar(data, '💾 LocalStorage');
    else msgEl.textContent = 'ℹ️ Sin datos guardados';
  };

  // BOTÓN LIMPIAR
  btnClearEl.onclick = function () {
    localStorage.removeItem(STORAGE_KEY);
    msgEl.textContent = '🗑️ Limpiado';
    outEl.textContent = 'Listo';
  };

  // INICIO
  const cacheInicio = cargar();
  if (cacheInicio) mostrar(cacheInicio, '💾 Al cargar');

  console.log('✅ ¡APP LISTA!');
});
