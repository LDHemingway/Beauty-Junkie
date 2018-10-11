import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header';


const StyledHeader = styled.div `
    font-family: 'Amatic SC', cursive;
    font-size: 15vw;
    text-decoration: none;
    color: white;
    &:visited {
        text-decoration: none;
    }
    :a {
        text-decoration: none;
        color: white;
    }

`
const HeaderContainer = styled.div`
    display: flex;
    align-content: center;
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
