import { Component } from "react";
import OtherData from "./otherData";
import './style.css'
import { CheckTodos } from "./utils";
export default class User extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {user:{},id:"",name:"",email:"",address:{}, completed:false, display:false,ISbLock:false}  //ISbLock
    }

    /* to Gets  data */
    componentDidMount()
    {
        this.setState({user:this.props.user, name:this.props.user.name ,email:this.props.user.email , id:this.props.user.id})
    }
    
    //--> State Change 
    componentDidUpdate()
    {
        const isCompleted = CheckTodos(this.state.id,this.props.AllArray_todos); /* Returns if All the todos Completed */

        
        if(this.state.completed !== isCompleted)
            this.setState({completed:isCompleted})
     
        if(this.state.id != this.props.user.id)
            this.setState({email:this.props.user.email , name:this.props.user.name,id:this.props.user.id,backGround:false})
    }


    handleChange = (e) =>
    {
        const {name} = e.target;
        this.setState({[name]:e.target.value});
    }

  //--->Delete items
    deleteUser = () =>
    {
        this.props.delete(this.props.user.id);
    }

   //==> update Adress
    updateAddress = (obj) =>
    {
        this.setState({address:obj})
    }
//-->update adress, name and email
    updateUser = () =>
    {
        const user = {...this.state.user};
      
        user.address = this.state.address;
        user.name = this.state.name;
        user.email = this.state.email;
   
        this.props.update(user); // callback
    } 

    /* show Todos And Posts  */
    ChangeDisplay = () =>
    {
        this.props.postsAndTodos(this.state.id); /*Sending the id Pressed for the Mainpage to color it */
    }

    render()
    {
        const Isborder_Red_Green = this.state.completed ? "green" : "red";
        const WhenPressbackGround = this.props.conterID == this.state.id ? "rgb(219, 167, 127)" : "rgb(243, 217, 197)";

        return(<div id="Alluserscomponet" style={{borderColor:Isborder_Red_Green,backgroundColor:WhenPressbackGround}}>

        <span id="id" className="lee" onClick={this.ChangeDisplay}> ID: {this.props.user.id} </span><br/>

        <div id="Elementinputs">
            <div>
                Name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            </div>
            <div>
                Email:
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
            </div>
        </div>

        <div id="user-buttons_allClicks">
            <button onMouseOver={() => this.setState({ISbLock:true})} onClick={() =>this.setState({ISbLock:false})}>Other Data</button>
            <OtherData id={this.props.user.id} callback={this.updateAddress} class = {this.state.ISbLock ? "show" :"hide"} array={this.props.Currentarray}/>
            <button  onClick={this.updateUser}>Update</button>
            <button  onClick={this.deleteUser}>Delete</button>
        </div>
    </div>)
    }
}