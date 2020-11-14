import React, { Component } from 'react'
import './score.css'

class Score extends Component {
  state = {}
  render () {
    return (
      <div className='score-main'>
        <div className='score-details'>
          <div className='score-text'>SCORE</div>
          <div className='score-number'>{this.props.score}</div>
        </div>
      </div>
    )
  }
}

export default Score
