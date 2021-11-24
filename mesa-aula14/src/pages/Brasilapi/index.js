import { useState } from 'react';
import {Formik, Form, Field} from 'formik';
import Swal from 'sweetalert2';
import { apiBrasilapi } from '../../service/api';
import { Link } from 'react-router-dom';
import '../../styles/search.scss'

const Brasilapi = () =>{

  const [dados,setDados] = useState([])

  const handleSubmit = async ({cep}) => {
      try{
        const response = await apiBrasilapi.get(`./${cep}`)
        console.log(response)
        setDados(response.data)
      }
      catch(error){
        Swal.fire({
          title:error.response.status,
          icon:'error',
          text:error.response.data.message
        })
      }
    }

    return (
      <>
      <main>
        <Link to="/">Home</Link>
        <div className = "col-md-4 col-sm-6 my-3 container flex-column text-center">
        <Formik initialValues = {{cep:''}} onSubmit = {handleSubmit}>
          <Form>
            <Field placeholder = "Insira um CEP" type="text" required name="cep" id="cep" className="form-control my-4" />
            <button type="submit">Pesquisar CEP</button>
          </Form>
        </Formik>
        {dados.city && (
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p>Logradouro: <strong>{dados.street}</strong></p>
            </li>
            <li className="list-group-item">
              <p>Bairro: <strong>{dados.neighborhood}</strong></p>
            </li>
            <li className="list-group-item">
              <p>Cidade: <strong>{dados.city}</strong></p>
            </li>
            <li className="list-group-item">
              <p>Estado: <strong>{dados.state}</strong></p>
            </li>
          </ul>
        )
        }
        </div>
      </main>
      </>
    );
}

export default Brasilapi;