import React, { Component } from 'react'
import EntregaServices from '../Services/EntregaServices';


export default class ListEntregaPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      entregas:[]
    }

    this.addEntrega = this.addEntrega.bind(this);
    this.editEntrega = this.editEntrega.bind(this);
    this.deleteEntrega = this.deleteEntrega.bind(this);
    this.getEntrega = this.getEntrega.bind(this);
  }
  
  componentDidMount(){
    EntregaServices.getEntregas().then(res =>{
      this.setState({entregas: res.data});
    });
  }
  
  addEntrega(){
    this.props.history.push("/add-entrega/_add");
  }

  editEntrega(entregaId){
    this.props.history.push(`/add-entrega/${entregaId}`);
  }

  getEntrega(entregaId){
    this.props.history.push(`/view-entrega/${entregaId}`);
  }

  deleteEntrega(entregaId){
    EntregaServices.deleteEntrega(entregaId).then(res => {
      this.setState({entregas: this.state.entregas.filter(entrega => entrega.id !== entregaId)});
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Entregas List</h1>
        <br />

        <button className="btn btn-primary" onClick={this.addEntrega}>Add Entrega</button>
        <div className="row">
        <br />

        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Entrega id</th>
                <th>Entrega Latitude</th>
                <th>Entrega Longitude</th>
                <th>Entrega status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.entregas.map(
                  entrega => 
                  <tr key={entrega.id}>
                    <td>{entrega.id}</td>
                    <td>{entrega.latitude}</td>
                    <td>{entrega.longitude}</td>
                    <td>{entrega.status}</td>
                    <td>
                      <button onClick={() => this.getEntrega(entrega.id)} className="btn btn-warning" style={{marginLeft: "10px"}}>Detalhes</button>
                      <button onClick={() => this.editEntrega(entrega.id)} className="btn btn-info" style={{marginLeft: "10px"}}>Atualizar</button>
                      <button onClick={() => this.deleteEntrega(entrega.id)} className="btn btn-danger" style={{marginLeft: "10px"}}>Deletar</button>
                    </td>
                  </tr>
                  )
              }
            </tbody>
          </table>
          
        </div>
      </div>
    )
  }
}
