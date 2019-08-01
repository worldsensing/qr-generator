import React from 'react'
import './gridHeader.css'


class GridHeader extends React.Component {


  handleClick = (event, option) => {
    this.props.onOptionClick(option)
  }

  shouldDisplayOptions = () => {
    if (!this.props.options) return false

    const optionsVisible = Object.values(this.props.options).filter(option => option.visible)

    return optionsVisible.length > 1
  }

  render() {
    this.shouldDisplayOptions()

    return (
      <div className="gridHeader">
        <div className="gridHeader__title">
          {this.props.title}
        </div>
        {this.shouldDisplayOptions() && (
          <div className="gridHeader__toogleOptions">
            <div className="gridHeader__toogler">
              <svg className="gridHeader__tooglerArrow" viewBox="0 0 10 6.5">
                <path d="M0,0 h10 l-5,6.5" />
              </svg>
            </div>
            <div className="gridHeader__options">
              {Object.entries(this.props.options).map(([key, option]) => (
                <div
                  key={key}
                  className={['gridHeader__option', option.selected ? 'gridHeader__option--selected' : ''].join(' ')}
                  onClick={option.selected ? () => { } : () => this.handleClick(this, key)}
                >
                  {key}
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