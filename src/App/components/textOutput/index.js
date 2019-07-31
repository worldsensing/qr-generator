import React from 'react'
import ReactJson from 'react-json-view'
import ContentEditable from 'react-contenteditable'
import './textOutput.css'

class TextOutput extends React.Component {
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

    this.textOutputRef = React.createRef()
  }

  shouldComponentUpdate({ value }) {
    return value.trim() !== this.props.value.trim()
  }

  render() {
    const { value } = this.props,
      data = value.trim()

    try {
      const json = JSON.parse(data)
      return <ReactJson src={json} theme="monokai" />
    }
    catch (error) {
      return <ContentEditable
        tabIndex={1}
        className="textOutput"
        innerRef={this.textOutputRef}
        html={data}
        disabled={true}
        tagName='code'
      />
    }
  }
}

export default TextOutput