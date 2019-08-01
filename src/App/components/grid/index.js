import React from 'react'
import Store, { INPUT_OPTION } from 'App/store'
import GridCell from '../gridCell'
import QR from '../qr'
import TextInput from '../textInput'
import TextOutput from '../textOutput'
import Save from '../save'

class Grid extends React.Component {
  constructor(props) {
    super(props)

    const
      defaultInputOptions = [
        { title: 'text', selected: true },
        { title: 'form', selected: false }
      ],
      inputOptions = Store.get(INPUT_OPTION) || defaultInputOptions

    this.state = {
      text: '',
      inputOptions
    }

    this.handleText = this.handleText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleText = text => {
    this.setState({ text })
  }

  handleSubmit = name => {
    const date = new Date().toISOString(),
      timestamp = Date.parse(date),
      { text } = this.state,
      qr = {
        id: `${timestamp}--${name}`,
        name,
        date,
        timestamp,
        text
      }

    this.props.onSavedQR(qr)
  }

  handleOptionChange = option => {

    const inputOptions = this.state.inputOptions.map(inputOption => ({ ...inputOption, selected: inputOption.title === option }))

    Store.set(INPUT_OPTION, inputOptions)

    this.setState(prevState => ({ inputOptions }))
  }

  render() {
    return (
      <main className="app__main">
        <GridCell className="app__textInput" title="Input" options={this.state.inputOptions} onOptionChange={this.handleOptionChange}>
          <TextInput value={this.state.text} onChange={this.handleText} placeholder="Write something" />
        </GridCell>
        <GridCell className="app__textOutput" title="Output" >
          <TextOutput value={this.state.text} placeholder="..." />
        </GridCell>
        <GridCell className="app__qr" title="QR" >
          <div className="app__qrWrapper">
            <QR value={this.state.text}></QR>
          </div>
        </GridCell>
        <GridCell className="app__save" title="Save" >
          <Save onSubmit={this.handleSubmit} />
        </GridCell>
      </main>
    )
  }
}

export default Grid