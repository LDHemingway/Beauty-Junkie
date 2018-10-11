import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class DeleteProduct extends Component {
  render() {
    return (
      <div>
        <Button variant="fab" color="primary" aria-label="Delete" onClick={() => this.handleProductDelete(this.props.id)}> Delete This Product </Button>
      </div>
    )
  }
}
