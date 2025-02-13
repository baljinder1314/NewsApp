import React, { Component } from 'react'
import loading from './loadingSpinner.gif';
export class Spinner extends Component {
  render() {
    return (
      <div  className='text-center ' style={{padding:"40px"}}>
        <img src={loading} alt="" />
      </div>
    )
  }
}

export default Spinner;