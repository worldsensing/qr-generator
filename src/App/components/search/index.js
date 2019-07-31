import React from 'react'
import InputText from '../inputText'
import './search.css'


class Search extends React.Component {
  constructor(props) {
    super(props)

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(text) {
    this.props.onSearch(text)
  }

  shouldComponentUpdate({ value }) {
    return value !== this.props.value
  }

  render() {
    return (
      <div className="search">
        <InputText placeholder="Filter QRs" onInput={this.handleInput} value={this.props.value}></InputText>
      </div>
    )
  }
}

export default Search