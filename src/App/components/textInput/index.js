import React from 'react'
import formatHighlight from 'json-format-highlight'
import Parser from 'html-react-parser'
import ReactDOMServer from 'react-dom/server'
import ContentEditable from 'react-contenteditable'
import './textInput.css'

class TextInput extends React.Component {
  constructor(props) {
    super(props)

    this.colorOptions = {
      keyColor: '#8d228d',
      stringColor: '#99c794',
      numberColor: '#6699cc',
      trueColor: '#f99157',
      falseColor: '#ec5f67',
      nullColor: '#fac863'
    }

    this.textInputRef = React.createRef();

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {

    const { value } = event.target,
      html = Parser(value)

    let response = value

    if (Array.isArray(html)) {
      response = html.reduce((prev, text) => `${prev}${text === Object(text) ? text.props.children : text}`, ``)
    }


    this.props.onChange(response)

  }

  shouldComponentUpdate({ value }) {
    return value.trim() !== this.props.value.trim()
  }

  render() {
    let innerContent = undefined
    try {
      const json = JSON.parse(this.props.value),
        html = formatHighlight(json, this.colorOptions),
        react = Parser(html)
      innerContent = ReactDOMServer.renderToStaticMarkup(react)
    }
    catch (error) {
      innerContent = this.props.value
    }

    return (
      <ContentEditable
        tabIndex={0}
        className="textInput"
        innerRef={this.textInputRef}
        html={innerContent}
        disabled={false}
        onChange={this.handleChange}
        tagName='code'
      />
    )
  }
}

export default TextInput