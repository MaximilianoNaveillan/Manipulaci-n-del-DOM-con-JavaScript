
const inicio = (callback) => {
  setTimeout(() => {
    console.log("Inicio del programa");
  }, 3000);
  callback();
};

const fin = () => {
  console.log("Fin del programa");
};


inicio(fin);
