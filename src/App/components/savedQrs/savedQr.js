import React from 'react'
import QR from '../qr'
import './savedQr.css'


class SavedQr extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleClick() {
    this.props.onClick(this.props.data)
  }

  handleRemove() {
    this.props.onRemove(this.props.data)
  }

  render() {
    const { id, name, date, text, timestamp } = this.props.data
    return (
      <div id={id} data-timestamp={timestamp} className="savedQr">
        <div className="savedQr__qr" onClick={this.handleClick}>
          <QR value={text} />
        </div>
        <div className="savedQr__data" onClick={this.handleClick}>
          <div className="savedQr__name">{name}</div>
          <div className="savedQr__date">{new Date(date).toLocaleString('en-GB', { timeZone: 'UTC' })}</div>
        </div>
        <div className="savedQr__remove" onClick={this.handleRemove}>
          x
        </div>
      </div>
    )
  }
}

export default SavedQr