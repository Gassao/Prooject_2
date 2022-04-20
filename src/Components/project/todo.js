import { Component } from "react";


export default class Todo extends Component
{
    render()
    {
        return(<div id="todo-Div" style={{textAlign:"left",border:"1.5px solid black",width:"350px",margin:"5px",padding:"5px"}}>
            <span className="title">
                Title:
            </span>{this.props.todo.title}
            <div className="todo-completed-title">
                <span style={{fontWeight:"bold"}}>Completed:</span>{this.props.todo.completed ? <span style={{color:"green"}}>True</span> : <span style={{color:"red"}}>False</span>}
                {this.props.todo.completed ? null : <button style={{marginLeft:"100px"}}onClick={() => this.props.markComplete(this.props.todo.id)}>Mark Complete</button>}
            </div>
        </div>)
    }
}