import React from 'react'
import QR from './components/qr'
import TextInput from './components/textInput'
import TextOutput from './components/textOutput'
import Save from './components/save'
import SavedQrs from './components/savedQrs'
import Header from './components/header'
import Search from './components/search'
import './App.css'
import Store, { QRS } from 'App/store'

class App extends React.Component {
  constructor(props) {
    super(props)

    const qrs = Store.get(QRS)

    this.state = {
      text: '',
      qrs
    }

    this.qrs = qrs

    this.handleText = this.handleText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleText = text => {
    this.setState({ text })
  }

  handleSubmit = name => {
    const date = Date.now(),
      { text, qrs: storedQrs } = this.state,
      qr = {
        id: `${date}--${name}`,
        name,
        date,
        text
      },
      qrs = [...(storedQrs ? storedQrs : ''), qr]

    this.setState({ qrs }, Store.set(QRS, qrs))
  }

  handleSearch = text => {
    this.setState({ search: text, qrs: this.qrs.filter(qr => qr.name.includes(text)) })
  }

  render() {

    return (
      <div className="app">
        <header className="app__header">
          <Header />
        </header>
        <div className="app__body">
          <aside className="app__aside">
            <Search onSearch={this.handleSearch} value={this.state.search} />
            <SavedQrs qrs={this.state.qrs} />
          </aside>
          <main className="app__main">
            <TextInput value={this.state.text} onChange={this.handleText} placeholder="Write something" />
            <TextOutput value={this.state.text} placeholder="..." />
            <QR value={this.state.text}></QR>
            <Save onSubmit={this.handleSubmit} />
          </main>
        </div>
      </div>
    )
  }
}

export default App
