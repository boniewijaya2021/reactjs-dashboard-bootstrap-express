import React, { Component } from 'react'
//import jwt_decode from 'jwt-decode'
import { Link, withRouter } from 'react-router-dom'

class Sidebar extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
  componentDidMount() {
    const token = localStorage.usertoken

    if(!token){
        this.props.history.push(`/`)
    }
  }
  render() {
    
    const sideAuth = (
      <div className="border-end bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
            <div className="list-group list-group-flush">
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <Link to="/profile" className="nav-link">profile</Link>
              <Link to="/produk" className="nav-link">produk</Link>
             
             </div>
        </div>
    )
    const noLogin = (
      <div >
          
        </div>
    )
  
    return (
      <div>{localStorage.usertoken ? sideAuth : noLogin } </div> 
    )
  }
}

//export default Sidebar
export default withRouter(Sidebar)
