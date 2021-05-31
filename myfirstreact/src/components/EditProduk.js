import React, { Component } from 'react'
import ProductServiceControl from "../controllers/ProductController.js";

class EditProduk extends Component {
  constructor() {
    super()
    this.state = {
    title: '',
    jenis: '',
    price: '',
    product:[],
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
   
    if(!this.state.title){
      //alert(this.state.product.title)
      this.state.title =this.state.product.title
    }else{
      //alert(this.state.title)
      this.state.title =this.state.title
    }
    if(!this.state.jenis){
      //alert(this.state.product.jenis)
      this.state.jenis =this.state.product.jenis
    }else{
      //alert(this.state.jenis)
      this.state.jenis =this.state.jenis
    }
    if(!this.state.price){
      //alert(this.state.product.price)
      this.state.price =this.state.product.price
    }else{
      //alert(this.state.price)
      this.state.price =this.state.price
    }
    const updateProduct = {
        id:this.state.product.id,
        title: this.state.title,
        jenis: this.state.jenis,
        price: this.state.price
    }

    ProductServiceControl.update(updateProduct).then(res => {
      this.props.history.push(`/produk`)
    })
  }
  getProductDataByid(){
    const idproduct = this.props.match.params.id;
    ProductServiceControl.get(idproduct).then(response => {
        this.setState({product:response.data});
        console.log(product);

      })
      .catch(e => {
        console.log(e);
      });
  }
   componentDidMount(){
    this.getProductDataByid();
    const token = localStorage.usertoken

    if(!token){
        this.props.history.push(`/`)
    }
  }

  render() {
    
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Edit Data Product</h1>
             
              <div className="form-group">
                <label htmlFor="name">Nama Product</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder={this.state.product.title}
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Jenis Product</label>
                <input
                  type="text"
                  className="form-control"
                  name="jenis"
                  placeholder={this.state.product.jenis}
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
                  placeholder={this.state.product.price}
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

export default EditProduk
