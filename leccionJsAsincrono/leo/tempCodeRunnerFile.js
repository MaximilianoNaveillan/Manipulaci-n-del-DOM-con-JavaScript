const inicio = () => {
  setTimeout(() => {
    console.log("Inicio");
  }, 3000);
  fin();
};

const fin = () => {
  console.log("Fin del programa");
};


inicio();