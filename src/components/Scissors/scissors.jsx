import React, { Component } from 'react'
import ScissorsImg from '../../images/icon-scissors.svg'
import './scissors.css'

class Scissors extends Component {
  handleScissors () {
    this.props.scissors()
  }
  //animate button press down when user clicks mouse down
  //different animations for moblie and desktop
  handleMouseDown () {
    let scissors = document.getElementsByClassName('scissors')
    if (window.innerWidth > 414) {
      scissors[0].style.boxShadow = '0 5px hsl(39, 89%, 29%)'
      scissors[0].style.transform = 'translateY(4px)'
    } else {
      scissors[0].style.boxShadow = '0 2px hsl(39, 89%, 29%)'
      scissors[0].style.transform = 'translateY(4px)'
    }
  }

  render () {
    return (
      <div
        onMouseDown={this.props.scissors && this.handleMouseDown.bind(this)}
        onMouseUp={this.props.scissors && this.handleScissors.bind(this)}
        onTouchStart={this.props.scissors && this.handleMouseDown.bind(this)}
        onTouchEnd={this.props.scissors && this.handleScissors.bind(this)}
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
