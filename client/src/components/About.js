import React, { Component } from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
    border-radius: 25%;
    width: 20vw;
    height: 20vw;
    border: .5px white solid;
`
const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    
`

export default class About extends Component {
  render() {
    return (
      <StyledHeader>
        <div>
            <StyledImage src='SVG/Header.jpg' alt='Header' />
        </div>
        <div>
            <p>nasfnldsflandfsdklksdnfjkfblsakn</p>
        </div>
      </StyledHeader>
    )
  }
}
