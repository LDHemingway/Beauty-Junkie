import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'

export default class DeleteProduct extends Component {


  findRegion = async () => {
    const regionId = this.props.regionId
    const response = await axios.get(`/api/regions/${regionId}`)
    const region = response.data
    this.setState({region})
  }

  handleProductDelete = async (productId) => {
    const regionId = this.props.regionId
    console.log('deleting', regionId, productId)
    axios.delete(`/api/regions/${regionId}/products/${productId}`)
    console.log('Deleted')
    this.findRegion()
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="default" aria-label="Delete" onClick={() => this.handleProductDelete(this.props.id)}> Delete This Product </Button>
      </div>
    )
  }
}
