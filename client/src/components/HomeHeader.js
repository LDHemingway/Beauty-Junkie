import React, { Component } from 'react'
import styled from 'styled-components'


const StyledHeader = styled.div `
    font-family: 'Amatic SC', cursive;
    font-size: 15vw;
    text-decoration: none;
    color: white;
    &:visited {
        text-decoration: none;
    }
    a {
        text-decoration: none;
        color: white;
    }
`
const StyledLink = styled.a`
    font-family: 'Poiret One', cursive;
    font-size: 10vw;
    text-decoration: none;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin-left: 20px;
    margin-right: 20px;
`

export default class HomeHeader extends Component {
  render() {
    return (
      <HeaderContainer>
        <StyledHeader><a href='/'>Beauty Junkie</a></StyledHeader>
      </HeaderContainer>
    )
  }
}
