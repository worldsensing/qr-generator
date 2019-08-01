import React from 'react'
import './gridHeader.css'


class GridHeader extends React.Component {


  handleClick = (event, option) => {
    this.props.onOptionClick(option)
  }

  render() {
    return (
      <div className="gridHeader">
        <div className="gridHeader__title">
          {this.props.title}
        </div>
        {this.props.options && (
          <div className="gridHeader__toogleOptions">
            <div className="gridHeader__toogler">
              S
                </div>
            <div className="gridHeader__options">
              {this.props.options.map(option => (
                <div
                  key={option.title}
                  className={['gridHeader__option', option.selected ? 'gridHeader__option--selected' : ''].join(' ')}
                  onClick={option.selected ? () => { } : () => this.handleClick(this, option.title)}
                >
                  {option.title}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default GridHeader