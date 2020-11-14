import React, { Component } from 'react'

import Paper from '../Paper/paper.jsx'
import Scissors from '../Scissors/scissors.jsx'
import Rock from '../Rock/rock.jsx'

import './choice.css'

class Choice extends Component {
  state = {}
  handlePaper () {
    this.props.paper()
  }
  handleScissors () {
    this.props.scissors()
  }
  handleRock () {
    this.props.rock()
  }

  render () {
    return (
      <div className='choice-main'>
        <div className='firstRow'>
          <Paper paper={this.handlePaper.bind(this)} />
          <Rock rock={this.handleRock.bind(this)} />
        </div>
        <div className='secondRow'>
          <Scissors scissors={this.handleScissors.bind(this)} />
        </div>
      </div>
    )
  }
}

export default Choice
