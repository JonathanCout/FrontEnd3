import { Component } from "react";
import { Link } from "react-router-dom";

export default class Repository extends Component{
    render(){
        return(
            <>
            <Link to="/">Ir para Home</Link>
            <h1>Oi 👉👈 </h1>
            </>
        )
        
    }
}