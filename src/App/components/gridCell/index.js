import React from 'react'
import GridHeader from '../gridHeader'
import './gridCell.css'


class GridCell extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick = option => {
    this.props.onOptionChange(option)
  }

  render() {
    return (
      <div className={['gridCell', this.props.className].join(' ')}>
        <GridHeader className="gridCell__header" title={this.props.title} options={this.props.options} onOptionClick={this.handleClick} />
        <div className="gridCell__body">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default GridCell