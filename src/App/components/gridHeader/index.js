import React from 'react'
import './gridHeader.css'

class GridHeader extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default GridHeader