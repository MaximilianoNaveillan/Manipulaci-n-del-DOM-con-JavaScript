/***************************************************
 * TaskFlow - Gestor de Tareas
 * app.js
 * -------------------------------------------------
 * - POO con clases Tarea y GestorTareas
 * - Uso de ES6 (let/const, arrow functions, template literals)
 * - Manipulación del DOM y eventos
 * - Asincronía (setTimeout, setInterval, fetch)
 * - Almacenamiento en localStorage
 ***************************************************/

/* ===========================
   Clase Tarea (POO)
   =========================== */
class Tarea {
  /**
   * Representa una tarea individual.
   * @param {number} id - Identificador único de la tarea.
   * @param {string} descripcion - Texto descriptivo de la tarea.
   */
  constructor(id, descripcion) {
    this.id = id;
    this.descripcion = descripcion;
    // Estado inicial de la tarea: pendiente
    this.estado = 'pendiente';
    // Fecha de creación (formato legible)
    this.fechaCreacion = new Date().toLocaleString();
  }

  /**
   * Cambia el estado de la tarea entre 'pendiente' y 'completada'.
   */
  cambiarEstado() {
    this.estado = this.estado === 'pendiente' ? 'completada' : 'pendiente';
  }
}

/* ===========================
   Clase GestorTareas
   =========================== */
class GestorTareas {
  constructor() {
    // Array donde se almacenan las tareas en memoria
    this.tareas = [];
  }

  /**
   * Agrega una nueva tarea al gestor.
   * @param {string} descripcion - Descripción de la nueva tarea.
   */
  agregarTarea(descripcion) {
    // Usamos Date.now() para generar un id único
    const id = Date.now();
    const nuevaTarea = new Tarea(id, descripcion);
    this.tareas.push(nuevaTarea);
    this.guardarEnLocalStorage();
  }

  /**
   * Elimina una tarea por id.
   * @param {number} id - Identificador de la tarea a eliminar.
   */
  eliminarTarea(id) {
    // filter devuelve todas las tareas cuyo id sea distinto al recibido
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
    this.guardarEnLocalStorage();
  }

  /**
   * Cambia el estado de una tarea por id.
   * @param {number} id - Identificador de la tarea a actualizar.
   */
  cambiarEstadoTarea(id) {
    const tarea = this.tareas.find((tarea) => tarea.id === id);
    if (tarea) {
      tarea.cambiarEstado();
      this.guardarEnLocalStorage();
    }
  }

  /**
   * Guarda el array de tareas en localStorage.
   */
  guardarEnLocalStorage() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  /**
   * Carga las tareas desde localStorage al iniciar la app.
   * Se reconstruyen como instancias de la clase Tarea.
   */
  cargarDesdeLocalStorage() {
    const datos = JSON.parse(localStorage.getItem('tareas')) || [];
    this.tareas = datos.map((t) => new Tarea(t.id, t.descripcion));
  }
}

/* ===========================
   Instancias y referencias DOM
   =========================== */

// Creamos el gestor y cargamos las tareas guardadas (si existen)
const gestor = new GestorTareas();
gestor.cargarDesdeLocalStorage();

// Referencias a elementos del DOM
const formulario = document.getElementById('formulario');
const listaTareas = document.getElementById('lista-tareas');
const inputTarea = document.getElementById('tarea');

/* ===========================
   Manejo de eventos
   =========================== */

/**
 * Evento submit del formulario:
 * - Evita recarga de página.
 * - Valida que el input no esté vacío.
 * - Agrega la tarea al gestor.
 * - Refresca la lista en pantalla.
 */
formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const descripcion = inputTarea.value.trim();

  // Validamos que haya texto
  if (!descripcion) {
    alert('Por favor, escribe una descripción para la tarea.');
    return;
  }

  gestor.agregarTarea(descripcion);
  mostrarTareas();
  inputTarea.value = '';
});

/* ===========================
   Funciones para el DOM
   =========================== */

/**
 * Pinta todas las tareas en la lista <ul>.
 * - Limpia el contenido actual.
 * - Crea un <li> por cada tarea.
 * - Añade botones de "Cambiar Estado" y "Eliminar" funcionales.
 */
function mostrarTareas() {
  // Limpiamos la lista antes de repintar
  listaTareas.innerHTML = '';

  // Recorremos el array de tareas
  gestor.tareas.forEach((tarea) => {
    // Creamos elementos HTML
    const li = document.createElement('li');
    const span = document.createElement('span');
    const btnCambiar = document.createElement('button');
    const btnEliminar = document.createElement('button');

    // Texto principal de la tarea: descripción + estado
    span.textContent = `${tarea.descripcion} - ${tarea.estado}`;

    // Botón para cambiar estado
    btnCambiar.textContent = 'Cambiar Estado';
    btnCambiar.addEventListener('click', () => {
      cambiarEstado(tarea.id);
    });

    // Botón para eliminar tarea
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () => {
      eliminarTarea(tarea.id);
    });

    // Insertamos elementos en el <li>
    li.appendChild(span);
    li.appendChild(btnCambiar);
    li.appendChild(btnEliminar);

    // Podemos agregar un pequeño efecto al pasar el mouse (interactividad extra)
    li.addEventListener('mouseover', () => {
      li.style.backgroundColor = '#f0f0f0';
    });
    li.addEventListener('mouseout', () => {
      li.style.backgroundColor = 'transparent';
    });

    // Agregamos el <li> a la lista
    listaTareas.appendChild(li);
  });
}

/**
 * Cambia el estado de una tarea y repinta la lista.
 * @param {number} id - Identificador de la tarea a actualizar.
 */
function cambiarEstado(id) {
  gestor.cambiarEstadoTarea(id);
  mostrarTareas();
}

/**
 * Elimina una tarea y repinta la lista.
 * @param {number} id - Identificador de la tarea a eliminar.
 */
function eliminarTarea(id) {
  gestor.eliminarTarea(id);
  mostrarTareas();
}

/* ===========================
   Asincronía
   =========================== */

/**
 * Simula un retardo al inicio de la aplicación (por ejemplo,
 * como si cargara datos desde un servidor).
 */
setTimeout(() => {
  console.log('Simulando retardo inicial de la aplicación...');
}, 2000);

/**
 * Muestra cada cierto tiempo un mensaje en consola,
 * a modo de contador o recordatorio.
 */
setInterval(() => {
  console.log(`Tareas actuales: ${gestor.tareas.length}`);
}, 5000);

/* ===========================
   Consumo de API (fetch)
   =========================== */

/**
 * Ejemplo de función asíncrona para obtener tareas de una API externa.
 * Aquí solo se muestra en consola, pero podrías integrarlas a la app.
 */
const obtenerTareasAPI = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = await response.json();
    console.log('Tareas obtenidas desde la API:', data);
  } catch (error) {
    console.error('Error al obtener datos desde la API:', error);
  }
};

// Llamamos a la función para probar el consumo de API
obtenerTareasAPI();

/* ===========================
   Inicialización de la vista
   =========================== */

// Pintamos las tareas que haya en localStorage al cargar la página
mostrarTareas();
