import React from 'react'
import Container from '@material-ui/core/Container'
import QR from './components/qr'
import ContentEditable from './components/contentEditable'
// import InputText from './components/inputText'
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
          <ContentEditable value={this.state.text} onChange={this.handleText} placeholder="Write something" />


          <QR value={this.state.text}></QR>

        </Container>
      </>
    )
  }
}

export default App;
