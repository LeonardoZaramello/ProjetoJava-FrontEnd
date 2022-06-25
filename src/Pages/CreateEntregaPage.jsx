import React, { Component } from "react";
import EntregaServices from "../Services/EntregaServices";

export default class CreateEntregaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      latitude: "",
      longitude: "",
    };

    this.saveOrUpdateEntrega = this.saveOrUpdateEntrega.bind(this);
    this.changeLatitudeHandler = this.changeLatitudeHandler.bind(this);
    this.changeLongitudeHandler = this.changeLongitudeHandler.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      EntregaServices.getEntregaById(this.state.id).then((res) => {
        let entrega = res.data;
        this.setState({ latitude: entrega.latitude, longitude: entrega.longitude });
      });
    }
  }

  saveOrUpdateEntrega = (event) => {
    event.preventDefault();
    let entrega = { latitude: this.state.latitude, longitude: this.state.longitude };
    console.log(`Entrega salva: ${JSON.stringify(entrega)}`);

    if (this.state.id === "_add") {
      EntregaServices.createEntrega(entrega).then((res) => {
        this.props.history.push("/entregas");
      });
    } else {
      EntregaServices.updateEntrega(entrega, this.state.id).then((res) => {
        this.props.history.push("/entregas");
      });
    }
  };

  changeLatitudeHandler(event) {
    this.setState({ latitude: event.target.value });
  }

  changeLongitudeHandler(event) {
    this.setState({ longitude: event.target.value });
  }

  cancel() {
    this.props.history.push("/entregas");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Entrega</h3>;
    } else {
      return <h3 className="text-center">Update Entrega</h3>;
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
                    <label htmlFor="">Latitude: </label>
                    <input
                      placeholder="Latitude"
                      name="latitude"
                      className="form-control"
                      value={this.state.latitude}
                      onChange={this.changeLatitudeHandler}
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <label htmlFor="">Longitude: </label>
                    <input
                      placeholder="Longitude"
                      name="longitude"
                      className="form-control"
                      value={this.state.longitude}
                      onChange={this.changeLongitudeHandler}
                    />
                  </div>
                  <br />
                </form>

                <button
                  className="btn btn-success"
                  onClick={this.saveOrUpdateEntrega}
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
