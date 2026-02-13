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
const todosLosElementos = document.querySelectorAll('.elemento');

todosLosElementos.forEach((el, i) => console.log('Nodo', i, el.innerText));
console.log('solo el primer elemento', primerelemento.innerText);

// ------- MODIFICACIÓN DE ATRIBUTOS
