import { Component } from "react";
import {GetAllTodosById } from "./utils";

import AddTodo from "./adtodo";
import Todo from "./todo";

export default class Todos extends Component
{
    constructor()
    {
        super();
        this.state = {todos:[],userId:"" ,display:false,isDone:false}
    }

    async componentDidMount()
    {
        const todos = await GetAllTodosById(this.props.todos,this.props.userId);
        this.setState({userId:this.props.userId,todos,isDone:false,display:false})
    }
    
    /* Checking if the props send is diffrent from the last */
    async componentDidUpdate()
    {
        if(this.state.userId!=this.props.userId || this.state.isDone) /* if user Added also go inside the if */
        {
            const todos = await GetAllTodosById(this.props.todos,this.props.userId);
            this.setState({userId:this.props.userId,todos,isDone:false,display:false})
        }
    }

  // -->boolean--> if it was add
    changeDisplay = (Isflag) =>
    {
        if(Isflag)
            this.setState({isDone:true})
      
        this.setState({display:!this.state.display})
    }

    render()
    {
        
        return(<div style={{display:this.props.ISvisibility ? "block" : "none",position:"absolute",top:"10px",left:"50px"}}>
             {/* -->Boolean--> if Add Clicked  True show The Add user comonents  else  shows the Todos */}
            {(this.state.display) ?<AddTodo todos={this.props.todos} userId={this.state.userId} changeDisplay={this.changeDisplay} addTodo={this.props.add_for_Todo}/> :
            <div>
                <div id="title">
                    User {this.props.userId} todos
                    <button style={{borderRadius:"5px",marginLeft:"16rem",marginBottom:"3px"}} id="add-todo" onClick={() => this.changeDisplay()}>Add</button>
                </div>
                <div id="container_of_todos" style={{overflow:"scroll",overflowX:"hidden",display:"flex",flexDirection:"column",alignItems:"center",border:"2px blue solid",width:"400px",height:"325px"}}>
                    {this.state.todos.map((todo,index) =>
                    {
                        return(<Todo key={index} todo={todo} markComplete={this.props.markComplete}/>)
                    })}
                </div>
            </div>}

        </div>)
    }
}