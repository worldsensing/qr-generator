import React from 'react'
import Button from '../button'
import InputText from '../inputText'
import Message from '../message'
import './save.css'

class Save extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      valid: undefined
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleInput(text) {
    this.setState({ text })
  }

  handleClick() {
    if (!this.state.text) {
      this.setState({ valid: false })
    }
    else {
      this.props.onSubmit(this.state.text)
      this.setState({ valid: true, text: '' })
    }
  }

  render() {
    return (
      <div className="save">
        <InputText placeholder="Name your QR" value={this.state.text} onInput={this.handleInput} />
        <Button text="Save" onClick={this.handleClick}></Button>
        <Message valid={this.state.valid} />
      </div>
    )
  }
}

export default Save