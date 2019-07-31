import React from 'react'
import './message.css'

class Message extends React.Component {
  render() {
    const isBoolean = Boolean(this.props.valid) === this.props.valid

    return isBoolean ? (
      <div
        className={['message', this.props.valid ? 'message--valid' : 'message--error'].join(' ')}>

        {this.props.valid ? 'Saved successfully' : 'Add a valid name'}
      </div>
    ) : null
  }
}

export default Message