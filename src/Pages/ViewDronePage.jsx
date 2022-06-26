import React, { Component } from 'react'
import DroneServices from '../Services/DroneServices';

export default class ViewDronePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      drone: {},
      entregas: []
    }
  }

  componentDidMount(){
    DroneServices.getDroneById(this.state.id).then(res => {
      console.log(res.data);
      this.setState({drone: res.data, entregas: res.data.entregas});
    });
  }

  render() {
    return (
      <div>
        <div className="card col-md-8 offset-md-2">
          <h1 className="text-center">Drone Details</h1>
          <div className="card-body">
            <div className="row">
              <label>Drone Id: </label>
              <h6>{this.state.drone.id}</h6>
              <label>Drone Marca: </label>
              <h6>{this.state.drone.marca}</h6>
              <label>Drone Modelo: </label>
              <h6>{this.state.drone.modelo}</h6>

              <h2>Entregas: </h2>
              <div className="row">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Entrega id</th>
                      <th>Entrega Latitude</th>
                      <th>Entrega Longitude</th>
                      <th>Status da Entrega</th>
                      <th>Data da Saida</th>
                      <th>Data da Entrega</th>
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
                          <td>{entrega.dataSaida}</td>
                          <td>{entrega.dataEntrega}</td>
                        </tr>
                        )
                    }
                  </tbody>
                </table>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
