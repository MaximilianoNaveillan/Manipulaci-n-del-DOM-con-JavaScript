// =================================================================================
// TUTORIAL DEL CÓDIGO: GESTOR DE TAREAS "TASKFLOW"
// =================================================================================

/*
 * -------------------------------------------
 * PARTE 1: LA PLANTILLA DE NUESTROS DATOS (CLASES)
 * -------------------------------------------
 * Usamos "clases" para crear moldes o plantillas para los objetos que usaremos.
 * Es una práctica de la Programación Orientada a Objetos (POO) que nos ayuda a
 * mantener el código ordenado y lógico.
 */

/**
 * @class Tarea
 * @description Representa una única tarea en nuestra lista.
 * Cada vez que creamos una "new Tarea()", se genera un objeto con estas propiedades.
 */
class Tarea {
    constructor(id, descripcion) {
        this.id = id; // Un número único para identificar la tarea (usaremos la fecha en milisegundos)
        this.descripcion = descripcion; // El texto de la tarea (ej: "Aprender JavaScript")
        this.estado = 'pendiente'; // El estado inicial siempre será "pendiente"
        this.fechaCreacion = new Date().toLocaleString(); // La fecha y hora de cuando se creó
    }

    /**
     * @method cambiarEstado
     * @description Cambia el estado de la tarea de "pendiente" a "completada" y viceversa.
     */
    cambiarEstado() {
        this.estado = this.estado === 'pendiente' ? 'completada' : 'pendiente';
    }
}

/**
 * @class GestorTareas
 * @description Es el "cerebro" de nuestra aplicación. Se encarga de administrar
 * toda la lista de tareas (agregarlas, eliminarlas, etc.).
 */
class GestorTareas {
    constructor() {
        // La lista de tareas empieza vacía.
        this.tareas = [];
    }

    /**
     * @method agregarTarea
     * @description Crea una nueva tarea y la añade a la lista.
     * @param {string} descripcion - El texto de la nueva tarea.
     */
    agregarTarea(descripcion) {
        const id = Date.now(); // Generamos un ID único basado en el momento actual.
        const nuevaTarea = new Tarea(id, descripcion); // Creamos la instancia de la tarea.
        this.tareas.push(nuevaTarea); // La añadimos a nuestra lista (array).
        this.guardarEnLocalStorage(); // Guardamos la lista actualizada.
    }
    
    /**
     * @method editarTarea
     * @description Busca una tarea por su ID y actualiza su descripción.
     * @param {number} id - El ID de la tarea a editar.
     * @param {string} nuevaDescripcion - El nuevo texto para la tarea.
     */
    editarTarea(id, nuevaDescripcion) {
        // `find` es un método de array que busca el primer elemento que cumple una condición.
        const tarea = this.tareas.find(tarea => tarea.id === id);
        // Si la tarea existe...
        if (tarea) {
            tarea.descripcion = nuevaDescripcion; // ...actualizamos su descripción.
        }
        this.guardarEnLocalStorage(); // Guardamos la lista actualizada.
    }

    /**
     * @method eliminarTarea
     * @description Elimina una tarea de la lista usando su ID.
     * @param {number} id - El ID de la tarea a eliminar.
     */
    eliminarTarea(id) {
        // `filter` es un método de array que crea una nueva lista con todos los
        // elementos que cumplen una condición. Aquí, creamos una nueva lista
        // que contiene todas las tareas EXCEPTO la que tiene el ID que queremos eliminar.
        this.tareas = this.tareas.filter(tarea => tarea.id !== id);
        this.guardarEnLocalStorage(); // Guardamos la lista actualizada.
    }

    /**
     * @method cambiarEstadoTarea
     * @description Busca una tarea por su ID y ejecuta su método para cambiar el estado.
     * @param {number} id - El ID de la tarea a modificar.
     */
    cambiarEstadoTarea(id) {
        const tarea = this.tareas.find(tarea => tarea.id === id);
        if (tarea) {
            tarea.cambiarEstado(); // Llama al método propio de la tarea.
        }
        this.guardarEnLocalStorage(); // Guardamos la lista actualizada.
    }

    /**
     * @method guardarEnLocalStorage
     * @description Guarda la lista completa de tareas en el almacenamiento local del navegador.
     * El `localStorage` solo guarda texto, por eso usamos `JSON.stringify` para convertir
     * nuestro array de objetos en un string con formato JSON.
     */
    guardarEnLocalStorage() {
        localStorage.setItem('tareas', JSON.stringify(this.tareas));
    }

    /**
     * @method cargarDesdeLocalStorage
     * @description Carga las tareas que estaban guardadas en el localStorage.
     * Esto se ejecuta cuando la página se abre por primera vez.
     */
    cargarDesdeLocalStorage() {
        // Obtenemos el string guardado. Si no hay nada, devolvemos un array vacío `[]`.
        const datos = JSON.parse(localStorage.getItem('tareas')) || [];
        // `map` crea un nuevo array. Por cada objeto de tarea simple que cargamos,
        // creamos una instancia completa de la clase `Tarea` para asegurarnos
        // de que los objetos tengan sus métodos (como `cambiarEstado`).
        this.tareas = datos.map(t => {
            const tarea = new Tarea(t.id, t.descripcion);
            tarea.estado = t.estado;
            tarea.fechaCreacion = t.fechaCreacion;
            return tarea;
        });
    }
}

// =================================================================================
// PARTE 2: INTERACCIÓN CON EL HTML (DOM) Y EVENTOS
// =================================================================================

// Creamos una única instancia de nuestro gestor. Toda la app usará este objeto.
const gestor = new GestorTareas();

// Obtenemos referencias a los elementos HTML con los que vamos a trabajar.
const formulario = document.getElementById('formulario');
const listaTareas = document.getElementById('lista-tareas');
const inputTarea = document.getElementById('tarea');

/**
 * @function mostrarTareas
 * @description Dibuja la lista de tareas en el HTML.
 * Se ejecuta cada vez que hay un cambio (agregar, editar, eliminar, etc.).
 */
function mostrarTareas() {
    // 1. Vaciar la lista actual para no duplicar tareas.
    listaTareas.innerHTML = '';
    // 2. Recorrer cada tarea en nuestro array de tareas.
    gestor.tareas.forEach(tarea => {
        // 3. Por cada tarea, creamos todos los elementos HTML necesarios.
        const li = document.createElement('li'); // El elemento de la lista <li>
        li.className = 'task-list__item';
        if (tarea.estado === 'completada') {
            li.classList.add('task-list__item--completed');
        }

        const span = document.createElement('span'); // El <span> para el texto
        span.className = 'task-list__text';
        span.textContent = tarea.descripcion;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'task-list__actions';

        // Botón para cambiar estado
        const btnCambiar = document.createElement('button');
        btnCambiar.className = 'task-list__button task-list__button--status';
        btnCambiar.textContent = tarea.estado === 'pendiente' ? 'Completar' : 'Reabrir';
        btnCambiar.addEventListener('click', () => {
            gestor.cambiarEstadoTarea(tarea.id);
            mostrarTareas(); // Volvemos a dibujar la lista para reflejar el cambio.
        });

        // --- ¡NUEVO! Botón para Editar ---
        const btnEditar = document.createElement('button');
        btnEditar.className = 'task-list__button task-list__button--edit';
        btnEditar.textContent = 'Editar';
        btnEditar.addEventListener('click', () => {
            // 1. Pedir al usuario el nuevo texto usando un `prompt`.
            const nuevaDescripcion = prompt("Edita tu tarea:", tarea.descripcion);
            // 2. Si el usuario escribió algo y no canceló...
            if (nuevaDescripcion !== null && nuevaDescripcion.trim() !== '') {
                // 3. ...llamamos al método del gestor para editar.
                gestor.editarTarea(tarea.id, nuevaDescripcion);
                // 4. Volvemos a dibujar la lista actualizada.
                mostrarTareas();
            }
        });

        // Botón para eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'task-list__button task-list__button--delete';
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.addEventListener('click', () => {
            gestor.eliminarTarea(tarea.id);
            mostrarTareas(); // Volvemos a dibujar la lista.
        });

        // 4. Añadimos los elementos creados al `<li>` y luego el `<li>` a la lista `<ul>`.
        li.appendChild(span);
        actionsDiv.appendChild(btnCambiar);
        actionsDiv.appendChild(btnEditar);
        actionsDiv.appendChild(btnEliminar);
        li.appendChild(actionsDiv);
        listaTareas.appendChild(li);
    });
}

// =================================================================================
// PARTE 3: INICIALIZACIÓN Y EVENTOS PRINCIPALES
// =================================================================================

// --- Evento Principal: Escuchar el envío del formulario ---
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenimos que la página se recargue al enviar el formulario.
    
    // Si el texto del input no está vacío...
    if (inputTarea.value.trim() !== '') {
        gestor.agregarTarea(inputTarea.value); // ...agregamos la nueva tarea.
        mostrarTareas(); // Actualizamos la vista.
        inputTarea.value = ''; // Limpiamos el campo de texto.
    }
});

// --- Bloque de Código Inicial ---
// Esto es lo que se ejecuta apenas carga el script.
document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar las tareas guardadas en el localStorage.
    gestor.cargarDesdeLocalStorage();
    // 2. Mostrar la lista de tareas inicial.
    mostrarTareas();

    // 3. (Opcional) Simular una carga o notificación.
    setTimeout(() => {
        // Esta alerta solo se muestra para simular una carga o una notificación asíncrona.
        // Puedes comentarla o eliminarla si no la necesitas.
        alert('Gestor de tareas cargado.');
    }, 1000);

    // 4. (Opcional) Cargar datos de una API externa.
    // Esto es un ejemplo de cómo la aplicación podría obtener datos de un servidor.
    // Los datos obtenidos solo se muestran en la consola del navegador.
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(data => {
            console.log('Tareas de ejemplo obtenidas desde una API externa:', data);
        })
        .catch(error => console.error('Error al obtener datos de la API:', error));
});
