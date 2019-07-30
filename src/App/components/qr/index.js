import React from 'react'
import { QRCode } from 'react-qr-svg'
import './qr.css'

class QR extends React.Component {

  render() {
    return (
      <div className="qr">
        <QRCode
          className="qr__element"
          level="Q"
          cellClassPrefix="qr"
          value={JSON.stringify(this.props.value)}
        />
      </div>
    )
  }
}

export default QR
