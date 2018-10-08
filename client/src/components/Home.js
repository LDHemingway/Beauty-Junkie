import React, { Component } from 'react'

export default class Home extends Component {
    state = {
        regions: [{
            name: '',
            image: '',
            products: []
        }]
    }
  render() {
      const regionsList = this.state.regions.map((region, i) => {
          return (
              <div>
                  {regionsList}
              </div>
          )
      })
    }
     
