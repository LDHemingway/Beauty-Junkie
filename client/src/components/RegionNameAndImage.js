import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
`
const StyledImage = styled.img`
    width: 30vw;

`
export default class RegionNameAndImage extends Component {
  render() {
    return (
      <Container>
        <div>
            <StyledImage src={this.props.image} alt={this.props.name} />
        </div>
      </Container>
    )
  }
}
