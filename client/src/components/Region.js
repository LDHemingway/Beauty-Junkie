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
    newProduct : [{
      brandName: '',
      productName: '',
      description: '',
      image: '',
      price: '',
      link: ''
    }]
  }
  


  findRegion = async () => {
    const regionId = this.props.match.params.regionId
    const response = await axios.get(`/api/regions/${regionId}`)
    const region = response.data
    console.log("REPONSE: ", region)
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

  handleDelete = (regionId, res) => {
    axios.delete(`/api/regions/${regionId}`)
    console.log('deleted')
    this.setState({redirect: true})
  }

  handleProductDelete = (productId) => {
    const regionId = this.state.region._id
    const id = this.state.product._id
    axios.delete(`/api/regions/${regionId}/products/${id}`)
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
    const response = await axios.post(`/api/regions/${regionId}/products`, this.state.newProduct)
    const products = this.state.products
    products.push(response.data)
    this.setState({ products })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    const region = this.state.region 
    console.log("Region", region)
    console.log("Products", region.products)
    const productsList = this.state.region.products.map((product, i) => {
      return(
        <div key={i}>
        <StyledImage src={product.image} alt={product.productName} />
        <div><strong>{product.price}</strong></div>
        <div>{product.brandName}</div>
        <div>{product.productName}</div>
        <button onClick={() => this.handleProductDelete(product._id)}> Delete This Product</button>
        </div>
      )
    })
    return (
      <StyledPage>
        <div>
          <StyledHeader src={region.image} alt={region.name}/>
          {region.name}
          {this.state.formShowing ? null : <button onClick={this.toggleFormShowing}>List New Product</button>}

           {this.state.formShowing ? 
              <form onSubmit={this.handleSubmit} >
                <div>
                <input type='text' name='brandName' value={this.state.newProduct.brandName} placeholder='Brand Name'
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