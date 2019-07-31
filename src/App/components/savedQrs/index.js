import React from 'react'
import SavedQR from './savedQr'
import './savedQrs.css'

class SavedQrs extends React.Component {
  constructor(props) {
    super(props)

    this.handleSelect = this.handleSelect.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  shouldComponentUpdate(qrs) {
    return qrs !== this.props.qrs
  }

  handleSelect(qr) {
    this.props.onSelect(qr)
  }

  handleRemove(qr) {
    this.props.onRemove(qr)
  }

  render() {
    const sortedQrs = this.props.qrs.sort((a, b) => a.timestamp < b.timestamp ? 1 : -1)

    return (
      <div className={['savedQrs', this.props.qrs.length === 1 ? 'savedQrs--oneLeft' : ''].join(' ')}>
        {sortedQrs.map(qr => <SavedQR key={qr.id} data={qr} onClick={this.handleSelect} onRemove={this.handleRemove} />)}
      </div>
    )
  }
}

export default SavedQrs