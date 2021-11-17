import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire, HiSaveAs} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../context/ThemeContext'
import {LinkCon, Sm, SideMain, Contact, Info} from './styledComponents'

class SideBar extends Component {
  renderHeader = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, activeSide, ChangeActiveSide} = value

        const onHome = () => {
          ChangeActiveSide('Home')
        }

        const onTrending = () => {
          ChangeActiveSide('Trending')
        }

        const onGaming = () => {
          ChangeActiveSide('Gaming')
        }

        const onSaveVideos = () => {
          ChangeActiveSide('Saved')
        }
        return (
          <SideMain dark={isDark}>
            <ul style={{listStyleType: 'none', padding: '0'}}>
              <li>
                <Link style={{textDecoration: 'none'}} to="/">
                  <LinkCon
                    onClick={onHome}
                    dark={isDark}
                    active={activeSide === 'Home' ? 'black' : '#909090'}
                    activeLight={activeSide === 'Home' ? '#ebebeb' : 'white'}
                    activeDark={activeSide === 'Home' ? '#616e7c' : '#22241E'}
                  >
                    <AiFillHome
                      style={{marginRight: '20px'}}
                      color={activeSide === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    Home
                  </LinkCon>
                </Link>
              </li>
              <li>
                <Link style={{textDecoration: 'none'}} to="/trending">
                  <LinkCon
                    onClick={onTrending}
                    activeLight={
                      activeSide === 'Trending' ? '#ebebeb' : 'white'
                    }
                    activeDark={
                      activeSide === 'Trending' ? '#616e7c' : '#22241E'
                    }
                    dark={isDark}
                    active={activeSide === 'Trending' ? 'black' : '#909090'}
                  >
                    <HiFire
                      style={{marginRight: '20px'}}
                      color={activeSide === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    Trending
                  </LinkCon>
                </Link>
              </li>
              <li>
                <Link style={{textDecoration: 'none'}} to="/gaming">
                  <LinkCon
                    onClick={onGaming}
                    activeLight={activeSide === 'Gaming' ? '#ebebeb' : 'white'}
                    activeDark={activeSide === 'Gaming' ? '#616e7c' : '#22241E'}
                    dark={isDark}
                    active={activeSide === 'Gaming' ? 'black' : '#909090'}
                  >
                    <SiYoutubegaming
                      style={{marginRight: '20px'}}
                      color={activeSide === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    Gaming
                  </LinkCon>
                </Link>
              </li>
              <li>
                <Link style={{textDecoration: 'none'}} to="/saved-videos">
                  <LinkCon
                    onClick={onSaveVideos}
                    activeLight={activeSide === 'Saved' ? '#ebebeb' : 'white'}
                    activeDark={activeSide === 'Saved' ? '#616e7c' : '#22241E'}
                    dark={isDark}
                    active={activeSide === 'Saved' ? 'black' : '#909090'}
                  >
                    <HiSaveAs
                      style={{marginRight: '20px'}}
                      color={activeSide === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    Saved videos
                  </LinkCon>
                </Link>
              </li>
            </ul>
            <Info dark={isDark}>
              <Contact>CONTACT US</Contact>
              <Sm>
                <img
                  width={30}
                  alt="facebook logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                />
                <img
                  width={30}
                  alt="twitter logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                />
                <img
                  width={30}
                  alt="linked in logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                />
              </Sm>
              <p>Enjoy! Now to see your channels and recommendations!</p>
            </Info>
          </SideMain>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return <div style={{height: '100%'}}>{this.renderHeader()}</div>
  }
}

export default SideBar
