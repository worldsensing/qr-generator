import React from 'react'
import ContentEditable from 'react-contenteditable'
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
      <ContentEditable
        tabIndex={0}
        className="textInput"
        innerRef={this.textInputRef}
        html={this.props.value}
        disabled={false}
        onChange={this.handleChange}
        tagName='code'
      />
    )
  }
}

export default TextInput