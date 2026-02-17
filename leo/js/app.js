// libreria
import { v4 as uuidv4 } from "uuid";
console.log(uuidv4());

// ----------------------- VARIABLES GLOBALES
//tareas
let tareas = [];
let tareasActivas = [];

// MODAL
let modalIsOn = false;

// ----------------------- FUNCIONES MODAL

const isChangeModal = () => {
  modalIsOn = !modalIsOn;
  return modalIsOn;
}

//--------------- CLASE TAREA
class Tarea {
  constructor(descripcion, estado = true) {
    this.id = uuidv4();
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
const btnCrearTarea = document.querySelector(".btnCrearTarea");
const ModalCrearTarea = document.querySelector(".modalCrearTarea");

//EVENTO QUERY SELECTOR
btnCrearTarea.addEventListener("click", () => {
  
})


//QUERY INNERHTML
const mostrarTareas = () => {
  containerCards.innerHTML = tareasActivas
    .map((tarea) => `
      <div class="card">
        <p>${tarea.descripcion}</p>
        <div class="actions">
          <button class="btnEditar">Editar</button>
          <button class="btnBorrar">Borrar</button>
        </div>
      </div>
    `)
    .join("");
};
