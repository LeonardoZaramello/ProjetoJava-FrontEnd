import React, { Component } from 'react'
import EntregaServices from '../Services/EntregaServices';

export default class ViewEntregaPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      entrega: {},
      button: true
    }

    this.updateEntregaStatus = this.updateEntregaStatus.bind(this);
  }

  componentDidMount(){
    EntregaServices.getEntregaById(this.state.id).then(res => {
      if(res.data.status === "Em transito"){
        this.setState({entrega: res.data, button: false});
      }else{
        this.setState({entrega: res.data});
      }
    });
  }


  updateEntregaStatus(){
    EntregaServices.updateEntregaStatus(this.state.entrega.id);
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h1 className="text-center">Detalhes da Entrega</h1>
          <div className="card-body">
            <div className="row">
              <label>Entrega Id: </label>
              <h6>{this.state.entrega.id}</h6>
              <label>Entrega Latitude: </label>
              <h6>{this.state.entrega.latitude}</h6>
              <label>Entrega Longitude: </label>
              <h6>{this.state.entrega.longitude}</h6>
              <label>Entrega Status: </label>
              <h6>{this.state.entrega.status}</h6>

              <button
                  disabled={this.state.button}
                  className="btn btn-success"
                  onClick={this.updateEntregaStatus}
                >
                  Marcar Como entregue
                </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
