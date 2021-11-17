import {Component} from 'react'
import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../header'
import SideBar from '../sideBar'
import ThemeContext from '../../context/ThemeContext'

import {HomeMain, SAnsCon} from '../Home/styledComponents'
import {
  FailureMain,
  Loading,
  GamingMain,
  VideoList,
  VideoCon,
  TopCon,
  IconCon,
} from './styledComponents'

const ApiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: ApiStatusList.initial,
    gamingList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: ApiStatusList.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const formattedData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        views: each.view_count,
      }))
      this.setState({
        apiStatus: ApiStatusList.success,
        gamingList: formattedData,
      })
    } else {
      this.setState({apiStatus: ApiStatusList.failure})
    }
  }

  renderSuccessList = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {gamingList} = this.state

        return (
          <GamingMain data-testid="gaming" dark={isDark}>
            <TopCon dark={isDark}>
              <IconCon dark={isDark}>
                <SiYoutubegaming color="#ff0b37" fontSize={40} />
              </IconCon>
              <h1>Gaming</h1>
            </TopCon>
            <VideoList style={{listStyleType: 'none'}}>
              {gamingList.map(each => (
                <li key={each.id}>
                  <Link
                    style={{textDecoration: 'none'}}
                    to={`/videos/${each.id}`}
                  >
                    <VideoCon dark={isDark}>
                      <img
                        width={200}
                        alt="video thumbnail"
                        src={each.thumbnailUrl}
                      />
                      <p>{each.title}</p>
                      <p>{each.views} watching worldwide</p>
                    </VideoCon>
                  </Link>
                </li>
              ))}
            </VideoList>
          </GamingMain>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderProgress = () => (
    <Loading className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#475569" height="50" width="50" />
    </Loading>
  )

  retryGamingVideos = () => {
    this.getGamingVideos()
  }

  renderFailureList = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailureMain dark={isDark}>
            <div>
              <img
                width={400}
                alt="failure view"
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
              />
              <h1>Oops! Something Went Wrong</h1>
              <p>We are having some trouble to complete your request. </p>
              <p>Please try again</p>
              <button onClick={this.retryGamingVideos} type="button">
                Retry
              </button>
            </div>
          </FailureMain>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoList = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case ApiStatusList.success:
        return this.renderSuccessList()
      case ApiStatusList.inProgress:
        return this.renderProgress()
      case ApiStatusList.failure:
        return this.renderFailureList()
      default:
        return null
    }
  }

  gamingVideoRender = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <HomeMain data-testid="home" dark={isDark}>
            <Header />
            <SAnsCon>
              <div style={{width: '20%', height: '100%'}}>
                <SideBar />
              </div>
              {this.renderVideoList()}
            </SAnsCon>
          </HomeMain>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return <div data-testid="gaming">{this.gamingVideoRender()}</div>
  }
}

export default Gaming
