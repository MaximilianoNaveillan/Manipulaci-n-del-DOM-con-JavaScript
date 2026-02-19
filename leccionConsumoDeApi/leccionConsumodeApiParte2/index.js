/********************************************************************
 *  Consumo de APIs con JavaScript - Parte II
 *  AE5.2: Consumo de APIs de terceros con API Key y manejo de errores
 *
 *  OBJETIVOS:
 *  ✔ Explicar qué es una API de terceros
 *  ✔ Conectar usando API Key
 *  ✔ Procesar respuestas JSON
 *  ✔ Manejar errores y límites
 *  ✔ Aplicar APIs en proyectos reales
 ********************************************************************/

/********************************************************************
 * 1️⃣ API DE TERCEROS
 *
 * API desarrollada por una empresa externa que permite integrar
 * funcionalidades o datos en nuestra aplicación.
 *
 * Características:
 * - Intermediaria entre sistemas
 * - Ahorra tiempo de desarrollo
 * - Ofrece soluciones predefinidas
 *
 * Ejemplos: OpenWeather, Google Maps, Stripe, GitHub API
 ********************************************************************/

/********************************************************************
 * 2️⃣ AUTENTICACIÓN CON API KEY
 *
 * La mayoría de APIs requieren autenticación.
 *
 * Pasos:
 * 1. Registrarse en el servicio
 * 2. Obtener API Key
 * 3. Incluirla en la URL o headers
 ********************************************************************/

const API_KEY = '6c928b976192d3cc2d0d05519417c274'; // ⚠ No exponer claves reales en producción

/********************************************************************
 * 3️⃣ SOLICITANDO DATOS A UNA API (OpenWeather)
 *
 * Endpoint:
 * https://api.openweathermap.org/data/2.5/weather
 * ?q={ciudad}&appid={API_KEY}&units=metric
 *
 * Las respuestas suelen venir en JSON.
 ********************************************************************/

async function buscarClima(ciudad) {
  if (!ciudad) {
    console.warn('Ciudad requerida');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    // Validación de códigos HTTP
    if (!response.ok) {
      manejarErroresHTTP(response.status);
      return;
    }

    const data = await response.json();
    mostrarClima(data);
  } catch (error) {
    console.error('Error de red o servidor:', error);
  }
}

/********************************************************************
 * 4️⃣ PROCESAMIENTO DE RESPUESTA
 *
 * Manipulamos el JSON y lo integramos al DOM.
 ********************************************************************/

function mostrarClima(data) {
  console.log(`
    Ciudad: ${data.name}
    País: ${data.sys.country}
    Temp: ${data.main.temp}°C
    Viento: ${data.wind.speed} m/s
    Estado: ${data.weather[0].description}
  `);
}

/********************************************************************
 * 5️⃣ CÓDIGOS DE ESTADO HTTP
 *
 * 200 → OK
 * 201 → Created
 * 400 → Bad Request
 * 401 → Unauthorized (API Key inválida)
 * 403 → Forbidden
 * 404 → Not Found
 * 429 → Too Many Requests
 * 500 → Server Error
 ********************************************************************/

function manejarErroresHTTP(status) {
  if (status === 404) {
    console.error('Ciudad no encontrada');
  } else if (status === 401) {
    console.error('Error de autenticación (API Key)');
  } else if (status === 429) {
    console.error('Límite de peticiones alcanzado');
  } else {
    console.error('Error HTTP:', status);
  }
}

/********************************************************************
 * 6️⃣ LÍMITES Y RESTRICCIONES
 *
 * APIs imponen límites para evitar abusos:
 * - Requests por tiempo (rate limiting)
 * - Tamaño de datos
 * - Bloqueo temporal
 *
 * Ej: GitHub
 * 60 requests/hora sin autenticación
 * 5000 requests/hora con OAuth
 ********************************************************************/

/********************************************************************
 * 7️⃣ REINTENTAR SOLICITUD (RETRY)
 *
 * Útil ante fallos temporales o sobrecarga.
 ********************************************************************/

function fetchConReintento(url, intentos = 3) {
  return fetch(url).catch((error) => {
    if (intentos <= 1) throw error;
    return new Promise((resolve) =>
      setTimeout(() => resolve(fetchConReintento(url, intentos - 1)), 1000)
    );
  });
}

/********************************************************************
 * 8️⃣ GEOLOCALIZACIÓN (MEJORA UX)
 *
 * Permite obtener clima sin escribir ciudad.
 ********************************************************************/

function obtenerClimaPorGeolocalizacion() {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => mostrarClima(data))
      .catch((err) => console.error(err));
  });
}

/********************************************************************
 * 9️⃣ BUENAS PRÁCTICAS
 *
 * ✔ Validar response.ok
 * ✔ Manejar errores HTTP específicos
 * ✔ No exponer API Keys (usar backend)
 * ✔ Controlar límites (rate limiting)
 * ✔ Mostrar feedback al usuario (loader)
 * ✔ Validar datos antes de enviarlos
 ********************************************************************/

/********************************************************************
 * 🔟 DIFERENCIA: API PROPIA vs API DE TERCEROS
 *
 * API propia:
 * - Control total
 * - Mayor mantenimiento
 *
 * API de terceros:
 * - Rápida implementación
 * - Dependencia externa
 * - Límites y autenticación
 ********************************************************************/

/********************************************************************
 * 11️⃣ PREGUNTAS DE REFLEXIÓN
 *
 * ❓ Servicios diarios con APIs:
 *   Instagram, Uber, Google Maps, Spotify.
 *
 * ❓ ¿Por qué autenticación?
 *   Seguridad, control de uso y monetización.
 *
 * ❓ ¿Cómo mejora un proyecto?
 *   Clima en tiempo real, pagos online, mapas,
 *   autenticación social, notificaciones.
 ********************************************************************/

/********************************************************************
 * DEMO DE PRUEBA
 ********************************************************************/

// buscarClima("Buenos Aires");
// obtenerClimaPorGeolocalizacion();
