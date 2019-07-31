import React from 'react'
import { QRCode } from 'react-qr-svg'
import './qr.css'

class QR extends React.Component {

  render() {
    return (
      <div className="qr">
        <div className="qr__wrapper">
          <div className="qr__wrapperInner">
            <QRCode
              className="qr__element"
              level="Q"
              cellClassPrefix="qr"
              value={JSON.stringify(this.props.value)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default QR
