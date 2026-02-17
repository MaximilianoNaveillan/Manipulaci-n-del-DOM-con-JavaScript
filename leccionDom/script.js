// *****ENFOQUE IMPERATIVO (API del DOM)*****
// --- 1. ACCEDER A ELEMENTOS -------
// POR ID
const titulo = document.getElementById('titulo');
console.log(document);
console.log(titulo);
console.log(titulo.innerText);

// Por Clase (coleccion)
const parrafos = document.getElementsByClassName('descripcion');
console.log(parrafos);
console.log('Primer Párrafo', parrafos[0].innerText);
console.log('Segundo Párrafo', parrafos[1].innerText);

// Por etiqueta

const items = document.getElementsByTagName('li');
console.log(items);
console.log('Primer elemento de la lista', items[0].innerText);
console.log('Tatal <li>: ', items.length);

// querySelector (El primero) y queryselectorAll(Todos)
// uso de argumentos class = ".nombre-de-la-clase", id = "#id", tag="<etiqueta>"
const primerelemento = document.querySelector('.elemento');
const todosLosElementos = document.querySelectorAll('.elemento'); // retorna  --> un array []

todosLosElementos.forEach((el, i) => console.log('Nodo', i, el.innerText));
console.log('solo el primer elemento', primerelemento.innerText);

// ------- 2.- MODIFICACIÓN DE ATRIBUTOS CONTENIDO ----
// Propiedades directas:
const img = document.getElementById('miImagen');
img.src = 'https://pics.filmaffinity.com/the_penguins_of_madagascar-675250483-large.jpg';
img.style = 'width:200px';
img.alt = 'Pinguino de Madagascar';

// tectContent (solo texto)
document.getElementById('miElemento').textContent = 'Contenido actualizado para eliminar';

// setAtribute (Ideal para atributos personalizados)
document.querySelector('#miEnlace').setAttribute('href', 'https://homer.sii.cl');

// ---- 3 .- Data ATRIBUIBUTES (dataset) ------

const btn = document.getElementById('miBoton');

btn.dataset.estado = 'inactivo';

console.log('ID del boton:', btn.dataset.id);
console.log('Estado del boton:', btn.dataset.estado);

//----- 4  .-AGRAGAR Y ELEMINAR ELEMENTOS ---
// en este ejemplo agregare un párrafo:
const nuevop = document.createElement('p');
nuevop.textContent = 'Parrafo creado directamente';

// añadir un contenedor:
const contenedor = document.getElementById('contenedor');
contenedor.appendChild(nuevop);

// Insertar antes de una referencia
const ref = document.getElementById('elementoReferencia');
contenedor.insertBefore(document.createElement('hr'), ref);

// Eliminar un elemento
const aEliminar = document.getElementById('miElemento');
aEliminar.remove();

// --- 5. MODIFICAR ESTILOS Y CLASES ---
// Estilo directo (inline)
titulo.style.color = 'blue';
titulo.style.backgroundColor = '#ff0000';

// Manejo de clases (Recomendado)
titulo.classList.add('resaltado'); // Agrega
btn.classList.toggle('activo'); // Si no está, la pone; si está, la quita

/* 
Este enfoque es mas:
    .- Seguro
    .- Mas control granular
    .- No destuyr el DOM existente
Pero:
    .- Más lineas de código.
    .- Menos limpio visualmente    
*/

// *****ENFOQUE DECLARATIVO (API del DOM)*****

const nombre = 'Max';
const mensaje = `${nombre}, Es el Instructor`;
console.log(mensaje);

const app = document.getElementById('app');

const usuario = {
  nombre: 'Max',
  rol: 'Desarrollador FulStack',
  experiencia: 3,
};
const componente = {
  bcolor: '#007fff',
  color: '#ffff',
  fs: '3rem',
};

const style = `background-color:${componente.bcolor};font-size:${componente.fs};color:${componente.color}`;

app.innerHTML = `
<div class="card" style="${style}">
    <h2>${usuario.nombre}</h2>
    <p>Rol: ${usuario.rol}</p>
    <p>Experiencia: ${usuario.experiencia}</p>
</div>

`;

const tareas = [
  {
    id: 1,
    descripcion: 'Estudiar DOM',
    estado: 'Pendiente',
  },
  {
    id: 2,
    descripcion: 'Practicar POO',
    estado: 'Completado',
  },
];

console.table(tareas);

document.getElementById('render').innerHTML = tareas
  .map(
    (e) =>
      `<li class="${e.estado}">
            ${e.descripcion}
        <button data-id="${e.id}">Eliminar</button>
    </li>`
  )
  .join('');

/* 
        .- Más corto
        .- Más legible
        .- Ideal para renderizados completos (app)
        Pero:
        .- Re-renderiza todo
        .- Puede ser inseguro si no se validan los datos
        .- Pierdes referencia a los NODOS previos
  */
