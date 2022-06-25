import axios from "axios";

const ENTREGA_BASE_API_URL = "http://localhost:8080/entregas"

class EntregaServices {

  getEntregas(){
    return axios.get(ENTREGA_BASE_API_URL);
  }

  createEntrega(entrega){
    return axios.post(ENTREGA_BASE_API_URL, entrega);
  }

  getEntregaById(entregaId){
    return axios.get(`${ENTREGA_BASE_API_URL}/${entregaId}`);
  }

  updateEntrega(entrega, entregaId){
    return axios.put(`${ENTREGA_BASE_API_URL}/${entregaId}`, entrega);
  }

  deleteEntrega(entregaId){
    return axios.delete(`${ENTREGA_BASE_API_URL}/${entregaId}`);
  }
}

export default new EntregaServices()