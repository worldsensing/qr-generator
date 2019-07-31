import React from 'react'
import './textInput.css'

class TextInput extends React.Component {
  constructor(props) {
    super(props)

    this.textInputRef = React.createRef();

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onChange(event.target.value)
  }

  shouldComponentUpdate({ value }) {
    return value.trim() !== this.props.value.trim()
  }

  render() {

    return (
      <textarea
        className="textInput"
        onChange={this.handleChange}
      />
    )
  }
}

export default TextInput