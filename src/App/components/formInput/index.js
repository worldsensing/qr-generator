import React from 'react'
import Form from 'react-jsonschema-form'
import './formInput.css'

class FormInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  shouldComponentUpdate({ value }) {
    return value !== this.props.value
  }

  handleFormLog = type => console.log(type)

  handleFormChange = data => {
    this.props.onFormChange(data.formData)
  }

  render() {
    try {
      const data = this.props.value.trim(),
        json = JSON.parse(data),
        schema = 'schema' in json ? json.schema : {},
        uiSchema = 'uiSchema' in json ? json.uiSchema : {}

      return (
        <Form
          schema={schema}
          uiSchema={uiSchema}
          onChange={this.handleFormChange}
          onSubmit={() => this.handleFormLog("submitted")}
          onError={() => this.handleFormLog("errors")}
        >
          <button style={{ display: 'none' }}></button>
        </Form>
      )
    } catch (error) {
      return `${error}`
    }
  }
}

export default FormInput