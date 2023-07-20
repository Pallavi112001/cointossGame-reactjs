// Write your code here
import {Component} from 'react'

import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImg: headsImg, headsCount: 0, tailsCount: 0}

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImg = ''
    let newHeadsCount = headsCount
    let newTailsCount = tailsCount

    if (tossResult === 0) {
      tossImg = headsImg
      newHeadsCount += 1
    } else {
      tossImg = tailsImg
      newTailsCount += 1
    }
    this.setState({
      tossResultImg: tossImg,
      headsCount: newHeadsCount,
      tailsCount: newTailsCount,
    })
  }

  render() {
    const {tossResultImg, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          <img src={tossResultImg} alt="toss result" className="result-img" />
          <button type="button" onClick={this.onClickTossCoin} className="btn">
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
