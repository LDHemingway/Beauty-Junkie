import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const StyledHeader = styled.div`
    background: #8B636C;
    color: white;
    display: flex;
    align-content: right;
    padding: 15px;
    justify-content: flex-end;
    align-self: right;
    a {
      text-decoration: none;
      color: white;
      font-weight: 700;
    }
`


export default class Header extends Component {

    state = {
        redirect: false,
        region: {
            _id: '',
            name: '',
            image: '',
            products: []
        }
    }

    handleDelete = (regionId, res) => {
        axios.delete(`/api/regions/${regionId}`)
        console.log('deleted')
        this.setState({redirect: true})
      }

  render() {
    if (this.state.redirect) {
        return <Redirect to='/' />
      }
    return (
      <StyledHeader>
        <a href='/' onClick={() => this.handleDelete(this.props.regionId)}> Delete This Region </a>
      </StyledHeader>
    )
  }
}
