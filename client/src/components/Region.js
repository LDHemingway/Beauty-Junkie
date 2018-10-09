import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 20vw;
  border: 1px solid black;
`

export default class Region extends Component {
  state = {
    region: {
      name: '',
      image: '',
      products: [{
        brandName: '',
        productName: '',
        description: '',
        image: '',
        price: '',
        link: '',
      }]

    }
  }

  findRegion = async () => {
    const regionId = this.props.match.params.regionId
    const response = await axios.get(`/api/regions/${regionId}`)
    const region = response.data
    this.setState({region})
  }
  
  componentDidMount = () => {
    this.findRegion()
  }

  handleDelete = async (regionId) => {
    const regionsId = this.props.match.params.regionsId
    axios.delete(`/api/regions/${regionsId}`)
    console.log('deleted')
  }

  render() {
    const region = this.state.region 
    const productsList = region.products.map((product, i) => {
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
        {region.name}
        {productsList}
        <button onClick={() => this.handleDelete(region._id)}> Delete This Region </button>
      </div>
    )
  }
}
