import React, { Component } from 'react';
import './dashboard.css';
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {

  constructor() {
    super()
  
      this.state = {
        houseList:[]
      };
      
      // console.log(this.state.houseList)
      this.deleteHouse = this.deleteHouse.bind(this)
    }


// ****AXIOS SERVER CALLS**** //
  componentDidMount(){
    axios.get('/api/houses').then(response => {
      const allHouses = response.data
      this.setState({
        houseList: allHouses
        
      })
    })
  }

  deleteHouse(id){
    axios.delete(`/api/houses/${id}`).then(response => {
      this.setState({
        houseList: response.data
      })
    })
  }


  // .filter(element => element.list === "beerWishList")

// ******METHODS******//



  render() {
    return (
      <div className="dashContainer">
        <div className="dash_subheader">
          <h2>Dashboard</h2>
          <Link to='../Wizard/Wizard'>
            <button className='btn'>Add New Property</button>
          </Link>
          
        </div>
        <hr/>
        <div className = "dashboard">
          {this.state.houseList.map((el, index) =>(
            <House
              el={el} 
              index={index}
              key={el.id}
              remove={this.deleteHouse}
            />
          ))}  
        </div>
      </div>
    );
  }
}

export default Dashboard;