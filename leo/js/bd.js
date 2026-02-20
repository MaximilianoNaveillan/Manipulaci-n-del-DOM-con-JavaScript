
const getLocalStorage = () => JSON.parse(localStorage.getItem("tasks")) || [];
const setLocalStorage = (tasks) => localStorage.setItem("tasks", JSON.stringify(tasks));

const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};