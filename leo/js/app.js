import { getLocalStorage, setLocalStorage, firstFetchApp } from "./bd.js";
// ----------------------- VARIABLES GLOBALES
//tareas
let tareas = [];
let tareasActivas = [];
let navSelect = ""

const initApp = async () => {
  const dataLocal = getLocalStorage();

  //verificamos si tenemos tareas en el localStorage
  if (dataLocal.length > 0) {
    tareas = dataLocal;
    tareasActivas = [...tareas];
  };

  // Obtenemos las tareas de la API
  const data = await firstFetchApp();
  // Convertimos a instancias reales
  tareas = data.map((item) => {
    const tarea = new Tarea(item.descripcion, item.estado);
    tarea.id = item.id;
    return tarea;
  });

  tareasActivas = [...tareas];

  // 🔥 AHORA sí guardamos ya bien estructurado
  setLocalStorage(tareas);

  mostrarTareas();

};

initApp();

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
  tareasActivas = [...tareas].reverse();
  setLocalStorage(tareas);
  mostrarTareas();
};

//cambiar estado de la tarea
Tarea.prototype.cambiarEstado = function () {
  this.estado = !this.estado;
  if (navSelect === "pendientes") {
    tareasActivas = tareas.filter((tarea) => tarea.estado);
    tareasActivas.reverse();
  }
  setLocalStorage(tareas);
};

//editar a la tarea
Tarea.prototype.editarTarea = function (nuevaDescripcion) {
  this.descripcion = nuevaDescripcion;
  setLocalStorage(tareas);
};

//borrar a la tarea
Tarea.prototype.borrarTarea = function (deleteID) {
  tareas = tareas.filter((t) => t.id !== deleteID);
  tareasActivas = [...tareas];
  controladorDeFiltro(navSelect);
  setLocalStorage(tareas);
};

//MANEJADOR DE TAREAS POR ID
const obtenerTarea = (id) => {
  return tareas.find((tarea) => {
    return tarea.id === id;
  });
};

// QUERY SELECTOR
const containerCards = document.querySelector(".container-cards");

//FORMULARIO
//tarea
const formularioTarea = document.querySelector(".formTarea");
const inputTarea = document.querySelector(".input-01-tarea");

//editar
const formEditarTarea = document.querySelector(".formEditarTarea");
const inputEditar = document.querySelector(".input-02-tarea");

let tareaEditandoID = null;

//btns
const btnCrearTarea = document.querySelector(".btnCrearTarea");

//modals
const ModalCrearTarea = document.querySelector(".modal-01");
const ModalEditarTarea = document.querySelector(".modal-02");
const btnCerrarModal = document.querySelector(".btnCerrarModal");
const btnCerrarModal02 = document.querySelector(".btnCerrarModal02");

// cerrar modals
const cerrarModal01 = () => ModalCrearTarea.classList.remove("modalOn");
const cerrarModal02 = () => ModalEditarTarea.classList.remove("modalOn");

//EVENTO QUERY SELECTOR
//modals
btnCerrarModal.addEventListener("click", cerrarModal01);
btnCerrarModal02.addEventListener("click", cerrarModal02);

btnCrearTarea.addEventListener("click", () => {
  ModalCrearTarea.classList.toggle("modalOn");
});

//EVENTO FORMULARIO

//CREAR TAREA

formularioTarea.addEventListener("submit", (e) => {
  e.preventDefault();
  const desc = inputTarea.value.trim();

  if (!desc) return alert("Debes ingresar una tarea");

  const nuevaTarea = new Tarea(desc);

  nuevaTarea.guardarTarea();
  inputTarea.value = "";
  ModalCrearTarea.classList.remove("modalOn");
});

//EVENTO CONT - CARDS
containerCards.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;

  const id = Number(card.dataset.id);
  const tarea = obtenerTarea(id);

  // ABRIR MODAL EDITAR
  if (e.target.classList.contains("btnEditar")) {
    tareaEditandoID = id;
    inputEditar.value = tarea.descripcion;
    ModalEditarTarea.classList.add("modalOn");
  }

  // BORRAR
  if (e.target.classList.contains("btnBorrar")) {
    tarea.borrarTarea(id);
    mostrarTareas();
  }

  // COMPLETAR
  if (e.target.classList.contains("btnCompletar")) {
    tarea.cambiarEstado();
    mostrarTareas();
  }
});

//EDITAR TAREA
formEditarTarea.addEventListener("submit", (e) => {
  e.preventDefault();

  const nuevaDescripcion = inputEditar.value.trim();
  if (!nuevaDescripcion) return;

  const tarea = obtenerTarea(tareaEditandoID);
  tarea.editarTarea(nuevaDescripcion);

  tareaEditandoID = null;
  inputEditar.value = "";
  cerrarModal02();
  mostrarTareas();
});

//MENU
const menuTabs = document.getElementById("menuTabs");
const navItems = menuTabs.querySelectorAll(".nav-item");
const indicator = menuTabs.querySelector(".tab-indicator");

let activeIndex = 0;

function moveIndicator(target, index) {
  const rect = target.getBoundingClientRect();
  const parentRect = menuTabs.getBoundingClientRect();
  const left = rect.left - parentRect.left;

  indicator.style.width = rect.width + "px";
  indicator.style.transform = `translateX(${left}px)`;

  activeIndex = index;
}

navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    navItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    moveIndicator(item, index);
  });
});

window.addEventListener("load", () => {
  const activeItem = menuTabs.querySelector(".nav-item.active");
  if (activeItem) moveIndicator(activeItem, 0);
});

//NAV LINKS
const menuLinks = document.querySelector(".menu");
menuLinks.addEventListener("click", (e) => {
  e.preventDefault();
  const filtro = e.target.getAttribute("data-filter");
  navSelect = filtro
  controladorDeFiltro(filtro);
})

//controlador de filtros
const controladorDeFiltro = (seleccion) => {
  if (seleccion === "todas") { 
    tareasActivas = tareas.reverse();
  } 

  if (seleccion === "pendientes") {

    tareasActivas = tareas.filter((tarea) => tarea.estado);
    tareasActivas.reverse();
  }

  if (seleccion === "completadas") {

    tareasActivas = tareas.filter((tarea) => !tarea.estado);
    tareasActivas.reverse();
  }
  mostrarTareas();
}



//QUERY INNERHTML
const mostrarTareas = () => {
  containerCards.innerHTML = tareasActivas
    .map(
      (tarea) => `
      <div class="card" data-id="${tarea.id}">
        <div class="card-header">
          <button class="btnBorrar">X</button>
        </div>
        <p class="card-body">${tarea.descripcion}</p>
        <div class="actions">
          <button class="btnEditar">Editar</button>
          ${
            tarea.estado
              ? '<button class="btnCompletar">Completar</button>'
              : '<p class="completada">Completada</p>'
          }

        </div>
      </div>
    `,
    )
    .join("");
};
