import { Component } from "react"

export default class AddUser extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {name:"",email:""}
    }

    //-->  if we want Changes states according to the inputs
    handleChange = (e) =>
    {
        const {value} = e.target
        this.setState({[e.target.name]:value})
    }

   //-->after the callback add to itwms
    addUser = () =>
    {
        const newUser = {
            id:"",
            name:this.state.name,
            email:this.state.email,
            address:{
                city:"",
                street:"",
                zipcode:""
            }
        }
        this.props.addItems(newUser)
    }

    render()
    {
        return(<div style={{display:this.props.display?"block" : "none"}}>
            
            <div id="addUserBlock">
            <div id="adduser-title">Add New User </div>
                Name: <input type="text" name="name" onChange={this.handleChange}/> <br/>
                Email: <input type="text" name="email" onChange={this.handleChange}/> <br/>
                <button onClick={() => this.props.unvisiblity()}>Cancel</button>
                <button onClick={this.addUser}>Add</button>
            </div>

        </div>)
    }
}