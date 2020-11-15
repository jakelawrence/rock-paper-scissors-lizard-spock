import React, { Component } from 'react'
import PaperImg from '../../images/icon-paper.svg'
import './paper.css'

class Paper extends Component {
  handlePaper () {
    this.props.paper()
  }
  handleMouseDown () {
    let paper = document.getElementsByClassName('paper')
    if (window.innerWidth > 375) {
      paper[0].style.boxShadow = '0 5px rgb(32, 45, 110)'
      paper[0].style.transform = 'translateY(4px)'
    } else {
      paper[0].style.boxShadow = '0 10px rgb(32, 45, 110)'
      paper[0].style.transform = 'translateY(2px)'
    }
  }

  render () {
    return (
      <>
        <div
          onMouseDown={this.props.paper && this.handleMouseDown.bind(this)}
          onMouseUp={this.props.paper && this.handlePaper.bind(this)}
          onTouchStart={this.props.paper && this.handleMouseDown.bind(this)}
          onTouchEnd={this.props.paper && this.handlePaper.bind(this)}
          className='paper'
        >
          <div className='paper-center'>
            <img src={PaperImg} alt='' />
          </div>
        </div>
      </>
    )
  }
}

export default Paper
