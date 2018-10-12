import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios'

export default class EditProduct extends Component {

state = {
  formShowing: false,
  region: {
    _id:'',
    name:'',
    image:'',
    products: [{
      productName: '',
      brandName: '',
      price: '',
      description: '',
      link: '',
      image: ''
    }]},
  updatedProduct: {
    productName: '',
    brandName: '',
    price: '',
    description: '',
    link: '',
    image: ''
  }
}

getProducts = async () => {
  const regionId = this.props.regionId
  const response = await axios.get(`api/regions/${regionId}`)
  this.setState({
    products: response.data
  })
}

  toggleFormShowing = () => {
    const isShowing = !this.state.formShowing
    this.setState({ formShowing: isShowing})
  }
    handleSubmit = async (event) => {
        event.preventDefault()
        const regionId = this.props.regionId
        const productId = this.props.productId
        const response = await axios.put(`/api/regions/${regionId}/products/${productId}`, this.state.updatedProduct)
        console.log('Response:', response.data)
        const products = this.state.region.products
        products.push(response.data)
        this.setState({ products })
        this.props.findRegion()
      }

      handleChange = (event) => {
        const updatedProduct = {...this.state.updatedProduct}
        updatedProduct[event.target.name] = event.target.value
        this.setState({ updatedProduct })
    }

  render() {
    return (
      <div>
        {this.state.formShowing ? null : <Button variant="contained" onClick={this.toggleFormShowing}>Edit Product</Button>}
        {this.state.formShowing ? 
          <form onSubmit={this.handleSubmit} >
            <div>
              <input type='text' name='brandName' value={this.state.updatedProduct.brandName} placeholder='Brand Name'
                onChange={this.handleChange}/>
            </div>
            <div>
              <input type='text' name='productName' value={this.state.updatedProduct.productName} placeholder='Product Name'
                onChange={this.handleChange}/>
            </div>
             <div>
              <input type='text' name='description' value={this.state.updatedProduct.description} placeholder='Description'
                onChange={this.handleChange}/>
            </div>
            <div>
              <input type='text' name='image' value={this.state.updatedProduct.image} placeholder='Image URL'
                onChange={this.handleChange}/>
            </div>
              <input type='text' name='price' value={this.state.updatedProduct.price} placeholder='Price'
                onChange={this.handleChange}/>
            <div>
              <input type='text' name='link' value={this.state.updatedProduct.link} placeholder='Link to Purchase'
                onChange={this.handleChange}/>
            </div>
            <div>
              <input type='submit' value='Make Changes'/>
            </div>
          </form> : null}
        </div>
    )
  }
}
