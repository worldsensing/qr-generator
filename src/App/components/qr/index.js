import React from 'react'
import { QRCode } from 'react-qr-svg'
import './qr.css'

class QR extends React.Component {

  render() {
    const json = JSON.stringify(this.props.value),
      value = json.replace(/(\s|\\n|\\)/g, "").slice(1, -1)

    return (
      <div className="qr">
        <div className="qr__wrapper">
          <div className="qr__wrapperInner">
            <QRCode
              className="qr__element"
              level="Q"
              cellClassPrefix="qr"
              value={value}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default QR
