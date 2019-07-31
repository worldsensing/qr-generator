import React from 'react'
import Button from '../button'
import InputText from '../inputText'
import './save.css'

class Save extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleInput(text) {
    this.setState({ text })
  }

  handleClick() {
    this.props.onSubmit(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div className="save">
        <InputText placeholder="Name your QR" value={this.state.text} onInput={this.handleInput} />
        <Button text="Save" onClick={this.handleClick}></Button>
      </div>
    )
  }
}

export default Save