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
    background: #e0d0db;
    flex-wrap: wrap;
    padding: 10px;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 10px;
    border-radius: 10%;
    font-family: 'Poiret One', cursive;   
`

export default class About extends Component {
  render() {
    return (
      <StyledHeader>
        <div>
            <StyledImage src='SVG/Header.jpg' alt='Header' />
        </div>
        <div>
            <p>nasfnldsflandfsdklksdnfjkfblsaknjkasnalnasld skjfbasdnsdfbjknsalknsjkbdjabsfslknasdklfnlkasfjkbslknasdbflknasklfakbldflsdnclkndflsdlkfnsakl</p>
        </div>
      </StyledHeader>
    )
  }
}
