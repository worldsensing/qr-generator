import React from 'react'
import './header.css'


class Header extends React.Component {
  constructor(props) {
    super(props)

    this.header = {}
  }

  render() {
    return (
      <div className="header">
        <div className="header__logo">QR Converter</div>
      </div>
    )
  }
}

export default Header