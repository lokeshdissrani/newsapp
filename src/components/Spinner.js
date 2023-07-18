import React, { Component } from 'react'
import loading from './Fidget-spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' >
        <img src={loading} alt="loading" style={{height:"250px",width:"250px"}}/>
      </div>
    )
  }
}

export default Spinner
