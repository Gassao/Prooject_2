import axios from "axios";

const URL_TODOS = "https://jsonplaceholder.typicode.com/todos";


const getAllTodos = async () => (await axios.get(URL_TODOS)).data;
const getTodoById = async (id) => (await axios.get(`${URL_TODOS}?userId=${id}`)).data;



export {getAllTodos,getTodoById}