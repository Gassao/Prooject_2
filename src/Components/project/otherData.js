import { Component } from "react";
import { GetUserData } from "./utils";

export default class OtherData extends Component
{
    constructor()
    {
        super();
        this.state = {street:"",city:"",zip:"",id:"",Updated:false}
    }
    /* Every diff user gets his details */
    async componentDidUpdate()
    {
        if(this.state.id != this.props.id)
        {
            const data = await GetUserData(this.props.array,this.props.id);
            this.setState({id:this.props.id,street:data.street,city:data.city,zip:data.zip});
        }
        /* Checking if there was change on the inputs and sending it to the user */
        if(this.state.Updated)
        {
            const updatedUser ={
                street:this.state.street,
                city:this.state.city,
                zipcode:this.state.zip
            }

            this.props.callback(updatedUser);
            this.setState({Updated:false})
        }
    }
    // change of the inputs 
    handleChange = (e) =>
    {
        const {value} = e.target;
        this.setState({[e.target.name]:value , Updated:true})
    }

    render()
    {
        return(<div className={this.props.class} id="otherdata">

            <div>
                Street:
                <input type ="text" name="street"  value={this.state.street} onChange={this.handleChange}/>
            </div>
            <div>
                City:
                <input type ="text" name="city" value={this.state.city} onChange={this.handleChange}/>
            </div>
            <div>
                Zip Code:
                <input type ="text" name="zip" value={this.state.zip} onChange={this.handleChange}/>
            </div>

        </div>)
    }
}