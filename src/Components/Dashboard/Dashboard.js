import React, { Component } from 'react';
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
      <div>
        
        <h2>Dashboard.js</h2>
        

        <Link to='../Wizard/Wizard'>
          <button className='btn'>Add New Property</button>
        </Link>
        {this.state.houseList.map((el, index) =>(
          <House
            el={el} 
            index={index}
            key={el.id}
            remove={this.deleteHouse}
          />
        ))}  
      </div>
    );
  }
}

export default Dashboard;