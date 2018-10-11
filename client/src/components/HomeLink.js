import React, { Component } from 'react'
import styled from 'styled-components'


const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
`
const StyledLink = styled.a`
    font-family: 'Poiret One', cursive;
    font-size: 5vw;
    text-decoration: none;
    a {
        text-decoration: none;
        color: white;
    &:hover {
        color: black;
    }
}
    
`

export default class HomeLink extends Component {
  render() {
    return (
        <LinkContainer>
            <StyledLink>
                <a href='/'>Home</a>
            </StyledLink>
        </LinkContainer>
        
      
    )
  }
}
