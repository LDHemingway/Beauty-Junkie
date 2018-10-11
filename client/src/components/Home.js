import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledImage = styled.img`
    background: rgba(255, 158, 44, 0);
    width: 20vw;
    height: 20vw;
    &:hover {
        background-color: white;
        border: 4px solid black;
        border-radius: 50%;

    }
`

export default class Home extends Component {
    state = {
        regions: [{
            name:'',
            image: '',
            _id:'',
            products: []
        }],
        formShowing: false,
        newRegion: {
            name: '',
            image: '',
            products: []

        }
    }

    getRegions = async () => {
    const response = await axios.get('/api/regions')
    console.log(response.data)
    this.setState({
        regions: response.data
    })
    }

    componentDidMount = () => {
        this.getRegions()
    }

    toggleFormShowing = () => {
        const isShowing = !this.state.formShowing
        this.setState({ formShowing: isShowing})
    }

    handleNew = async () => {
        await axios.post('/api/regions/')
        await this.getRegions()
      }
    
    handleChange = (event) => {
        const newRegion = {...this.state.newRegion}
        newRegion[event.target.name] = event.target.value
        this.setState({ newRegion })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        console.log(this.state.newRegion)
        const response = await axios.post('/api/regions', this.state.newRegion)
        const regions = [...this.state.regions]
        regions.push(response.data)
        this.setState({ regions })
    }
    

  render() {
      const regionsList = this.state.regions.map((region, i) => {
          return (
              <div key={i}>
              <Link to={`/${region._id}`}><StyledImage src={region.image} alt={region.name}/></Link>
              </div>
          )
      })
    return (
      <div>
        <h1>Beauty Junkie</h1>
        {regionsList}
        
    {this.state.formShowing ? null : <button onClick={this.toggleFormShowing}>Create New Region</button>} 
        
        
        {this.state.formShowing ? <form onSubmit={this.handleSubmit} >
            <input type='text' name='name' value={this.state.newRegion.name} placeholder='Region Name'
              onChange={this.handleChange}/>
            <input type='text' name='image' value={this.state.newRegion.image} placeholder='URL Image Source'
            onChange={this.handleChange}/>
            <input type='submit' value='Create'/>
        </form> : null}


        

      </div>
    )
  } 
}
