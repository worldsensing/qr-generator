import React from 'react'
import './header.css'
import Logo from './logo'
import QRInverted from './qrInverted'


class Header extends React.Component {
  constructor(props) {
    super(props)

    this.header = {}

    this.handleColorChange = this.handleColorChange.bind(this)
  }

  handleColorChange(color) {
    this.props.onColorChange(color)
  }

  render() {
    return (
      <div className="header">
        <div className="header__logotype">
          <Logo className="header__logo" />
          <div className="header__type">
            <span className="header__type-qr">QR</span>
            <span className="header__type-converter">Converter</span>
          </div>
        </div>
        <div className="header__colorChange">
          <QRInverted className="header__qrInverted" onChange={this.handleColorChange} />
        </div>
      </div>
    )
  }
}

export default Header