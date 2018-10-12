import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'

export default class DeleteProduct extends Component {

  handleProductDelete = async (productId) => {
    const regionId = this.props.region._id
    axios.delete(`/api/regions/${regionId}/products/${productId}`)
    this.findRegion()
  }

  findRegion = async () => {
    const regionId = this.props.match.params.regionId
    const response = await axios.get(`/api/regions/${regionId}`)
    const region = response.data
    this.setState({region})
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="default" aria-label="Delete" onClick={() => this.handleProductDelete(this.props.id)}> Delete This Product </Button>
      </div>
    )
  }
}
