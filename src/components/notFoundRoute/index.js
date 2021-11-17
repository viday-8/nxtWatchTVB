import {Component} from 'react'

import Header from '../header'
import SideBar from '../sideBar'
import ThemeContext from '../../context/ThemeContext'

import {HomeMain, SAnsCon} from '../Home/styledComponents'
import {NotFountCon} from './styledComponents'

class NotFound extends Component {
  savedVideoRender = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <HomeMain data-testid="home" dark={isDark}>
            <Header />
            <SAnsCon>
              <SideBar />
              <NotFountCon dark={isDark}>
                <img
                  width={300}
                  alt="not found"
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                />
                <h1>Page Not Found</h1>
                <p>we are sorry, the page you requested could not be found.</p>
              </NotFountCon>
            </SAnsCon>
          </HomeMain>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return <div>{this.savedVideoRender()}</div>
  }
}

export default NotFound
