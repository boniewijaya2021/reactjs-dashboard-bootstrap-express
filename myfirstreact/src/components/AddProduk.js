import React, { Component } from 'react'
import ProductServiceControl from "../controllers/ProductController.js";

class AddProduk extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      jenis: '',
      price: '',
      
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    
    const newProduct = {
      title: this.state.title,
      jenis: this.state.jenis,
      price: this.state.price
  }

    ProductServiceControl.create(newProduct).then(res => {
      this.props.history.push(`/produk`)
    })
  }

  render() {
    const token = localStorage.usertoken
    if(!token){ this.props.history.push(`/`)}
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Buat Data Produk</h1>
              <div className="form-group">
                <label htmlFor="name">Nama Produk</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Nama Produk"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Jenis Produk</label>
                <input
                  type="text"
                  className="form-control"
                  name="jenis"
                  placeholder="Jenis Produk misal: makanan bayi"
                  value={this.state.jenis}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Harga</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  placeholder="Harga"
                  value={this.state.price}
                  onChange={this.onChange}
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Simpan 
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddProduk
