import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'

export default class DeleteProduct extends Component {


  handleProductDelete = async (productId) => {
    const regionId = this.props.regionId
    console.log('deleting', regionId, productId)
    axios.delete(`/api/regions/${regionId}/products/${productId}`)
    console.log('Deleted')
    this.props.findRegion()
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="default" aria-label="Delete" onClick={() => this.handleProductDelete(this.props.id)}> Delete This Product </Button>
      </div>
    )
  }
}
