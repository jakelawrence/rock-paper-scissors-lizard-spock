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
