import { Component } from 'react';
import './App.scss';
import Clock from './components/Clock';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      valor : 0,
      mostraNome:false,
      listaDeAlunos: [
        {
          id:0,
          firstName:'Xablau'
        },
        {
          id:4561,
          firstName:'Tikarikatica'
        },
        {
          id:456,
          firstName:'Vrau'
        },
        {
          id:748,
          firstName:'Kachow!'
        },
      ]
    }
  }
   
  somaUm = () => {
    this.setState({
      valor: this.state.valor + 1
    })
  }

  mostraNomeToggler = () => {
    this.setState({
      mostraNome: !this.state.mostraNome
    })
  }

  removeAluno = (idAluno) => {
      const novaLista = this.state.listaDeAlunos.filter(({id}) => {
        return id !== idAluno
      })
      this.setState({
        listaDeAlunos: novaLista
      })
  }

  render() {
     
    return(
      <>
      {/* Incremento */}
      <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
        <h2>{this.state.valor}</h2>
        <button className="btn btn-primary" onClick={this.somaUm}>Soma Um</button>
      </div>

      {/* Esconder/Mostrar */}
      <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
        {this.state.mostraNome && <h2>Helena Perdigueiro</h2>}
        <button className="btn btn-primary" onClick={this.mostraNomeToggler}>
          {this.state.mostraNome ? 'Esconde' : 'Mostra'} Nome  
        </button>
      </div>

      {/* Remover */}
      <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
        {
          this.state.listaDeAlunos.map(({id,firstName}) => {
            return(
              <h2 onClick={() => this.removeAluno(id)}>{firstName}</h2>
            )
          })
        }
      </div>

      <Clock></Clock>
      </>
    )
  }
 
}

