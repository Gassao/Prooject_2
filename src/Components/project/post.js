import { Component } from "react";


export default class Post extends Component
{
    render()
    {
        return(<div style={{border:"2px solid gray",width:"350px",margin:"5px",padding:"6px", backgroundColor:"LightGray" }}>
            <div >
                <span className="title">Title:  </span>{this.props.oNly_post.title}
            </div>
            <div className="title">
                Body:
            </div>
            {this.props.oNly_post.body}
        </div>)
    }
}