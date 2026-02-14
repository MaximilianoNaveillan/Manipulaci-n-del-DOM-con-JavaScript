// ============================================
// 🚀 TASKFLOW - PROYECTO INTEGRADOR MÓDULO 5
// POO + DOM + EVENTOS - SIN ERRORES
// ============================================

// 🏗️ CONSTRUCTOR TAREA (POO tradicional)
function Tarea(descripcion) {
  // Genera ID único usando timestamp actual
  this.id = new Date().getTime();
  // Guarda descripción de la tarea
  this.descripcion = descripcion;
  // Estado inicial: pendiente
  this.estado = 'pendiente';
}

// Método prototype para cambiar estado (toggle)
Tarea.prototype.cambiarEstado = function () {
  // Si está pendiente → completada, si no → pendiente
  this.estado = this.estado === 'pendiente' ? 'completada' : 'pendiente';
};

// 🏢 CONSTRUCTOR GESTOR TAREAS
function GestorTareas() {
  // Array que almacena todas las tareas
  this.tareas = [];
}

// Método para agregar nueva tarea
GestorTareas.prototype.agregarTarea = function (descripcion) {
  // Crea nueva instancia Tarea y la agrega al array
  this.tareas.push(new Tarea(descripcion));
};

// Método para eliminar tarea por ID
GestorTareas.prototype.eliminarTarea = function (id) {
  // Filtra el array dejando solo tareas con ID diferente
  this.tareas = this.tareas.filter(function (tarea) {
    return tarea.id !== id;
  });
};

// Método para cambiar estado de tarea específica
GestorTareas.prototype.cambiarEstado = function (id) {
  // Recorre array buscando tarea con ID específico
  for (var i = 0; i < this.tareas.length; i++) {
    if (this.tareas[i].id === id) {
      // Llama método cambiarEstado de esa tarea
      this.tareas[i].cambiarEstado();
      break; // Sale del bucle una vez encontrado
    }
  }
};

// Método para editar descripción de tarea específica
GestorTareas.prototype.editarTarea = function (id, nuevaDesc) {
  // Recorre array buscando tarea por ID
  for (var i = 0; i < this.tareas.length; i++) {
    if (this.tareas[i].id === id) {
      // Actualiza directamente la descripción
      this.tareas[i].descripcion = nuevaDesc;
      break;
    }
  }
};

// Método para obtener todas las tareas (requerido por consigna)
GestorTareas.prototype.obtenerTareas = function () {
  // Devuelve referencia al array de tareas
  return this.tareas;
};

// ============================================
// 🎯 INICIALIZACIÓN GLOBAL
// ============================================
var gestor = new GestorTareas(); // Crea instancia única del gestor

// ============================================
// 🖼️ FUNCIÓN RENDERIZAR TAREAS (DOM Manipulation)
// ============================================
function renderTareas() {
  // Obtiene referencia al <ul> contenedor
  var lista = document.getElementById('lista-tareas');
  // Limpia todo el contenido HTML anterior
  lista.innerHTML = '';

  // Obtiene array actual de tareas
  var tareas = gestor.obtenerTareas();

  // Bucle tradicional para crear cada elemento <li>
  for (var i = 0; i < tareas.length; i++) {
    var tarea = tareas[i];

    // Crea nuevo elemento <li>
    var li = document.createElement('li');
    // Asigna ID como atributo data-id
    li.setAttribute('data-id', tarea.id);

    // Aplica clase CSS según estado
    if (tarea.estado === 'completada') {
      li.className = 'completada';
    } else {
      li.className = 'pendiente';
    }

    // HTML interno con concatenación de strings
    li.innerHTML =
      '<span>' +
      tarea.descripcion +
      '</span>' +
      '<button class="btn-completar">✓</button>' +
      '<button class="btn-editar">✎</button>' +
      '<button class="btn-eliminar">×</button>';

    // Agrega <li> al final de la lista
    lista.appendChild(li);
  }
}

// ============================================
// 📝 EVENTO FORMULARIO (Agregar Tarea)
// ============================================
document.getElementById('form-tarea').onsubmit = function (e) {
  // Evita recarga completa de página
  e.preventDefault();

  // Obtiene input y limpia espacios
  var input = document.getElementById('input-tarea');
  var desc = input.value.trim();

  // Solo agrega si descripción no está vacía
  if (desc) {
    // Llama método del gestor
    gestor.agregarTarea(desc);
    // Actualiza vista DOM
    renderTareas();
    // Limpia campo input
    input.value = '';
  }
  // Retorna false para seguridad extra
  return false;
};

// ============================================
// 🖱️ EVENTO CLICKS (Delegación de Eventos)
// ============================================
document.getElementById('lista-tareas').onclick = function (e) {
  // Busca elemento <li> padre del botón clickeado
  var li = e.target.parentNode;

  // Verifica que sea un elemento <li>
  if (li.tagName !== 'LI') return;

  // Obtiene ID de la tarea desde data-id
  var id = parseInt(li.getAttribute('data-id'));
  // Obtiene clase del botón clickeado
  var clase = e.target.className;

  // ✅ BOTÓN COMPLETAR (✓)
  if (clase === 'btn-completar') {
    gestor.cambiarEstado(id);

    // ✅ BOTÓN EDITAR (✎)
  } else if (clase === 'btn-editar') {
    // Encuentra primer <span> (descripción)
    var span = li.getElementsByTagName('span')[0];
    // Pide nueva descripción al usuario
    var nuevaDesc = prompt('Editar tarea:', span.innerHTML);
    // Solo actualiza si usuario escribió algo
    if (nuevaDesc.trim()) {
      gestor.editarTarea(id, nuevaDesc.trim());
    }

    // ✅ BOTÓN ELIMINAR (×)
  } else if (clase === 'btn-eliminar') {
    gestor.eliminarTarea(id);
  }

  // Re-renderiza lista después de cualquier cambio
  renderTareas();
};

// ============================================
// 🚀 INICIALIZACIÓN (Al cargar página)
// ============================================
window.onload = function () {
  //Renderiza lista vacía al inicio
  renderTareas();
};
