import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    background: #8B636C;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    height: 30px;
    margin-top: 40px;
    h1 {
        color: white;
        font-size: 15px;
        padding-bottom: 10px;
        font-family: 'Poiret One', cursive; 
    }
`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <h1>&copy; BeautyJunkie</h1>
      </StyledFooter>
    )
  }
}
