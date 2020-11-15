import React from 'react'
import './App.css'
import Head from './components/Head/head.jsx'
import Choice from './components/Choice/choice.jsx'
import Game from './components/Game/game.jsx'
import RulesButton from './components/RulesButton/rulesButton.jsx'
let numOfOptions = 5

class App extends React.Component {
  state = {}
  // when app is first started, is there is a score stored in the local storage
  // (aka: the user refreshed a previously started game) then the score will be set to that previous score,
  // else the score is initialized to zero
  componentDidMount () {
    this.setState({
      score: JSON.parse(localStorage.getItem('score')) || 0,
      playerHasChosen: false
    })
  }
  // if the player wins, the score is incrememnted by one
  // if the house wins, the score is decremented by one
  // then the score is saved to local storage for refresh capability
  handleScore (winner) {
    let currentScore = this.state.score

    switch (winner) {
      case 'player':
        this.setState({ score: currentScore + 1 }, () => {
          localStorage.setItem('score', JSON.stringify(this.state.score))
        })
        break
      case 'house':
        if (currentScore > 0) {
          this.setState({ score: currentScore - 1 }, () => {
            localStorage.setItem('score', JSON.stringify(this.state.score))
          })
        }

        break

      default:
        break
    }
  }
  //goes back to the choose-a-weapon screen
  playAgain () {
    this.setState({ playerHasChosen: false })
  }

  //if the player picks paper, sets player choice to paper
  //then it randomly generates a choice for the house
  //also handles css animation for button click
  //sets timeout so the animation isn't instant
  handlePaper () {
    let paper = document.getElementsByClassName('paper')
    if (window.outerWidth > 414) {
      paper[0].style.boxShadow = '0 9px rgb(42, 59, 146)'
    } else {
      paper[0].style.boxShadow = '0 6px rgb(42, 59, 146)'
    }
    paper[0].style.transform = 'translateY(0px)'
    setTimeout(() => {
      this.setState({ playerChoice: 'paper', playerHasChosen: true })
    }, 200)
    this.assignHouseChoice()
  }
  //same as handlePaper() but for scissors
  handleScissors () {
    let scissors = document.getElementsByClassName('scissors')
    if (window.outerWidth > 414) {
      scissors[0].style.boxShadow = '0 9px rgb(163, 109, 9)'
    } else {
      scissors[0].style.boxShadow = '0 6px rgb(163, 109, 9)'
    }
    scissors[0].style.transform = 'translateY(0px)'
    setTimeout(() => {
      this.setState({ playerChoice: 'scissors', playerHasChosen: true })
    }, 200)

    this.assignHouseChoice()
  }
  //same as handlePaper() but for rock
  handleRock () {
    let rock = document.getElementsByClassName('rock')
    if (window.outerWidth > 414) {
      rock[0].style.boxShadow = '0 9px rgb(145, 30, 51)'
    } else {
      rock[0].style.boxShadow = '0 6px rgb(145, 30, 51)'
    }
    rock[0].style.transform = 'translateY(0px)'
    setTimeout(() => {
      this.setState({ playerChoice: 'rock', playerHasChosen: true })
    }, 200)
    this.assignHouseChoice()
  }
  //same as handlePaper() but for Spock
  handleSpock () {
    let spock = document.getElementsByClassName('spock')
    if (window.outerWidth > 414) {
      spock[0].style.boxShadow = '0 9px rgb(62, 144, 158)'
    } else {
      spock[0].style.boxShadow = '0 6px rgb(62, 144, 158)'
    }
    spock[0].style.transform = 'translateY(0px)'
    setTimeout(() => {
      this.setState({ playerChoice: 'spock', playerHasChosen: true })
    }, 200)
    this.assignHouseChoice()
  }
  //same as handlePaper() but for Lizard
  handleLizard () {
    let lizard = document.getElementsByClassName('lizard')
    if (window.outerWidth > 414) {
      lizard[0].style.boxShadow = '0 9px hsl(260, 42%, 42%)'
    } else {
      lizard[0].style.boxShadow = '0 6px hsl(260, 42%, 42%)'
    }
    lizard[0].style.transform = 'translateY(0px)'
    setTimeout(() => {
      this.setState({ playerChoice: 'lizard', playerHasChosen: true })
    }, 200)
    this.assignHouseChoice()
  }

  //generates random number from the global numOfOptions variable
  //assigns the given number to its corresponding move
  //sets state of the house's choice to said move
  assignHouseChoice () {
    let numOfChoice = Math.floor(Math.random() * Math.floor(numOfOptions))
    switch (numOfChoice) {
      case 0:
        this.setState({ houseChoice: 'paper' })
        break
      case 1:
        this.setState({ houseChoice: 'scissors' })
        break
      case 2:
        this.setState({ houseChoice: 'rock' })
        break
      case 3:
        this.setState({ houseChoice: 'spock' })
        break
      case 4:
        this.setState({ houseChoice: 'lizard' })
        break

      default:
        break
    }
  }

  render () {
    return (
      <div className='App'>
        <Head score={this.state.score} />
        {!this.state.playerHasChosen && (
          <Choice
            paper={this.handlePaper.bind(this)}
            scissors={this.handleScissors.bind(this)}
            rock={this.handleRock.bind(this)}
            spock={this.handleSpock.bind(this)}
            lizard={this.handleLizard.bind(this)}
          />
        )}
        {this.state.playerHasChosen && (
          <Game
            houseChoice={this.state.houseChoice}
            playerChoice={this.state.playerChoice}
            handleScore={this.handleScore.bind(this)}
            playAgain={this.playAgain.bind(this)}
          />
        )}

        <RulesButton></RulesButton>
      </div>
    )
  }
}

export default App
