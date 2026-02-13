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
document.getElementById('miElemento').textContent = 'Contenido actualizado';

// setAtribute (Ideal para atributos personalizados)
document.querySelector('#miEnlace').setAttribute('href', 'https://homer.sii.cl');

// ---- 3 .- Data ATRIBUIBUTES (dataset) ------

const btn = document.getElementById('miBoton');
btn.dataset.estado = 'inactivo';
console.log('ID del boton:', btn.database.id);
