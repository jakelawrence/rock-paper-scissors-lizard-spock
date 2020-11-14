import React, { Component } from 'react'
import ScissorsImg from '../../images/icon-scissors.svg'
import './scissors.css'

class Scissors extends Component {
  handleScissors () {
    this.props.scissors()
  }
  handleMouseDown () {
    let scissors = document.getElementsByClassName('scissors')
    scissors[0].style.boxShadow = '0 5px rgb(145, 97, 8)'
    scissors[0].style.transform = 'translateY(4px)'
  }

  render () {
    return (
      <div
        onMouseDown={this.props.scissors && this.handleMouseDown.bind(this)}
        onMouseUp={this.props.scissors && this.handleScissors.bind(this)}
        className='scissors'
      >
        <div className='scissors-center'>
          <img src={ScissorsImg} alt='' />
        </div>
      </div>
    )
  }
}

export default Scissors
