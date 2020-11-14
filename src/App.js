import React from 'react'
import './App.css'
import Head from './components/Head/head.jsx'
import Choice from './components/Choice/choice.jsx'
import Game from './components/Game/game.jsx'
import RulesButton from './components/RulesButton/rulesButton.jsx'
let numOfOptions = 3

class App extends React.Component {
  state = {
    show: false
  }

  componentDidMount () {
    this.setState({
      score: JSON.parse(localStorage.getItem('score')) || 0,
      playerHasChosen: false
    })
  }
  handleScore (winner) {
    let currentScore = this.state.score
    console.log(winner)
    switch (winner) {
      case 'player':
        this.setState({ score: currentScore + 1 }, () => {
          localStorage.setItem('score', JSON.stringify(this.state.score))
        })
        break
      case 'house':
        this.setState({ score: currentScore - 1 }, () => {
          localStorage.setItem('score', JSON.stringify(this.state.score))
        })
        break

      default:
        break
    }
  }
  playAgain () {
    this.setState({ playerHasChosen: false })
  }

  handlePaper () {
    let paper = document.getElementsByClassName('paper')
    paper[0].style.boxShadow = '0 9px rgb(42, 59, 146)'
    paper[0].style.transform = 'translateY(0px)'
    setTimeout(() => {
      this.setState({ playerChoice: 'paper', playerHasChosen: true })
    }, 200)

    this.assignHouseChoice(this.housePick())
  }
  handleScissors () {
    let scissors = document.getElementsByClassName('scissors')
    scissors[0].style.boxShadow = '0 9px rgb(163, 109, 9)'
    scissors[0].style.transform = 'translateY(0px)'
    setTimeout(() => {
      this.setState({ playerChoice: 'scissors', playerHasChosen: true })
    }, 200)

    this.assignHouseChoice(this.housePick())
  }
  handleRock () {
    let rock = document.getElementsByClassName('rock')
    rock[0].style.boxShadow = '0 9px rgb(145, 30, 51)'
    rock[0].style.transform = 'translateY(0px)'
    setTimeout(() => {
      this.setState({ playerChoice: 'rock', playerHasChosen: true })
    }, 200)
    this.assignHouseChoice(this.housePick())
  }
  housePick () {
    return Math.floor(Math.random() * Math.floor(numOfOptions))
  }

  assignHouseChoice (numOfChoice) {
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
