import React from 'react'
import formatHighlight from 'json-format-highlight'
import Parser from 'html-react-parser'

class ContentEditable extends React.Component {
  constructor(props) {
    super(props)


    this.colorOptions = {
      keyColor: '#f00',
      numberColor: '#0f0',
      stringColor: '#00f',
      trueColor: '#ff0',
      falseColor: '#0ff',
      nullColor: '#f0f'
    }

    this.emitChange = this.emitChange.bind(this)
  }

  emitChange(event) {
    const { innerText: value } = event.target
    this.props.onChange(value)

  }

  shouldComponentUpdate({ value }) {
    return value !== this.props.value
  }

  render() {
    let innerContent = undefined
    try {
      const json = JSON.parse(this.props.value),
        html = formatHighlight(json, this.colorOptions)
      innerContent = Parser(html)
    }
    catch (error) {
      innerContent = this.props.value
    }

    return (
      <div
        tabIndex={0}
        onInput={this.emitChange}
        onBlur={this.emitChange}
        contentEditable
        placeholder={this.props.placeholder}
      >
        {innerContent}
      </div>
    )
  }
}

export default ContentEditable