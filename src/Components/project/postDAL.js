import axios from "axios";

const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";

const getAllPosts = async () => (await axios.get(URL_POSTS)).data;
const getPostsById = async (id) => (await axios.get(`${URL_POSTS}?userId=${id}`)).data;


export {getAllPosts,getPostsById}