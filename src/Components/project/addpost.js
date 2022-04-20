import { Component } from "react";


export default class AddPost extends Component
{
    constructor()
    {
        super();
        this.state = {title:'' , Body:''}
    }
/// add to new post
    NewPost = () =>
    {
        const newPost = {
            userId:this.props.userId,
            id:this.props.curerntArray.length+1,
            title:this.state.title,
            body:this.state.Body
        }
        this.props.changeDisplay(true);
        this.props.add_To_Post(newPost);
    }

    // present posts items
    changeDisplay=()=>
    {

        this.props.changeDisplay(false)      
    }

    render()
    {
        return(<div style={{border:"1px black solid",width:"200px",height:"200px",position:"absolute",left:"125px",bottom:"100px",borderRadius:"10px",padding:"15px"}}>
            <div>Title:<input type="text" onChange={(e) => this.setState({title:e.target.value})}/></div>
            <div>Body:<input type="text" onChange={(e) => this.setState({Body:e.target.value})}/></div>
            <div>
                <button onClick={this.NewPost}>Add</button>
                <button style={{marginLeft:"10px",marginTop:"10px"}} onClick={this.changeDisplay}>Cancel</button>
            </div>
        </div>)
    }
}