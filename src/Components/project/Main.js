import { Component } from "react";
import User from "./user";
import './style.css'
import AddUser from "./adduser";

import { search_All_Users, Func_AddUser, Helep_Array, DeleteItems, MarkTaskComplete, Func_UpdateUser } from "./All_Help_synchrony_Function";
import { GetAllUsers, GetAllTodos, GetAllPosts } from "./utils";

import Todos from "./todos";
import Posts from "./posts";


export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            users: [],  // --> Arary users
            helpUsers: [], //--> Present All  items The Searched Users 
            todos: [],
            posts: [],
            conterID: "", 
            searchInput: "",
            IsIDdone: false, //--> Boolean
            display: false,   //--> Boolean                               
        }
    }

    //--> Initilizing Arrays at Main Mounting
    async componentDidMount() {
        const users = await GetAllUsers();
        const todos = await GetAllTodos();
        const posts = await GetAllPosts();

        this.setState({ helpUsers: users, users, todos, posts });
    }

    //--> when  items search input changes 
    handleChange = async (e) => {
        const { value } = e.target;
        // -->returns new array ,only the users that include the search value 
        const users = await search_All_Users(this.state.users, value);
        this.setState({ helpUsers: users, searchInput: value }); 
    }

    //==> delete user 
    deleteUser = (id) => {
     
        const users = DeleteItems([...this.state.users], id);
        const helpUsers = DeleteItems([...this.state.helpUsers], id)  
        if (this.state.conterID == id)
            this.setState({ IsIDdone: false })  

        this.setState({ users, helpUsers }) 
    }

    //---> click on the Update user 
    updateUser = (userObj) =>  {

        const newUsersSearch = Func_UpdateUser(this.state.helpUsers, userObj); 
        const newUsers = Func_UpdateUser(this.state.users, userObj)

        this.setState({ helpUsers: newUsersSearch, users: newUsers });
    }

    // -->click on to add a new user items 
    handleAddUser = async (obj) => {
    
        const newUsers = Func_AddUser(this.state.users, obj)
      
        const helpUsers = await search_All_Users(newUsers, this.state.searchInput);

        this.setState({ users: newUsers, helpUsers, display: false, IsIDdone: false })
    }

  //---> 
    //  Occures when you click on one of id.
    //  Changing the IsIDdone to true in order to Present Todos And Posts.
    //  Also Saving the id that pressed in order to Change the background of the user
    
    displayDetails = (id) => {
        this.setState({ IsIDdone: true, conterID: id, display: false }); 
    }

    //-->back to main // hidinig
    cancelAddUser = () => {
        this.setState({ display: false, IsIDdone: false })  
    }

  // --> boolean-->Present
    markCompleteTask = (id) => {
        const todos = MarkTaskComplete(this.state.todos, id);
        this.setState({ todos });
    }
  // Add a new posts
    add_To_Post = (newPost) => {
        const posts = Helep_Array(this.state.posts, newPost);
        this.setState({ posts })
    }
  // Add a new toods
    add_for_Todo = (newTodo) => {
        const todos = Helep_Array(this.state.todos, newTodo);
        this.setState({ todos })
    }

    render() {
        const users = this.state.helpUsers.map((user, index) => {
            return (<User key={index} user={user} conterID={this.state.conterID} AllArray_todos={this.state.todos} delete={this.deleteUser} update={this.updateUser} postsAndTodos={this.displayDetails} Currentarray={this.state.helpUsers} />);
        });
        return (<div id="main">

            <div id="search"    >
                <input type="text" placeholder=" Search.." onChange={this.handleChange} />
                <button id="adduser" onClick={() => this.setState({ display: true, conterID: "", IsIDdone: false })}>Add</button>
            </div>
            <div id="AllusersComponnets">
                {users}
            </div>
         {/* --> Boolean--> Clicked on Add User Button,if return Yes Present the AddUser else the Todos&Posts */}
            {this.state.display ?<AddUser unvisiblity={this.cancelAddUser} addItems={this.handleAddUser} display={this.state.display} /> :
                <div style={{ width: "500px", height: "700px", position: "absolute", top: "5px", right: "50px" }}>
                    <Todos todos={this.state.todos} userId={this.state.conterID} markComplete={this.markCompleteTask} ISvisibility={this.state.IsIDdone} add_for_Todo={this.add_for_Todo} />
                    <Posts posts={this.state.posts} userId={this.state.conterID} ISvisibility={this.state.IsIDdone} add_To_Post={this.add_To_Post} />
                </div>}

        </div>)
    }
}