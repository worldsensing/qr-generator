import React from 'react'
import ReactJson from 'react-json-view'
import './textOutput.css'

class TextOutput extends React.Component {

  shouldComponentUpdate({ value }) {
    return value.trim() !== this.props.value.trim()
  }

  render() {

    try {
      const data = this.props.value.trim(),
        json = JSON.parse(data)
      return <ReactJson src={json} theme="monokai" />
    }
    catch (error) {
      return (
        <textarea
          tabIndex={1}
          className="textOutput"
          disabled
          value={this.props.value}
        />
      )
    }
  }
}

export default TextOutput