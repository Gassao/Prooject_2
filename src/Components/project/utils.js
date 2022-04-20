import { getAllPosts } from "./postDAL";
import { getAllTodos } from "./todosDAL";
import { getAllUsers, getUserByID} from './userDAL';

//-->All Functions
export const GetAllUsers = () => getAllUsers();
export const GetAllPosts = () => getAllPosts();
export const GetAllTodos = () => getAllTodos();

//--> Getss the user by Id
export const GetUserById = (id) => getUserByID(id);

//  to Get All Todos of the id
export const GetAllTodosById = (todos,id) => 
{
    return todos.filter((todo) => todo.userId == id);
}


export const GetAllPostsById =  (posts,id) =>
{
    return  posts.filter((post) => post.userId == id);
}

 export const CheckTodos = (id,todos) =>
 {
    const todosUser = GetAllTodosById(todos,id);

    return todosUser.every((todo) => todo.completed);
 }


export const GetUserData = (usersArray,id) =>
{
    const user = usersArray.find((user) => user.id == id);

    return {
        street:user.address.street,
        city:user.address.city,
        zip:user.address.zipcode
    }
}

