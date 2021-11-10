import { Component } from "react";
import "./styles.css";

export default class Clock extends Component {
    constructor(){
        super()
        this.state = {
            timer: 60
        }
    }
    
    componentDidUpdate(){
        if(this.state.timer < 0){
            this.setState({
                timer: 60
            })
        }
    }
    tick = () => {
        
        this.setState({
            timer: this.state.timer - 1
        })
    
    }
    pause = () => {
        clearInterval(this.timerID)
    }
    restart = () => {
        this.timerID = setInterval(this.tick,1000)
    }
    render(){
        return(
            <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
                <h2>{this.state.timer}</h2>
                <button className = "btn btn-primary" onClick = {this.restart}>Iniciar a contagem</button>
                <button className = "btn btn-primary" onClick = {this.pause}>Pausar a contagem</button>
            </div>
        )
    }
}