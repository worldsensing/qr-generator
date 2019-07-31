import React from 'react'
import ContentEditable from 'react-contenteditable'
import './textInput.css'

class TextInput extends React.Component {
  constructor(props) {
    super(props)

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
        tabIndex={0}
        className="textInput"
        onChange={this.handleChange}
        tagName='code'
      >
        {this.props.value}
      </textarea>
    )
  }
}

export default TextInput