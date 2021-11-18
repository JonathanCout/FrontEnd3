import { Component } from "react";
import { Link } from "react-router-dom";
import '../../styles/home.scss'
export default class Home extends Component{
    render(){
        return(
        <>
            <main>
                <h1>Pesquisa de CEP</h1>
                <div>
                 <Link to = '/viacep'>Viacep</Link>
                 <Link to = '/brasilapi'>BrasilAPI</Link>
                </div>
            </main>
        </>
        )
    }
}