import React from 'react'
import { QRCode } from 'react-qr-svg'

class QR extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor: '#fff',
      fgColor: '#000'
    }
  }
  render() {
    return (
      <QRCode
        level="Q"
        bgColor={this.state.bgColor}
        fgColor={this.state.fgColor}
        style={{ width: 256 }}
        value={JSON.stringify(this.props.value)}
      />
    )
  }
}

export default QR
