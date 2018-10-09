import React, { Component } from 'react'

export default class Region extends Component {
  state = {
    region: {
      name: '',
      image: '',
      products: []

    }
  }
  
  render() {
    const region = this.state.region 
    return (
      <div>
        Region Name
        {region.name}
        <div onClick={() => this.handleDelete(this.state.region._id)}> Delete This Region </div>
      </div>
    )
  }
}
