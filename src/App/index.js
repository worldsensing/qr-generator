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
import GridHeader from './components/gridHeader'

class App extends React.Component {
  constructor(props) {
    super(props)

    const qrs = Store.get(QRS) || []

    this.state = {
      text: '',
      qrs
    }

    this.qrs = qrs

    this.handleText = this.handleText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleLoadQR = this.handleLoadQR.bind(this)
    this.handleRemoveQR = this.handleRemoveQR.bind(this)
  }

  handleText = text => {
    this.setState({ text })
  }

  handleSubmit = name => {
    const date = new Date().toISOString(),
      timestamp = Date.parse(date),
      { text, qrs: storedQrs } = this.state,
      qr = {
        id: `${timestamp}--${name}`,
        name,
        date,
        timestamp,
        text
      },
      qrs = [...(storedQrs ? storedQrs : ''), qr]

    this.setState({ qrs }, Store.set(QRS, qrs))
  }

  handleSearch = text => {
    this.setState({ search: text, qrs: this.qrs.filter(qr => qr.name.includes(text)) })
  }

  handleLoadQR = qr => {
    const { text } = qr
    this.setState({ text })
  }

  handleRemoveQR = removedQr => {
    const qrs = this.state.qrs.filter(qr => removedQr.id !== qr.id)

    this.setState({ qrs }, qrs.length ? Store.set(QRS, qrs) : Store.remove(QRS))
  }

  render() {

    return (
      <div className="app">
        <header className="app__header">
          <Header />
        </header>
        <div className="app__body">
          <aside className={['app__aside', this.state.qrs.length ? 'app__aside--hasQrs' : 'app__aside--empty'].join(' ')}>
            {this.state.qrs.length ?
              <>
                <Search onSearch={this.handleSearch} value={this.state.search} />
                <div className="scrollableY">
                  <SavedQrs qrs={this.state.qrs} onSelect={this.handleLoadQR} onRemove={this.handleRemoveQR} />
                </div>
              </>
              : null
            }
          </aside>
          <main className="app__main">
            <div className="app__textInput">
              <GridHeader text="Input data" />
              <TextInput value={this.state.text} onChange={this.handleText} placeholder="Write something" />
            </div>
            <div className="app__textOutput">
              <GridHeader text="Formatted data" />
              <TextOutput value={this.state.text} placeholder="..." />
            </div>
            <div className="app__qr">
              <GridHeader text="Result QR" />
              <QR value={this.state.text}></QR>
            </div>
            <div className="app__save">
              <GridHeader text="Options" />
              <Save onSubmit={this.handleSubmit} />
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default App
