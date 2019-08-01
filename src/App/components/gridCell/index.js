import React from 'react'
import GridHeader from '../gridHeader'
import './gridCell.css'


class Grid extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick = option => {
    this.props.onOptionChange(option)
  }

  render() {
    return (
      <div className={this.props.className}>
        <GridHeader title={this.props.title} options={this.props.options} onOptionClick={this.handleClick} />
        {this.props.children}
      </div>
    )
  }
}

export default Grid