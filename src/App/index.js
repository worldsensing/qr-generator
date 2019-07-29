import React from 'react'
import Container from '@material-ui/core/Container'
import QR from './components/qr'
import TextInput from './components/textInput'
import Button from './components/button'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.text = ''

    this.handleText = this.handleText.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleText = text => {
    this.text = text
    // this.setState({ text })
  }

  handleClick = text => {
    this.setState({ text: this.text })
  }

  render() {

    return (
      <>
        <Container fixed>
          <TextInput value={this.state.text} onChange={this.handleText} placeholder="Write something" />
          <Button text="Convert" onClick={this.handleClick} />
          <QR value={this.state.text}></QR>

        </Container>
      </>
    )
  }
}

export default App;
