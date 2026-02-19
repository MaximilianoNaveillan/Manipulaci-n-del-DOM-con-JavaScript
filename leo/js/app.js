// ----------------------- VARIABLES GLOBALES
//tareas
let tareas = [];
let tareasActivas = [];

//--------------- CLASE TAREA
class Tarea {
  constructor(descripcion, estado = true) {
    this.id = Date.now();
    this.descripcion = descripcion;
    this.estado = estado;
  }
}

//guardar Tarea
Tarea.prototype.guardarTarea = function () {
  tareas.push(this);
  tareasActivas.push(this);
};

//cambiar estado de la tarea
Tarea.prototype.cambiarEstado = function () {
  this.estado = !this.estado;
  tareas.filter((tarea) => {
    if (tarea.id !== this.id) {
      return tarea;
    }
  });

  this.guardarTarea();
};

//editar a la tarea
Tarea.prototype.editarTarea = function (nuevaDescripcion) {
  this.descripcion = nuevaDescripcion;
  tareas.filter((tarea) => {
    if (tarea.id !== this.id) {
      return tarea;
    }
  });

  this.guardarTarea();
};

//borrar a la tarea
Tarea.prototype.borrarTarea = function () {
  tareas = tareas.filter((tarea) => {
    if (tarea.id !== this.id) {
      return tarea;
    }
  });
  tareasActivas = tareasActivas.filter((tarea) => {
    if (tarea.id !== this.id) {
      return tarea;
    }
  });
};

// QUERY SELECTOR
const containerCards = document.querySelector(".container-cards");

//FORMULARIO
//tarea
const formularioTarea = document.querySelector(".formTarea");
const inputTarea = document.querySelector(".input-01-tarea");

//btns
const btnCrearTarea = document.querySelector(".btnCrearTarea");

//modals
const ModalCrearTarea = document.querySelector(".modal-01");

//EVENTO QUERY SELECTOR
btnCrearTarea.addEventListener("click", () => {
  ModalCrearTarea.classList.toggle("modalOn");
});

formularioTarea.addEventListener("submit", (e) => {
  e.preventDefault();
  const desc = inputTarea.value.trim();

  if (!desc) return alert("Debes ingresar una tarea");

  const nuevaTarea = new Tarea(desc);

  nuevaTarea.guardarTarea();
  inputTarea.value = "";
  ModalCrearTarea.classList.remove("modalOn");
  mostrarTareas();
});

//QUERY INNERHTML
const mostrarTareas = () => {
  containerCards.innerHTML = tareasActivas
    .map(
      (tarea) => `
      <div class="card" data-id="${tarea.id}">
      <button class="btnBorrar">X</button>
        <p>${tarea.descripcion}</p>
        <div class="actions">
          <button class="btnEditar">Editar</button>
          <button class="btnCompletar">Estado</button>
        </div>
      </div>
    `,
    )
    .join("");
};
