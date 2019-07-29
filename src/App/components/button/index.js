import React from 'react'
import './button.css'

class Button extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = event => this.props.onClick(event.target.value)

  render() {
    return <button className="button" onClick={this.handleClick}>{this.props.text}</button>
  }
}

export default Button