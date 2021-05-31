import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Produk from './components/Produk.js';
import AddProduk from './components/AddProduk';
import EditProduk from './components/EditProduk';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div className="d-flex" id="wrapper">
          <Sidebar />
        <div id="page-content-wrapper">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container-fluid">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/produk" component={Produk} />
            <Route exact path="/produk/add" component={AddProduk} />
            <Route exact path="/produk/idproduct/:id" component={EditProduk} />
          </div>
        </div>
        </div>
        </div>
      </Router>
    )
  }
}

export default App
