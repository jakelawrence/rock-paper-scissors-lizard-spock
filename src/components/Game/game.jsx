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
      this.setState({ houseChoiceReady: true })

      setTimeout(() => {
        this.chooseWinner()
      }, 1000)
    }, 2000)
  }

  //assign handleScore to props for main app
  handleScore () {
    this.props.handleScore(this.state.winner)
  }

  //assign handleScore to props
  handlePlayAgain () {
    this.props.playAgain()
  }

  //sets state of winner, ie player or house
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

  //adds winning animations and offsets winner so animation doesn't overlap loser's piece
  handleWinner = (winner, winnersChoice) => {
    if (winner === 'player') {
      let winnerPiece = document.getElementsByClassName('player-choice')[0]
      let loserPiece = document.getElementsByClassName('house-choice')[0]
      let winnerStyle = document.getElementsByClassName(winnersChoice)[0].style
      let winnerCapitalized =
        winnersChoice.charAt(0).toUpperCase() + winnersChoice.slice(1)
      winnerStyle.animation =
        'pulsate' + winnerCapitalized + ' 1s ease-out infinite'

      winnerStyle.animationDirection = 'alternate'
      if (window.outerWidth <= 500) {
        winnerPiece.style.zIndex = '0'
        loserPiece.style.zIndex = '1'
      }
    } else if (winner === 'house') {
      let winnerPiece = document.getElementsByClassName('house-choice')[0]
      let loserPiece = document.getElementsByClassName('player-choice')[0]
      let winnerStyle = document.getElementsByClassName(winnersChoice)[0].style
      let winnerCapitalized =
        winnersChoice.charAt(0).toUpperCase() + winnersChoice.slice(1)
      winnerStyle.animation =
        'pulsate' + winnerCapitalized + ' 1s ease-out infinite'
      winnerStyle.animationDirection = 'alternate'
      if (window.outerWidth <= 500) {
        winnerPiece.style.zIndex = '0'
        loserPiece.style.zIndex = '1'
      }
    }
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
            this.handleWinner(this.state.winner, this.props.playerChoice)}
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
                this.handleWinner(this.state.winner, this.props.houseChoice)}
            </>
          )}
          {!this.state.houseChoiceReady && (
            <>
              <div className='house-choice-title'>THE HOUSE PICKED</div>
              <div className='house-choosing'></div>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Game
