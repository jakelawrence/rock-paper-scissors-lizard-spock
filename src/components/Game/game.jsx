import React, { Component } from 'react'
import Paper from '../Paper/paper.jsx'
import Scissors from '../Scissors/scissors.jsx'
import Rock from '../Rock/rock.jsx'
import './game.css'

class Game extends Component {
  state = {
    houseChoiceReady: false
  }

  componentDidMount () {
    this.setState({ winner: null })
    setTimeout(() => {
      this.delayHousePick()
      this.chooseWinner()
    }, 2000)
  }

  handleScore () {
    this.props.handleScore(this.state.winner)
  }

  handlePlayAgain () {
    this.props.playAgain()
  }

  delayHousePick () {
    this.setState({ houseChoiceReady: true })
  }

  chooseWinner () {
    let player = this.props.playerChoice
    let house = this.props.houseChoice
    if (player === 'paper') {
      if (house === 'paper') {
        this.setState({ winner: 'tie' })
      } else if (house === 'scissors') {
        this.setState({ winner: 'house' })
      } else {
        this.setState({ winner: 'player' })
      }
    } else if (player === 'scissors') {
      if (house === 'paper') {
        this.setState({ winner: 'player' })
      } else if (house === 'scissors') {
        this.setState({ winner: 'tie' })
      } else {
        this.setState({ winner: 'house' })
      }
    } else {
      if (house === 'paper') {
        this.setState({ winner: 'house' })
      } else if (house === 'scissors') {
        this.setState({ winner: 'player' })
      } else {
        this.setState({ winner: 'tie' })
      }
    }
    this.handleScore()
  }
  handleWinner = winnersChoice => {
    if (winnersChoice === 'paper') {
      let winnerStyle = document.getElementsByClassName('paper')
      winnerStyle[0].style.animation = 'pulsatePaper 1s ease-out infinite'
      winnerStyle[0].style.animationDirection = 'alternate'
      winnerStyle[0].style.zIndex = '-1'
    } else if (winnersChoice === 'scissors') {
      let winnerStyle = document.getElementsByClassName('scissors')
      winnerStyle[0].style.animation = 'pulsateScissor 1s ease-out infinite'
      winnerStyle[0].style.animationDirection = 'alternate'
      winnerStyle[0].style.zIndex = '-1'
    } else {
      let winnerStyle = document.getElementsByClassName('rock')
      winnerStyle[0].style.animation = 'pulsateRock 1s ease-out infinite'
      winnerStyle[0].style.animationDirection = 'alternate'
      winnerStyle[0].style.zIndex = '-1'
    }
  }
  render () {
    return (
      <div className='game-main'>
        <div className='player-choice'>
          YOU PICKED
          {this.props.playerChoice === 'paper' && <Paper />}
          {this.props.playerChoice === 'scissors' && <Scissors />}
          {this.props.playerChoice === 'rock' && <Rock />}
          {this.state.winner &&
            this.state.winner === 'player' &&
            this.handleWinner(this.props.playerChoice)}
        </div>

        {this.state.winner && (
          <div className='display-winner'>
            {this.state.winner === 'player' && <div>YOU WIN</div>}
            {this.state.winner === 'house' && <div>YOU LOSE</div>}
            {this.state.winner === 'tie' && <div>IT'S A TIE</div>}
            <button
              onClick={() => this.handlePlayAgain()}
              className='play-again'
            >
              PLAY AGAIN
            </button>
          </div>
        )}

        {this.state.houseChoiceReady && (
          <div className='house-choice'>
            THE HOUSE PICKED
            {this.props.houseChoice === 'paper' && <Paper />}
            {this.props.houseChoice === 'scissors' && <Scissors />}
            {this.props.houseChoice === 'rock' && <Rock />}
            {this.state.winner &&
              this.state.winner === 'house' &&
              this.handleWinner(this.props.houseChoice)}
          </div>
        )}
        {!this.state.houseChoiceReady && (
          <div className='house-choosing'>
            THE HOUSE PICKED
            <div className='house-choosing-symbol'></div>
          </div>
        )}
      </div>
    )
  }
}

export default Game
