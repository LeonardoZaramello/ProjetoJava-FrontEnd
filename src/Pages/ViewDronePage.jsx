import React, { Component } from 'react'
import DroneServices from '../Services/DroneServices';

export default class ViewDronePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      drone: {}
    }
  }

  componentDidMount(){
    DroneServices.getDroneById(this.state.id).then(res => {
      this.setState({drone: res.data});
    });
  }

  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h1 className="text-center">Drone Details</h1>
          <div className="card-body">
            <div className="row">
              <label>Drone Id: </label>
              <h6>{this.state.drone.id}</h6>
              <label>Drone Marca: </label>
              <h6>{this.state.drone.marca}</h6>
              <label>Drone Modelo: </label>
              <h6>{this.state.drone.modelo}</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
