import React, { Component } from 'react'
import Paper from '../Paper/paper.jsx'
import Scissors from '../Scissors/scissors.jsx'
import Rock from '../Rock/rock.jsx'
import Spock from '../Spock/spock.jsx'
import Lizard from '../Lizard/lizard.jsx'

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
  handleSpock () {
    this.props.spock()
  }
  handleLizard () {
    this.props.lizard()
  }

  render () {
    return (
      <div className='choice-main'>
        <div className='firstRow'>
          <Scissors scissors={this.handleScissors.bind(this)} />
        </div>
        <div className='secondRow'>
          <Spock spock={this.handleSpock.bind(this)} />
          <Paper paper={this.handlePaper.bind(this)} />
        </div>
        <div className='thirdRow'>
          <Lizard lizard={this.handleLizard.bind(this)} />
          <Rock rock={this.handleRock.bind(this)} />
        </div>
      </div>
    )
  }
}

export default Choice
