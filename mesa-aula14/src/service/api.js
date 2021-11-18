import axios from "axios";

const apiViacep = axios.create({
    baseURL:"https://viacep.com.br/ws"
})

const apiBrasilapi = axios.create({
    baseURL:"https://brasilapi.com.br/api/cep/v1"
})

export  {apiViacep,apiBrasilapi}