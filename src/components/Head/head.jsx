import React, { Component } from 'react'
import Score from '../Score/score.jsx'
import logo from '../../images/logo.svg'
import './head.css'

class Head extends Component {
  render () {
    return (
      <div className='head-container'>
        <div className='head-main'>
          <img src={logo} alt='score' />
          <Score score={this.props.score} />
        </div>
      </div>
    )
  }
}

export default Head
