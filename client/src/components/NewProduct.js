import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NewProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`

export default class Product extends Component {



  state = {
    formShowing: false
  }

  toggleFormShowing = () => {
    const isShowing = !this.state.formShowing
    this.setState({ formShowing: isShowing})
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    const regionId = this.props.region._id
    const response = await axios.post(`/api/regions/${regionId}/products`, this.state.newProduct)
    // console.log('Response:', response.data)
    // const products = this.props.region.products
    // products.push(response.data)
    // this.setState({ products })
    await this.props.findRegion()
    
  }
  handleChange = async (event) => {
    const newProduct = {...this.state.newProduct}
    newProduct[event.target.name] = event.target.value
    this.setState({ newProduct })
    await this.props.findRegion()
  }

  handleNew = (event) => {
    const newProduct = {...this.this.state.newProduct}
    newProduct[event.target.name] = event.target.value
    this.setState({ newProduct })
  }

  render() {
    return (
        <NewProductContainer>
        {this.state.formShowing ? null : <Button variant="contained" onClick={this.toggleFormShowing}>New Product</Button>}
        
        {this.state.formShowing ? 
          <form onSubmit={this.handleSubmit} >
            <div>
              <input type='text' name='brandName' value={this.props.brandName} placeholder='Brand Name'
                onChange={this.props.handleChange}/>
            </div>
            <div>
              <input type='text' name='productName' value={this.props.productName} placeholder='Product Name'
                onChange={this.props.handleChange}/>
            </div>
             <div>
              <input type='text' name='description' value={this.props.description} placeholder='Description'
                onChange={this.props.handleChange}/>
            </div>
            <div>
              <input type='text' name='image' value={this.props.image} placeholder='Image URL'
                onChange={this.props.handleChange}/>
            </div>
              <input type='text' name='price' value={this.props.price} placeholder='Price'
                onChange={this.props.handleChange}/>
            <div>
              <input type='text' name='link' value={this.props.link} placeholder='Link to Purchase'
                onChange={this.props.handleChange}/>
            </div>
            <div>
              <input type='submit' value='Create'/>
            </div>
          </form> : null}
        </NewProductContainer>
      )
    }
    
  }

