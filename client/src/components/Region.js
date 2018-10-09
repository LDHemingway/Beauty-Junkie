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
    const { image, _id } = this.state.region 
    return (
      <div>
        Region Name
        {this.state.region.image}
        <div onClick={() => this.handleDelete(this.state.region._id)}> Delete This Region </div>
      </div>
    )
  }
}
