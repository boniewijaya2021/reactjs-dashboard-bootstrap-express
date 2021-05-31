import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
      
      </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
            <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
          </ul>
        </div>
      </div>
    )

    const userLink = (
      <div className="container-fluid">
      <button className="btn btn-dark" id="sidebarToggle">
        <FontAwesomeIcon icon={faAlignLeft} /></button>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
      
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      <li className="nav-item">

      </li>
      <li className="nav-item">
      <a href="" onClick={this.logOut.bind(this)} className="nav-link">
      Logout
      </a>
      </li>
      </ul>
      </div>
      </div>
      
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
       {localStorage.usertoken ? userLink : loginRegLink}                    
      </nav>
    )
  }
}

export default withRouter(Landing)
