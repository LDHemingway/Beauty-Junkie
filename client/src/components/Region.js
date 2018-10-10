import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'

const StyledImage = styled.img`
  width: 20vw;
  border: 1px solid black;
`
const StyledHeader = styled.img`
    width: 20vw;
    height: 20vh;
    margin: 0 auto;
`
const StyledPage = styled.div`
  background: peachpuff;
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

  redirect = () => {

  }

  handleDelete = (regionId, res) => {
    axios.delete(`/api/regions/${regionId}`)
    console.log('deleted')
    this.setState({redirect: true})

  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    const region = this.state.region 
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
      <StyledPage>
        <div>
          <StyledHeader src={region.image} alt={region.name}/>
          {region.name}
          <div>
          <Link to='/'>Home</Link>
          </div>
        </div>
        {productsList}
        <button onClick={() => this.handleDelete(region._id)}> Delete This Region </button>
      </StyledPage>
    )
  }
}
