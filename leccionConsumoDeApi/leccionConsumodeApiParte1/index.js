/********************************************************************
 *  Consumo de APIs con JavaScript - Parte I
 *  AE5.1: Uso de XHR y Fetch API para consumir APIs externas
 *
 *  OBJETIVOS:
 *  ✔ Entender qué es una API
 *  ✔ Diferenciar tipos de APIs
 *  ✔ Realizar solicitudes HTTP (GET, POST, PUT, DELETE)
 *  ✔ Usar XHR y Fetch
 *  ✔ Manejar errores correctamente
 *  ✔ Integrar datos al DOM dinámicamente
 ********************************************************************/

/********************************************************************
 * 1️⃣ ¿QUÉ ES UNA API?
 *
 * API (Application Programming Interface) es un intermediario
 * que permite que dos sistemas se comuniquen entre sí.
 *
 * En el desarrollo web:
 * Navegador (Cliente)  →  Servidor  →  Base de Datos
 *
 * Las APIs permiten obtener datos sin recargar la página.
 ********************************************************************/

/********************************************************************
 * 2️⃣ TIPOS DE APIs
 *
 * - APIs del navegador:
 *   Ej: fetch(), geolocation, localStorage
 *
 * - APIs de terceros:
 *   Ej: Google Maps, Stripe, JSONPlaceholder
 *
 * - Librerías:
 *   Código reutilizable (ej: Axios, Lodash)
 *
 * - Frameworks:
 *   Estructuras completas (React, Angular, Vue)
 ********************************************************************/

/********************************************************************
 * 3️⃣ COMUNICACIÓN CLIENTE - SERVIDOR
 *
 * 1. El cliente envía una solicitud HTTP.
 * 2. El servidor responde con datos (normalmente JSON).
 * 3. El cliente procesa y muestra los datos.
 ********************************************************************/

/********************************************************************
 * 4️⃣ MÉTODOS HTTP
 *
 * GET    → Obtener datos
 * POST   → Enviar datos
 * PUT    → Modificar datos
 * DELETE → Eliminar datos
 ********************************************************************/

/********************************************************************
 * 5️⃣ ¿QUÉ ES AJAX?
 *
 * AJAX permite hacer solicitudes HTTP asincrónicas
 * sin recargar la página.
 *
 * Antes de AJAX → Cada acción recargaba toda la página.
 *
 * AJAX usa:
 * - XMLHttpRequest (XHR)
 * - Fetch API
 ********************************************************************/

/********************************************************************
 * ================================================================
 * 6️⃣ EJEMPLO CON XMLHttpRequest (XHR)
 * ================================================================
 *
 * Método tradicional para hacer solicitudes HTTP.
 * Usa eventos y callbacks.
 ********************************************************************/

function loadUsersWithXHR() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

  xhr.onload = function () {
    if (xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);
      renderUsers(users);
    } else {
      console.error('Error en la solicitud XHR');
    }
  };

  xhr.onerror = function () {
    console.error('Error de red');
  };

  xhr.send();
}

/********************************************************************
 * ================================================================
 * 7️⃣ EJEMPLO CON Fetch API (PROMESAS)
 * ================================================================
 *
 * Método moderno basado en Promesas.
 ********************************************************************/

function loadUsersWithFetch() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then((users) => {
      renderUsers(users);
    })
    .catch((error) => {
      console.error('Error con Fetch:', error);
    });
}

/********************************************************************
 * ================================================================
 * 8️⃣ FETCH CON async/await (FORMA MODERNA)
 * ================================================================
 *
 * Hace el código más legible.
 ********************************************************************/

async function loadUsersAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.error('Error async/await:', error);
  }
}

/********************************************************************
 * ================================================================
 * 9️⃣ RENDERIZAR DATOS EN EL DOM
 * ================================================================
 ********************************************************************/

function renderUsers(users) {
  const usersDiv = document.getElementById('users');
  usersDiv.innerHTML = '';

  users.forEach((user) => {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
    `;
    usersDiv.appendChild(card);
  });
}

/********************************************************************
 * ================================================================
 * 🔟 EJEMPLOS DE OTROS MÉTODOS HTTP
 * ================================================================
 ********************************************************************/

/* POST - Crear recurso */
async function createUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Juan Pérez',
      email: 'juan@email.com',
    }),
  });

  const data = await response.json();
  console.log('Usuario creado:', data);
}

/* PUT - Actualizar recurso */
async function updateUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Nombre Actualizado',
    }),
  });

  const data = await response.json();
  console.log('Usuario actualizado:', data);
}

/* DELETE - Eliminar recurso */
async function deleteUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'DELETE',
  });

  console.log('Usuario eliminado:', response.status);
}

/********************************************************************
 * ================================================================
 * 11️⃣ DIFERENCIAS ENTRE XHR Y FETCH
 * ================================================================
 *
 * Característica          XHR        Fetch
 * -------------------------------------------------
 * Soporte antiguo         ✔          ✖
 * Promesas                ✖          ✔
 * Más simple              ✖          ✔
 * Manejo de errores       Complejo   Intuitivo
 *
 * ✔ Usar Fetch para proyectos modernos
 * ✔ Usar XHR solo si necesitas compatibilidad muy antigua
 ********************************************************************/

/********************************************************************
 * ================================================================
 * 12️⃣ BUENAS PRÁCTICAS
 * ================================================================
 *
 * ✔ Siempre validar response.ok
 * ✔ Manejar errores con try/catch
 * ✔ No exponer claves API en frontend
 * ✔ Usar HTTPS
 * ✔ Separar lógica de renderizado
 ********************************************************************/

/********************************************************************
 * ================================================================
 * 13️⃣ PREGUNTAS DE REFLEXIÓN
 * ================================================================
 *
 * ❓ ¿Cómo obtiene una web datos sin recargarse?
 * → Usando AJAX (Fetch o XHR)
 *
 * ❓ ¿Por qué algunas APIs requieren autenticación?
 * → Para proteger datos y controlar acceso.
 *
 * ❓ ¿Diferencia entre API REST y Google Maps?
 * → REST expone recursos vía HTTP.
 *   Google Maps es una API de terceros con servicios específicos.
 *
 * ❓ ¿Ventajas de Fetch sobre XHR?
 * → Código más limpio, Promesas, async/await.
 ********************************************************************/

/********************************************************************
 * ================================================================
 * 14️⃣ EVENT LISTENER PARA DEMO
 * ================================================================
 ********************************************************************/

document.getElementById('loadUsers')?.addEventListener('click', loadUsersAsync);

/*
Puedes cambiar por:
loadUsersWithFetch
loadUsersWithXHR
para mostrar las diferencias en clase.
*/
