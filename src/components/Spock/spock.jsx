import React, { Component } from 'react'
import SpockImg from '../../images/icon-spock.svg'
import './spock.css'

class Spock extends Component {
  handleSpock () {
    this.props.spock()
  }
  //animate button press down when user clicks mouse down
  //different animations for moblie and desktop
  handleMouseDown () {
    let spock = document.getElementsByClassName('spock')
    if (window.innerWidth > 414) {
      spock[0].style.boxShadow = '0 5px hsl(189, 43%, 35%)'
      spock[0].style.transform = 'translateY(4px)'
    } else {
      spock[0].style.boxShadow = '0 3px hsl(189, 43%, 35%)'
      spock[0].style.transform = 'translateY(2px)'
    }
  }

  render () {
    return (
      <div
        onMouseDown={this.props.spock && this.handleMouseDown.bind(this)}
        onMouseUp={this.props.spock && this.handleSpock.bind(this)}
        onTouchStart={this.props.spock && this.handleMouseDown.bind(this)}
        onTouchEnd={this.props.spock && this.handleSpock.bind(this)}
        className='spock'
      >
        <div className='spock-center'>
          <img src={SpockImg} alt='' />
        </div>
      </div>
    )
  }
}

export default Spock
