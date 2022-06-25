import React, { Component } from 'react'
import EntregaServices from '../Services/EntregaServices';

export default class ViewEntregaPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      entrega: {}
    }
  }

  componentDidMount(){
    EntregaServices.getEntregaById(this.state.id).then(res => {
      this.setState({entrega: res.data});
    });
  }

  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h1 className="text-center">Entrega Details</h1>
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}
