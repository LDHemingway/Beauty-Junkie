import React, { Component } from 'react'
import axios from 'axios'
import EditProduct from './EditProduct'
import DeleteProduct from './DeleteProduct';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledImage = styled.img`
  width: 20vw;
  border: 2px solid #8B636C;
  border-radius: 15%;
`

export default class Product extends Component {
    state = {
        region: {
            name: '',
            image: '',
            products: []
        },
        product: {
            brandName:'',
            productName:'',
            description: '',
            image: '',
            price: '',
            link: '',
            _id: '',
        }
    }

    
  render() {
    const { brandName, productName, image, price, description, link } = this.props.productInfo
    return (
      <div>
        <StyledImage src={image} alt={productName}/>
        <p><strong>{brandName}</strong></p>
        <p>{productName}</p>
        <p>{price}</p>
        <p>{description}</p>
        <Link to={link}>Click Here to Purchase!</Link>
        <DeleteProduct id={this.props._id}/> 
        <EditProduct />
      </div>
    )
  }
}
