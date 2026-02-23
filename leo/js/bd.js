// bd.js

const getLocalStorage = () => JSON.parse(localStorage.getItem("tasks")) || [];

const setLocalStorage = (tasks) =>
  localStorage.setItem("tasks", JSON.stringify(tasks));

const resetDataBase = () => localStorage.removeItem("tasks");

const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    // limpiamos de datos
    return data.map(({ id, title, completed }) => ({
      id: id + Date.now(),
      descripcion: title,
      estado: !completed,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};

const firstFetchApp = async () => {
  const dataLocal = getLocalStorage();

  if (dataLocal.length === 0) {
    const apiData = await getData();
    return apiData;
  }

  return dataLocal;
};

export { getLocalStorage, setLocalStorage, firstFetchApp };
