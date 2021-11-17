import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginMain,
  LoginBtn,
  Input,
  InputCon,
  Logo,
  LoginForm,
  Save,
  Error,
} from './styledComponents'

class Login extends Component {
  state = {
    showPassword: false,
    showError: false,
    errorMsg: '',
    username: '',
    password: '',
  }

  toggleShow = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onEnterUsername = event => {
    this.setState({username: event.target.value})
  }

  onEnterPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = msg => {
    this.setState({
      showError: true,
      errorMsg: msg,
    })
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderLogin = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {
          showPassword,
          showError,
          errorMsg,
          username,
          password,
        } = this.state

        return (
          <LoginMain mBack={isDark}>
            <LoginForm onSubmit={this.onLogin} mBack={isDark}>
              <Logo
                width={200}
                alt="website logo"
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
              />
              <InputCon mBack={isDark}>
                <label htmlFor="username">USERNAME</label>
                <Input
                  mBack={isDark}
                  onChange={this.onEnterUsername}
                  id="username"
                  type="text"
                  value={username}
                  placeholder="Username"
                />
              </InputCon>
              <InputCon mBack={isDark}>
                <label htmlFor="password">PASSWORD</label>
                <Input
                  mBack={isDark}
                  onChange={this.onEnterPassword}
                  value={password}
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
              </InputCon>
              <Save mBack={isDark}>
                <input onChange={this.toggleShow} type="checkbox" id="save" />
                <label htmlFor="save">Show Password</label>
              </Save>
              {showError ? <Error>{errorMsg}</Error> : null}
              <LoginBtn type="submit">Login</LoginBtn>
            </LoginForm>
          </LoginMain>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return <div>{this.renderLogin()}</div>
  }
}

export default Login
