import React from 'react'
import Container from '@material-ui/core/Container'
import './header.css'


class Header extends React.Component {
  constructor(props) {
    super(props)

    this.header = {}
  }

  render() {
    return (
      <div className="header">
        <div className="header__gear">QR Converter</div>
        <div className="header__logo"></div>
      </div>
    )
  }
}

export default Header