import React from 'react'
import SavedQrs from './components/savedQrs'
import Header from './components/header'
import Search from './components/search'
import Grid from './components/grid'
import './App.css'
import Store, { QRS, THEME } from 'App/store'
import Theme from 'App/theme'


class App extends React.Component {
  constructor(props) {
    super(props)

    const qrs = Store.get(QRS) || []

    this.state = {
      qrs,
      search: ''
    }


    this.handleSavedQR = this.handleSavedQR.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleLoadQR = this.handleLoadQR.bind(this)
    this.handleRemoveQR = this.handleRemoveQR.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleGridChange = this.handleGridChange.bind(this)
  }

  handleSearch = text => {

    this.setState(prevState => ({ search: text, qrs: prevState.qrs.map(qr => ({ ...qr, visible: qr.name.includes(text) })) }))
  }

  handleLoadQR = qr => {
    const { text } = qr

    this.setState({ text })
  }

  handleRemoveQR = removedQr => {
    const qrs = this.state.qrs.filter(qr => removedQr.id !== qr.id)

    this.setState({ qrs }, qrs.length ? Store.set(QRS, qrs) : Store.remove(QRS))
  }

  handleColorChange = color => {
    const lightness = color ? 'dark' : 'light'

    Store.set(THEME, lightness)

    this.setTheme()
  }

  handleGridChange = hasChanged => {
    if (hasChanged) this.setState({ text: undefined })
  }

  setTheme = () => {
    const lightness = Store.get(THEME) || 'dark',
      theme = Theme[lightness]

    Object.entries(theme).forEach(([key, color]) => document.documentElement.style.setProperty(`--${key}`, color))
  }

  handleSavedQR = qr => {

    this.setState(prevState => {
      const qrs = [...(prevState.qrs ? prevState.qrs : ''), qr]

      Store.set(QRS, qrs)

      return { qrs }
    })
  }

  render() {
    this.setTheme()

    return (
      <div className="app">
        <header className="app__header">
          <Header onColorChange={this.handleColorChange} />
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
          <Grid onSavedQR={this.handleSavedQR} text={this.state.text} onChange={this.handleGridChange} />
        </div>
      </div>
    )
  }
}

export default App
