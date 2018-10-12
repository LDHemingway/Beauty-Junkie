import React, { Component } from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
    border-radius: 25%;
    width: 20vw;
    border: 1px white solid;
`
const StyledHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items:center;
    flex-wrap: wrap;
    padding: 10px;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 10px;
    border-radius: 10%;
    font-family: 'Poiret One', cursive; 
    p {
      height: 10vh;
      margin: 0 auto;

    } 
`

export default class About extends Component {
  render() {
    return (
      <StyledHeader>
        <div>
            <StyledImage src='SVG/Header.jpg' alt='Header' />
        </div>
        <div>
            <p>In my free time, I love to do makeup on others for special events and nights out. I can do a more toned-down look, or can create a full drag look. Here are some of my favorite go-to products and links to where you can purchase them!</p>
            <p>XO,<br/>Lauren</p>
        </div>
      </StyledHeader>
    )
  }
}
