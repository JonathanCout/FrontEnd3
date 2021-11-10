import { Component } from "react";
import './styles.scss';

export default class Clock extends Component{
    constructor(){
        super();
        this.state = {
            date:new Date()
        }
    }

    componentDidMount(){
        this.timerID = setInterval(this.tick,1000)
    }

    componentDidUpdate(){
        // console.log("alterou")
    }
    tick = () => {
        this.setState({
            date:new Date()
        })
    }

    render(){
        return(
            <>
            <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4"> 
             <h2>{this.state.date.toLocaleTimeString()}</h2> 
            </div>
            </>
        )
    }
}