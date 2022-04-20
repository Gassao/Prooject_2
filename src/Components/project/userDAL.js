import axios from "axios";

const URL_USERS = "https://jsonplaceholder.typicode.com/users";


const getAllUsers = async () => (await axios.get(URL_USERS)).data;

const getUserByID = async (id) => (await axios.get(`${URL_USERS}/${id}`)).data;



export {getUserByID,getAllUsers}