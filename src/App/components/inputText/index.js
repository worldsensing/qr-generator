import React from 'react'
import './inputText.css'

class InputText extends React.Component {
  constructor(props) {
    super(props)

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput = event => this.props.onInput(event.target.value)

  shouldComponentUpdate({ value }) {
    return value !== this.props.value
  }

  render() {
    return (
      <input
        type="text"
        className="input--checkbox"
        value={this.props.value}
        onChange={this.handleInput}
        placeholder={this.props.placeholder}
      />
    )
  }
}

export default InputText