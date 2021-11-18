import { Component } from 'react';
import {Formik, Form, Field} from 'formik';
import Swal from 'sweetalert2';
import { apiBrasilapi } from '../../service/api';
import { Link } from 'react-router-dom';
import '../../styles/search.scss'

export default class Brasilapi extends Component{
  constructor(){
    super();
    this.state = {
      
    }
  }


  handleSubmit = async ({cep}) => {
    try{
      const response = await apiBrasilapi.get(`./${cep}`)
      this.setState({
        dados:response.data
      })
    }
    catch(error){
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
        <Link to="/">Home</Link>
        <div className = "col-md-4 col-sm-6 my-3 container flex-column text-center">
        <Formik initialValues = {{cep:''}} onSubmit = {this.handleSubmit}>
          <Form>
            <Field placeholder = "Insira um CEP" type="text" required name="cep" id="cep" className="form-control my-4" />
            <button type="submit">Pesquisar CEP</button>
          </Form>
        </Formik>
        {this.state.dados && (
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p>Logradouro: <strong>{this.state.dados.street}</strong></p>
            </li>
            <li className="list-group-item">
              <p>Bairro: <strong>{this.state.dados.neighborhood}</strong></p>
            </li>
            <li className="list-group-item">
              <p>Cidade: <strong>{this.state.dados.city}</strong></p>
            </li>
            <li className="list-group-item">
              <p>Estado: <strong>{this.state.dados.state}</strong></p>
            </li>
          </ul>
        )
        }
        </div>
      </main>
      </>
    );
  }
}