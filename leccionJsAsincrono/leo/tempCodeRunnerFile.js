//ejercicio 1
const obtenerUsuario = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5;

      if (exito) {
        resolve("👤 Usuario encontrado");
      } else {
        reject("❌ Error: Usuario no encontrado");
      }
    }, 2000);
  });
};

obtenerUsuario()
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error));

  
//ejercicio 2
const cargarUsuario = () => {
  return new Promise(() => {
    setTimeout(() => {
      console.log("Todos Los usuarios cargados");
    }, 2000);
  });
};

const cargarPedidos = () => {
  return new Promise(() => {
    setTimeout(() => {
      console.log("Todos Los pedidos cargados");
    }, 3000);
  });
};

const cargarMensajes = () => {
  return new Promise(() => {
    setTimeout(() => {
      console.log("Todos Los mensajes cargados");
    }, 1000);
  });
};

Promise.all([cargarUsuario(), cargarPedidos(), cargarMensajes()])
  .then(() => console.log("✅ Todos los datos cargados"))
  .catch((error) => console.error(error));