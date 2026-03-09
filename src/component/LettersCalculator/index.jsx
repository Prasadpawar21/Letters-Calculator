// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  setCount = () => {
    this.setState({inputText: ''})
  }

  changingValue = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state
    const lengthOfText = inputText.length
    return (
      <div className="contianer">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter </h1>
          <label className="label" htmlFor="inputBox">
            Enter the phrase
          </label>
          <input
            id="inputBox"
            type="text"
            onChange={this.changingValue}
            value={inputText}
            className="input-box"
            placeholder="Enter the phrase"
          />
          <p onClick={this.setCount} className="button">
            No.of letters: {lengthOfText}
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img-container"
        />
      </div>
    )
  }
}

export default LettersCalculator
