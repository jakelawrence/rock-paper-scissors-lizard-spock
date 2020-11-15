import React from 'react'
import './rules.css'
import PropTypes from 'prop-types'
import RulesImg from '../../images/image-rules-bonus.svg'

export default class Rules extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }
  render () {
    if (!this.props.show) {
      return null
    }
    return (
      <div className='modal' id='modal'>
        <div className='modal-content'>
          <div className='actions'>
            <div className='rules-text'>RULES</div>
            <button className='toggle-button' onClick={this.onClose}>
              X
            </button>
          </div>
          <img src={RulesImg} alt='' />
        </div>
      </div>
    )
  }
}
Rules.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}
