import React, { Component } from 'react'
import Rules from '../Rules/rules.jsx'
import './rulesButton.css'

class RulesButton extends Component {
  constructor (props) {
    super(props)
    this.showModal = this.showModal.bind(this)
    this.state = {
      show: false
    }
  }
  showModal () {
    if (document.getElementsByClassName('display-winner').length) {
      let displayWinner = document.getElementsByClassName('display-winner')[0]
      let winnerStyles = window.getComputedStyle(displayWinner)

      if (winnerStyles.getPropertyValue('opacity') === '1') {
        displayWinner.style.opacity = 0
      } else {
        displayWinner.style.opacity = 1
      }
    }
    if (window.outerWidth <= 500) {
      let headMain = document.getElementsByClassName('head-main')[0]
      let headMainStyles = window.getComputedStyle(headMain)
      if (headMainStyles.getPropertyValue('opacity') === '1') {
        headMain.style.opacity = 0
      } else {
        headMain.style.opacity = 1
      }
      if (document.getElementsByClassName('choice-main').length) {
        let choiceMain = document.getElementsByClassName('choice-main')[0]
        let choiceMainStyles = window.getComputedStyle(choiceMain)
        if (choiceMainStyles.getPropertyValue('opacity') === '1') {
          choiceMain.style.opacity = 0
        } else {
          choiceMain.style.opacity = 1
        }
      } else if (document.getElementsByClassName('game-main').length) {
        let gameMain = document.getElementsByClassName('game-main')[0]
        let gameMainStyles = window.getComputedStyle(gameMain)
        if (gameMainStyles.getPropertyValue('opacity') === '1') {
          gameMain.style.opacity = 0
        } else {
          gameMain.style.opacity = 1
        }
      }
    }
    this.setState({
      show: !this.state.show
    })
  }
  render () {
    return (
      <div className='rulesButton-main'>
        <Rules onClose={this.showModal} show={this.state.show}></Rules>
        <button
          onClick={e => {
            this.showModal(e)
          }}
          className='rules-button'
          id='centered-toggle-button'
        >
          {' '}
          RULES{' '}
        </button>
      </div>
    )
  }
}

export default RulesButton
