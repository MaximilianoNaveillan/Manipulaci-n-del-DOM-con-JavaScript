let textos = [];

//query selector
const formularioText = document.querySelector("#form");
const contenedor = document.querySelector("#contenedor");

// eventos del formulario
formularioText.addEventListener("submit", (e) => {
  // evita recarga de pagina
  e.preventDefault();
  //selecciona el input
  const input = document.querySelector("#input");

  //verificacion de que tenga datos 
  if (input.value.trim() === "") {
    alert("Debes ingresar un texto");
    return;
  }
  //obtiene el valor del input y le hace trim
  textos.push(input.value.trim());
  input.value = "";
  //renderiza el codigo en el html con el array
  renderizar();
});


//render del html
const renderizar = () => {
  // inyecta el codigo en el contenedor correspondiente seleccionado
  contenedor.innerHTML = textos
  //ejecuta un map para pasar por cada elemento eh inyectarlo en el elemento 
    .map(
      (text) => `
        <p>${text}</p>`,
    )
    .join("");
};
