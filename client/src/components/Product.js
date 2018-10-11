import React, { Component } from 'react'
import axios from 'axios'
import EditProduct from './EditProduct'
import DeleteProduct from './DeleteProduct';
import styled from 'styled-components'

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
    const productsList = this.state.region.products.map((product, i) => {
        return(
          <div key={i}>
          <StyledImage src={product.image} alt={product.productName} />
          <div><strong>{product.price}</strong></div>
          <div>{product.brandName}</div>
          <div>{product.productName}</div>
          </div>
        )
    })
    return (
      <div>
        <EditProduct 
        brandName={this.state.brandName}
        productName={this.state.productName}
        image={this.state.image}
        price={this.state.price}
        description={this.state.description}
        link={this.state.link} />
        <DeleteProduct id={this.props._id}/>
      </div>
    )
  }
}
