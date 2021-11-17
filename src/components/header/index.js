import {Component} from 'react'

import Popup from 'reactjs-popup'

import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'

import {
  ConformBtn,
  Back,
  LogOut,
  LogPop,
  HeaderCon,
  ThemeBtn,
  HeaderMain,
} from './styledComponents'

class Header extends Component {
  onOut = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  renderHeader = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, toggleTheme} = value

        const onToggle = () => {
          toggleTheme()
        }

        return (
          <HeaderCon dark={isDark}>
            <Link to="/">
              <img
                width={100}
                alt="website logo"
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
              />
            </Link>
            <HeaderMain>
              <ThemeBtn data-testid="theme" onClick={onToggle} type="button">
                {isDark ? (
                  <FiSun color="white" fontSize="20px" />
                ) : (
                  <BsMoon fontSize="20px" />
                )}
              </ThemeBtn>
              <img
                width={30}
                alt="profile"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
              />

              <div>
                <Popup
                  modal
                  trigger={
                    <LogOut dark={isDark} type="button">
                      logout
                    </LogOut>
                  }
                >
                  {close => (
                    <Back>
                      <LogPop dark={isDark}>
                        <div>
                          <p>Are you sure, you want to logout</p>
                        </div>
                        <div>
                          <LogOut
                            dark={isDark}
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </LogOut>
                          <ConformBtn
                            onClick={this.onOut}
                            type="button"
                            className="trigger-button"
                          >
                            Confirm
                          </ConformBtn>
                        </div>
                      </LogPop>
                    </Back>
                  )}
                </Popup>
              </div>
            </HeaderMain>
          </HeaderCon>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return <div>{this.renderHeader()}</div>
  }
}

export default withRouter(Header)
