import React, { Component } from 'react'
import LizardImg from '../../images/icon-lizard.svg'
import './lizard.css'

class Lizard extends Component {
  handleLizard () {
    this.props.lizard()
  }

  //animate button press down when user clicks mouse down
  //different animations for moblie and desktop
  handleMouseDown () {
    let lizard = document.getElementsByClassName('lizard')
    if (window.innerWidth > 500) {
      lizard[0].style.boxShadow = '0 5px hsl(260, 42%, 35%)'
      lizard[0].style.transform = 'translateY(4px)'
    } else {
      lizard[0].style.boxShadow = '0 3px hsl(260, 42%, 35%)'
      lizard[0].style.transform = 'translateY(2px)'
    }
  }

  render () {
    return (
      <>
        <div
          onMouseDown={this.props.lizard && this.handleMouseDown.bind(this)}
          onMouseUp={this.props.lizard && this.handleLizard.bind(this)}
          onTouchStart={this.props.lizard && this.handleMouseDown.bind(this)}
          onTouchEnd={this.props.lizard && this.handleLizard.bind(this)}
          className='lizard'
        >
          <div className='lizard-center'>
            <img src={LizardImg} alt='' />
          </div>
        </div>
      </>
    )
  }
}

export default Lizard
