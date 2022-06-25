import React, { Component } from "react";
import DroneServices from "../Services/DroneServices";

export default class CreateDronePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      marca: "",
      modelo: "",
    };

    this.saveOrUpdateDrone = this.saveOrUpdateDrone.bind(this);
    this.changeMarcaHandler = this.changeMarcaHandler.bind(this);
    this.changeModeloHandler = this.changeModeloHandler.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      DroneServices.getDroneById(this.state.id).then((res) => {
        let drone = res.data;
        this.setState({ marca: drone.marca, modelo: drone.modelo });
      });
    }
  }

  saveOrUpdateDrone = (event) => {
    event.preventDefault();
    let drone = { marca: this.state.marca, modelo: this.state.modelo };
    console.log(`Drone salvo: ${JSON.stringify(drone)}`);

    if (this.state.id === "_add") {
      DroneServices.createDrone(drone).then((res) => {
        this.props.history.push("/drones");
      });
    } else {
      DroneServices.updateDrone(drone, this.state.id).then((res) => {
        this.props.history.push("/drones");
      });
    }
  };

  changeMarcaHandler(event) {
    this.setState({ marca: event.target.value });
  }

  changeModeloHandler(event) {
    this.setState({ modelo: event.target.value });
  }

  cancel() {
    this.props.history.push("/drones");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Drone</h3>;
    } else {
      return <h3 className="text-center">Update Drone</h3>;
    }
  }

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="">Marca: </label>
                    <input
                      placeholder="Marca"
                      name="marca"
                      className="form-control"
                      value={this.state.marca}
                      onChange={this.changeMarcaHandler}
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <label htmlFor="">Modelo: </label>
                    <input
                      placeholder="Modelo"
                      name="modelo"
                      className="form-control"
                      value={this.state.modelo}
                      onChange={this.changeModeloHandler}
                    />
                  </div>
                  <br />
                </form>

                <button
                  className="btn btn-success"
                  onClick={this.saveOrUpdateDrone}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
