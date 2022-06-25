import axios from "axios";

const DRONE_BASE_API_URL = "http://localhost:8080/drones"

class DroneServices {

  getDrones(){
    return axios.get(DRONE_BASE_API_URL);
  }

  createDrone(drone){
    return axios.post(DRONE_BASE_API_URL, drone);
  }

  getDroneById(droneId){
    return axios.get(`${DRONE_BASE_API_URL}/${droneId}`);
  }

  updateDrone(drone, droneId){
    return axios.put(`${DRONE_BASE_API_URL}/${droneId}`, drone);
  }

  deleteDrone(droneId){
    return axios.delete(`${DRONE_BASE_API_URL}/${droneId}`);
  }
}

export default new DroneServices()