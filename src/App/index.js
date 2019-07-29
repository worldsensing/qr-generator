import React from 'react'
import Container from '@material-ui/core/Container'
import QR from './components/qr'
import InputText from './components/inputText'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleText = this.handleText.bind(this)
  }

  handleText = text => {
    this.setState({ text })
  }

  render() {

    return (
      <>
        <Container fixed>
          <InputText text={this.handleText} value={this.state.text}></InputText>


          <QR value={this.state.text}></QR>

        </Container>
      </>
    )
  }
}

export default App;
