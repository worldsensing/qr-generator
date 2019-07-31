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
        <Container fixed>
          <div className="header__logo">QR Converter</div>
          <div className="header__gear">A</div>
        </Container>
      </div>
    )
  }
}

export default Header