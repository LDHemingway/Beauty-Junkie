import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div `
    font-family: 'Amatic SC', cursive;
    font-size: 20vw;

`

export default class HomeHeader extends Component {
  render() {
    return (
      <div>
        <StyledHeader>Beauty Junkie</StyledHeader>
      </div>
    )
  }
}
