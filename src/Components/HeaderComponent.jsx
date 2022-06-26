import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div><a href="http://localhost:3000" className="navbar-brand" style={{fontSize:"40px"}}>Drone Feeder App</a></div>
            <div><a href="http://localhost:3000/drones" className="navbar-brand" style={{marginLeft:"60px"}}>Drones</a></div>
            <div><a href="http://localhost:3000/entregas" className="navbar-brand" style={{marginLeft:"30px"}}>Entregas</a></div>
          </nav>
        </header>
      </div>
    )
  }
}
