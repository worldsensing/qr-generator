import React from 'react'
import TextField from '@material-ui/core/TextField'

class InputText extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value,
      helperText: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {
    this.setState({ value: event.target.value }, this.props.text(event.target.value));
  }

  render() {

    return (
      <TextField
        id="outlined-multiline-flexible"
        label="Write something"
        multiline
        rowsMax="4"
        value={this.state.value}
        onChange={this.handleChange}
        margin="normal"
        helperText={this.state.helperText}
        variant="outlined"
      />)
  }
}

export default InputText