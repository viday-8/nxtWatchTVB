import {Component} from 'react'

import {AiOutlineClose} from 'react-icons/ai'

import {Banner, CloseBtn} from './styledComponents'

class BannerComp extends Component {
  close = () => {
    const {closeBanner} = this.props
    closeBanner()
  }

  render() {
    return (
      <Banner data-testid="banner">
        <div>
          <img
            width={150}
            alt="nxt watch logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          />
          <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
          <button type="button">GET IT NOW</button>
        </div>
        <CloseBtn data-testid="close" onClick={this.close} type="button">
          <AiOutlineClose fontSize="20px" />
        </CloseBtn>
      </Banner>
    )
  }
}
export default BannerComp
