import React , {Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message : 'welcome visitors'
        }

    }
    changeMessage(){
        this.setState({
            message : "thaks for subscribing"
        })
    }
    render() {
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}> suscribe</button>
            </div>
            
        )
    
    }
}
export default Message