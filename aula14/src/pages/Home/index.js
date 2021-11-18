import { Component } from 'react';
import {Formik, Form, Field} from 'formik';
import api from '../../services/api';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default class Home extends Component{
  constructor(){
    super()
    this.state = {
      repositorios: []
    }
  }

  handleSubmit = async ({nomeUsuario}) => {
    try{
      const response = await api.get(`/users/${nomeUsuario}/repos`);
      console.log(response)
      this.setState({repositorios: response.data})
    } catch (error){
      Swal.fire({
          title:error.response.status,
          icon:'error',
          text:error.response.data.message
      })
    }
    
  }
  
  render(){

    return (
      <>
      <main>
        <Link to="/repository">Ir para Home</Link>
        <div className = "col-md-4 col-sm-6 my-3 container text-center">
          <h2>Procure um usuário do Github</h2>
          <Formik initialValues={{nomeUsuario : ''}} onSubmit = {this.handleSubmit}>
            <Form>
              <Field placeholder="Insira um nome de usuário" required type = "text"
              name="nomeUsuario" id="nomeUsuario" className = "form-control"/>
              <button type="submit" className="btn btn-primary">Pesquisar</button>
            </Form>  
          </Formik> 

          {this.state.repositorios && (
              <ol className="list-group list-group-numbered my-3">
                {this.state.repositorios.map(({ id, name, html_url }) => {
                  return (
                    <li key={id}>
                      <a target="_blank" href={html_url} rel="noreferrer">{name}</a>
                    </li>
                  )
                })}
              </ol>
            )}
        </div>
      </main>
      </>
    )
  }
}