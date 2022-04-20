import { Component } from "react";
import { GetAllPostsById } from "./utils";
import AddPost from "./addpost";
import Post from "./post";

export default class Posts extends Component
{
    constructor()
    {
        super();
        
        this.state = {posts:[],userId:"", display:false,isDone:false}
    }

    async componentDidMount()
    {
        const posts = await GetAllPostsById(this.props.posts,this.props.userId);
        this.setState({userId:this.props.userId,posts,isDone:false,display:false})
    }

    /* Checking if the props send is diffrent from the last */
    async componentDidUpdate()
    {
        if(this.state.userId!=this.props.userId || this.state.isDone)
        {
            const posts = await GetAllPostsById(this.props.posts,this.props.userId);
            this.setState({userId:this.props.userId,posts,isDone:false,display:false})
        }
    }

     // -->true/false is user was added 
    changeDisplay = (isDone) =>
    {
        if(isDone)
            this.setState({isDone:true})
     
        this.setState({display:!this.state.display})
    }

    render()
    {
        return(<div style={{display:this.props.ISvisibility ? "block" : "none",position:"absolute",bottom:"6px",left:"56px"}}>

                       {/* -->Boolean--> if Add Clicked  True show The Add user comonents  else  shows the Posts */} 
            {this.state.display ? <AddPost curerntArray={this.props.posts} userId={this.state.userId} add_To_Post={this.props.add_To_Post} changeDisplay={this.changeDisplay}/> :
            <div>
                <div id="title">
                      <span  style={{ textAlign:"center"}}> User {this.props.userId} posts</span> 
                    <button  style={{borderRadius:"6px",marginLeft:"17rem",marginBottom:"3.5px"}} id="add-post" onClick={() => this.changeDisplay()}>Add</button>
                    </div>
                <div id="container_of_todos" style={{textAlign:"left",overflow:"scroll",overflowX:"hidden",display:"flex",flexDirection:"column",alignItems:"center",border:"1px black solid",width:"401px",height:"301px"}}>
                    {this.state.posts.map((post,index) =>
                    {
                        return(<Post key={index} oNly_post={post}/>)
                    })}
                </div>
            </div>}
        </div>)
    }
}