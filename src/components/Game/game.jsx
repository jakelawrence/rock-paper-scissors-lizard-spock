import React, { Component } from 'react'
import Paper from '../Paper/paper.jsx'
import Scissors from '../Scissors/scissors.jsx'
import Rock from '../Rock/rock.jsx'
import Spock from '../Spock/spock.jsx'
import Lizard from '../Lizard/lizard.jsx'
import './game.css'

class Game extends Component {
  state = {
    houseChoiceReady: false
  }

  componentDidMount () {
    this.setState({ winner: null })
    setTimeout(() => {
      this.delayHousePick()

      setTimeout(() => {
        this.chooseWinner()
      }, 1000)
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
      } else if (house === 'rock') {
        this.setState({ winner: 'player' })
      } else if (house === 'lizard') {
        this.setState({ winner: 'house' })
      } else if (house === 'spock') {
        this.setState({ winner: 'player' })
      }
    } else if (player === 'scissors') {
      if (house === 'paper') {
        this.setState({ winner: 'player' })
      } else if (house === 'scissors') {
        this.setState({ winner: 'tie' })
      } else if (house === 'rock') {
        this.setState({ winner: 'house' })
      } else if (house === 'lizard') {
        this.setState({ winner: 'player' })
      } else if (house === 'spock') {
        this.setState({ winner: 'house' })
      }
    } else if (player === 'rock') {
      if (house === 'paper') {
        this.setState({ winner: 'house' })
      } else if (house === 'scissors') {
        this.setState({ winner: 'player' })
      } else if (house === 'rock') {
        this.setState({ winner: 'tie' })
      } else if (house === 'lizard') {
        this.setState({ winner: 'player' })
      } else if (house === 'spock') {
        this.setState({ winner: 'house' })
      }
    } else if (player === 'spock') {
      if (house === 'paper') {
        this.setState({ winner: 'house' })
      } else if (house === 'scissors') {
        this.setState({ winner: 'player' })
      } else if (house === 'rock') {
        this.setState({ winner: 'player' })
      } else if (house === 'lizard') {
        this.setState({ winner: 'house' })
      } else if (house === 'spock') {
        this.setState({ winner: 'tie' })
      }
    } else if (player === 'lizard') {
      if (house === 'paper') {
        this.setState({ winner: 'player' })
      } else if (house === 'scissors') {
        this.setState({ winner: 'house' })
      } else if (house === 'rock') {
        this.setState({ winner: 'house' })
      } else if (house === 'lizard') {
        this.setState({ winner: 'tie' })
      } else if (house === 'spock') {
        this.setState({ winner: 'player' })
      }
    }
    this.handleScore()
  }
  handleWinner = (winnersChoice, losersChoice) => {
    if (winnersChoice === 'paper') {
      let winnerStyle = document.getElementsByClassName('paper')
      let loserStyle = document.getElementsByClassName('rock')
      winnerStyle[0].style.animation = 'pulsatePaper 1s ease-out infinite'
      winnerStyle[0].style.animationDirection = 'alternate'
      winnerStyle[0].style.zIndex = 0
      loserStyle[0].style.zIndex = 1
    } else if (winnersChoice === 'scissors') {
      let winnerStyle = document.getElementsByClassName('scissors')
      winnerStyle[0].style.animation = 'pulsateScissor 1s ease-out infinite'
      winnerStyle[0].style.animationDirection = 'alternate'
      winnerStyle[0].style.zIndex = 0
    } else if (winnersChoice === 'rock') {
      let winnerStyle = document.getElementsByClassName('rock')
      winnerStyle[0].style.animation = 'pulsateRock 1s ease-out infinite'
      winnerStyle[0].style.animationDirection = 'alternate'
      winnerStyle[0].style.zIndex = 0
    } else if (winnersChoice === 'spock') {
      let winnerStyle = document.getElementsByClassName('spock')
      winnerStyle[0].style.animation = 'pulsateSpock 1s ease-out infinite'
      winnerStyle[0].style.animationDirection = 'alternate'
      winnerStyle[0].style.zIndex = 0
    } else if (winnersChoice === 'lizard') {
      let winnerStyle = document.getElementsByClassName('lizard')
      winnerStyle[0].style.animation = 'pulsateLizard 1s ease-out infinite'
      winnerStyle[0].style.animationDirection = 'alternate'
      winnerStyle[0].style.zIndex = 0
    }
    // let winnerStyle = document.getElementsByClassName(winnersChoice)
    // let loserStyle = document.getElementsByClassName(losersChoice)
    // winnerStyle[0].style.animation = 'pulsatescissors 1s ease-out infinite'
    // winnerStyle[0].style.animationDirection = 'alternate'
    // winnerStyle[0].style.zIndex = 0
    // loserStyle[0].style.zIndex = 1
  }
  render () {
    return (
      <div className='game-main'>
        <div className='player-choice'>
          <div className='player-choice-title'>YOU PICKED</div>
          {this.props.playerChoice === 'paper' && <Paper />}
          {this.props.playerChoice === 'scissors' && <Scissors />}
          {this.props.playerChoice === 'rock' && <Rock />}
          {this.props.playerChoice === 'spock' && <Spock />}
          {this.props.playerChoice === 'lizard' && <Lizard />}
          {this.state.winner &&
            this.state.winner === 'player' &&
            this.handleWinner(this.props.playerChoice, this.props.houseChoice)}
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

        <div className='house-choice'>
          {this.state.houseChoiceReady && (
            <>
              <div className='house-choice-title'>THE HOUSE PICKED</div>
              {this.props.houseChoice === 'paper' && <Paper />}
              {this.props.houseChoice === 'scissors' && <Scissors />}
              {this.props.houseChoice === 'rock' && <Rock />}
              {this.props.houseChoice === 'spock' && <Spock />}
              {this.props.houseChoice === 'lizard' && <Lizard />}
              {this.state.winner &&
                this.state.winner === 'house' &&
                this.handleWinner(
                  this.props.houseChoice,
                  this.props.playerChoice
                )}
            </>
          )}
          {!this.state.houseChoiceReady && (
            <div className='house-choosing'>
              <div className='house-choice-title'>THE HOUSE PICKED</div>
              <div className='house-choosing-symbol'></div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Game
