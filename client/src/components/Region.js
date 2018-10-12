import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import DeleteHeader from './DeleteHeader'
import HomeHeader from './HomeHeader'
import HomeLink from './HomeLink'
import RegionNameAndImage from './RegionNameAndImage'
import Button from '@material-ui/core/Button';
import NewProduct from './NewProduct'
import Product from './Product';


const StyledImage = styled.img`
  width: 20vw;
  border: 2px solid #8B636C;
  border-radius: 15%;
`

const StyledPage = styled.div`
  background: #D0A9AA;
`
const ProductListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
`
export default class Region extends Component {
  state = {
    formShowing: false,
    region: {
      name:'',
      image: '',
      _id:'',
      products: [{
        brandName: '',
        productName: '',
        description: '',
        image: '',
        price: '',
        link: '',
        _id: '',
      }]
    },
    newProduct : {
      brandName: '',
      productName: '',
      description: '',
      image: '',
      price: '',
      link: ''
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

  handleNew = (event) => {
    const newProduct = {...this.this.state.newProduct}
    newProduct[event.target.name] = event.target.value
    this.setState({ newProduct })
  }

  getProducts = async () => {
    console.log('getting')
    const regionId = this.state.region._id
    const response = await axios.get(`/api/regions/${regionId}/products`)
    this.setState({products: response.data})  
  }

  handleProductDelete = async (productId) => {
    const regionId = this.state.region._id
    // console.log('DELETE TRIGGERED')
    axios.delete(`/api/regions/${regionId}/products/${productId}`)
    this.findRegion()
  }
  handleChange = (event) => {
    const newProduct = {...this.state.newProduct}
    newProduct[event.target.name] = event.target.value
    this.setState({ newProduct })
  }

  toggleFormShowing = () => {
    const isShowing = !this.state.formShowing
    this.setState({ formShowing: isShowing})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const regionId = this.state.region._id
    // console.log(regionId)
    const response = await axios.post(`/api/regions/${regionId}/products/`, this.state.newProduct)
    console.log('Response:', response.data)
    const products = this.state.region.products
    // console.log(products)
    products.push(response.data)
    this.setState({ products })
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    const region = this.state.region 
    const productsList = this.state.region.products.map((product, i) => {
      return(
        <Product productInfo={product} regionId={this.state.region._id}/>
      )
    })
    return (
      <StyledPage>
        <div>
          <DeleteHeader regionId={this.state.region._id} />
          <HomeHeader />
          <HomeLink />
          <RegionNameAndImage image={this.state.region.image} name={this.state.region.name} />
           

          <NewProduct 
          brandName={this.state.newProduct.brandName} 
          productName={this.state.newProduct.productName} 
          description={this.state.newProduct.description} 
          image={this.state.newProduct.image} 
          price={this.state.newProduct.price}
          link={this.state.newProduct.link}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          region = {this.state.region}
          findRegion = {this.findRegion}
          />
        </div>
        <ProductListContainer>
        {productsList}
        </ProductListContainer>
      </StyledPage>
    )
  }
}