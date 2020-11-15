import React, { Component } from 'react'
import RockImg from '../../images/icon-rock.svg'
import './rock.css'

class Rock extends Component {
  handleRock () {
    this.props.rock()
  }
  handleMouseDown () {
    let rock = document.getElementsByClassName('rock')

    if (window.outerWidth > 414) {
      rock[0].style.boxShadow = '0 5px rgb(104, 22, 37)'
      rock[0].style.transform = 'translateY(4px)'
    } else {
      rock[0].style.boxShadow = '0 3px rgb(104, 22, 37)'
      rock[0].style.transform = 'translateY(2px)'
    }
  }
  render () {
    return (
      <div
        onMouseDown={this.props.rock && this.handleMouseDown.bind(this)}
        onMouseUp={this.props.rock && this.handleRock.bind(this)}
        onTouchStart={this.props.rock && this.handleMouseDown.bind(this)}
        onTouchEnd={this.props.rock && this.handleRock.bind(this)}
        className='rock'
      >
        <div className='rock-center'>
          <img src={RockImg} alt='' />
        </div>
      </div>
    )
  }
}

export default Rock
