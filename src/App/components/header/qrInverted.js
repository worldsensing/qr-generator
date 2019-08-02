import React from 'react'
import Store, { THEME } from '../../store'

class QRInverted extends React.Component {
  constructor(props) {
    super(props)

    const isNotDarkTheme = Store.get(THEME) !== 'dark'

    this.state = {
      color: isNotDarkTheme
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = event => {
    this.setState(prevState => ({ color: !prevState.color }), this.props.onChange(this.state.color))
  }

  render() {
    const defaultPath = 'M0,0 h10 v10 h-10z M4,4 v2 h2 v-2z',
      invertedPath = "M0,0 h10 v10 h-10z M2,2 v6 h6 v-6z"

    return (
      <svg className={this.props.className} onClick={this.handleClick} x="0" y="0" width="20" height="20" viewBox="0 0 10 10">
        <path d={this.state.color ? defaultPath : invertedPath} />
      </svg>
    )
  }
}

export default QRInverted