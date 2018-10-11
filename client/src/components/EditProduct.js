import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios'

export default class EditProduct extends Component {
    handleSubmit = async (event) => {
        event.preventDefault()
        const regionId = this.props.region._id
        // console.log(regionId)
        const response = await axios.put(`/api/regions/${regionId}/products/`, this.state.newProduct)
        console.log('Response:', response.data)
        const products = this.state.region.products
        // console.log(products)
        products.push(response.data)
        this.setState({ products })
      }
  render() {
    return (
      <div>
        {this.state.formShowing ? null : <Button variant="fab" color="primary" aria-label="Edit" onClick={this.toggleFormShowing}>Edit Product</Button>}
        {this.state.formShowing ? 
          <form onSubmit={this.handleSubmit} >
            <div>
              <input type='text' name='brandName' value={this.state.ne.brandName} placeholder='Brand Name'
                onChange={this.handleChange}/>
            </div>
            <div>
              <input type='text' name='productName' value={this.state.newProduct.productName} placeholder='Product Name'
                onChange={this.handleChange}/>
            </div>
             <div>
              <input type='text' name='description' value={this.state.newProduct.description} placeholder='Description'
                onChange={this.handleChange}/>
            </div>
            <div>
              <input type='text' name='image' value={this.state.newProduct.image} placeholder='Image URL'
                onChange={this.handleChange}/>
            </div>
              <input type='text' name='price' value={this.state.newProduct.price} placeholder='Price'
                onChange={this.handleChange}/>
            <div>
              <input type='text' name='link' value={this.state.newProduct.link} placeholder='Link to Purchase'
                onChange={this.handleChange}/>
            </div>
            <div>
              <input type='submit' value='Create'/>
            </div>
          </form> : null}
        </div>
    )
  }
}
