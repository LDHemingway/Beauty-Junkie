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
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  width: 50vw;
  padding: 10px;
  margin: 0 auto;
  margin-top: 10px;
  background: #ffe5eb;
`
const LinkText = styled.div`
  text-decoration: none;
  color: white;
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
      <ProductContainer>
        <StyledImage src={image} alt={productName}/>
        <p><strong>{brandName}</strong></p>
        <p>{productName}</p>
        <p>{price}</p>
        <p>{description}</p>
        <LinkText><Link to={link}>Click Here to Purchase!</Link></LinkText>
        <DeleteProduct id={this.props._id}/> 
        <EditProduct />
      </ProductContainer>
    )
  }
}
