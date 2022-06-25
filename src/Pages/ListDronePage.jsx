import React, { Component } from 'react'
import DroneServices from '../Services/DroneServices';


export default class ListDronePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      drones:[]
    }

    this.addDrone = this.addDrone.bind(this);
    this.editDrone = this.editDrone.bind(this);
    this.deleteDrone = this.deleteDrone.bind(this);
    this.getDrone = this.getDrone.bind(this);
  }
  
  componentDidMount(){
    DroneServices.getDrones().then(res =>{
      this.setState({drones: res.data});
    });
  }
  
  addDrone(){
    this.props.history.push("/add-drone/_add");
  }

  editDrone(droneId){
    this.props.history.push(`/add-drone/${droneId}`);
  }

  getDrone(droneId){
    this.props.history.push(`/view-drone/${droneId}`);
  }

  deleteDrone(droneId){
    DroneServices.deleteDrone(droneId).then(res => {
      this.setState({drones: this.state.drones.filter(drone => drone.id !== droneId)});
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Drones List</h1>
        <br />

        <button className="btn btn-primary" onClick={this.addDrone}>Add Drone</button>
        <div className="row">
        <br />

        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Drone id</th>
                <th>Drone Marca</th>
                <th>Drone Modelo</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.drones.map(
                  drone => 
                  <tr key={drone.id}>
                    <td>{drone.id}</td>
                    <td>{drone.marca}</td>
                    <td>{drone.modelo}</td>
                    <td>{drone.status}</td>
                    <td>
                      <button onClick={() => this.getDrone(drone.id)} className="btn btn-warning" style={{marginLeft: "10px"}}>Details</button>
                      <button onClick={() => this.editDrone(drone.id)} className="btn btn-info" style={{marginLeft: "10px"}}>Update</button>
                      <button onClick={() => this.deleteDrone(drone.id)} className="btn btn-danger" style={{marginLeft: "10px"}}>Delete</button>
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
