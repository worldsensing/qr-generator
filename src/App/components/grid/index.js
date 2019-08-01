import React from 'react'
import FormInput from '../formInput'
import Store, { INPUT_OPTION, TEXT } from 'App/store'
import GridCell from '../gridCell'
import QR from '../qr'
import TextInput from '../textInput'
import TextOutput from '../textOutput'
import Save from '../save'


class Grid extends React.Component {
  constructor(props) {
    super(props)

    const
      defaultInputOptions = {
        'text': { selected: true, visible: true },
        'form': { selected: false, visible: false }
      },
      inputOptions = Store.get(INPUT_OPTION) || defaultInputOptions

    this.state = {
      text: Store.get(TEXT) || '',
      inputOptions,
      form: ''
    }

    this.handleText = this.handleText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleFormInputChange = this.handleFormInputChange.bind(this)
  }

  handleText = text => {
    const inputOptions = Object.entries(this.state.inputOptions).reduce((prev, [key, option]) => ({ ...prev, [key]: { ...option, visible: this.isFormAble(text) } }), {})

    const form = this.state.form ? JSON.stringify(this.state.form) : text

    this.setState({ text, inputOptions, form })
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

    const inputOptions = Object.entries(this.state.inputOptions).reduce((prev, [key, inputOption]) => ({ ...prev, [key]: { ...inputOption, selected: key === option } }), {})

    Store.set(INPUT_OPTION, inputOptions)
    Store.set(TEXT, this.state.text)


    this.setState({ inputOptions })
  }

  handleFormInputChange = data => {
    const form = JSON.stringify(data) || this.state.text

    this.setState({ form })
  }


  isInputOption = optionTitle => {
    if (!this.state.inputOptions) return
    return optionTitle in this.state.inputOptions ? this.state.inputOptions[optionTitle].selected : undefined
  }

  isFormAble = text => {
    try {
      const data = text.trim(),
        json = JSON.parse(data),
        hasSchema = 'schema' in json

      return hasSchema

    } catch (error) {
      return false
    }
  }

  render() {

    return (
      <main className="app__main">
        <GridCell className="app__textInput" title="Input" options={this.state.inputOptions} onOptionChange={this.handleOptionChange}>
          {this.isInputOption('text') && <TextInput value={this.state.text} onChange={this.handleText} placeholder="Write something" />}
          {this.isInputOption('form') && <FormInput value={this.state.text} onFormChange={this.handleFormInputChange} />}
        </GridCell>
        <GridCell className="app__textOutput" title="Output" >
          <TextOutput value={this.isInputOption('form') ? this.state.form || this.state.text : this.state.text} placeholder="..." />
        </GridCell>
        <GridCell className="app__qr" title="QR" >
          <div className="app__qrWrapper">
            <QR value={this.isInputOption('form') ? this.state.form || this.state.text : this.state.text}></QR>
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