import { Component } from "react";


export default class AddTodo extends Component
{
    constructor()
    {
        super();
        this.state = {title:""}
    }
// Add a new todos after callback
    AddTodo = () =>
    {
        const newTodo = {
            userId:this.props.userId,
            id:this.props.todos.length+1,
            title:this.state.title,
            completed:false
        }
        this.props.changeDisplay(true); 
        this.props.addTodo(newTodo);
    }
    render()
    {
        return(<div style={{border:"1px black solid",width:"200px",height:"200px",position:"absolute",top:"50px",left:"125px",borderRadius:"10px",padding:"15px"}}>
            Title:<input type="text" onChange={(e) => this.setState({title:e.target.value})}/>
            <button onClick={this.AddTodo}>Add</button>
            <button style={{marginLeft:"10px",marginTop:"10px"}}onClick={() => this.props.changeDisplay(false)}>Cancel</button>
        </div>)
    }
}