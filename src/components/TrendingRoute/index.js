import {Component} from 'react'
import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../header'
import SideBar from '../sideBar'
import ThemeContext from '../../context/ThemeContext'

import {HomeMain, SAnsCon} from '../Home/styledComponents'
import {
  FailureMain,
  Loading,
  TopCon,
  ChannelCon,
  VideoList,
  TrendingMain,
  IconCon,
} from './styledComponents'

const ApiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: ApiStatusList.initial,
    trendingList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: ApiStatusList.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    // console.log(data.videos)
    if (response.ok) {
      const formattedData = data.videos.map(each => ({
        name: each.channel.name,
        profile: each.channel.profile_image_url,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        views: each.view_count,
      }))
      this.setState({
        apiStatus: ApiStatusList.success,
        trendingList: formattedData,
      })
    } else {
      this.setState({apiStatus: ApiStatusList.failure})
    }
  }

  renderSuccessList = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {trendingList} = this.state
        const distanceTime = at => {
          const dateAgo = formatDistanceToNow(new Date(at))
          return <p>{dateAgo}</p>
        }
        return (
          <TrendingMain data-testid="trending" dark={isDark}>
            <TopCon dark={isDark}>
              <IconCon dark={isDark}>
                <HiFire color="#ff0b37" fontSize={40} />
              </IconCon>
              <h1>Trending</h1>
            </TopCon>
            <ul style={{listStyleType: 'none'}}>
              {trendingList.map(each => (
                <li key={each.id}>
                  <Link
                    style={{textDecoration: 'none'}}
                    to={`/videos/${each.id}`}
                  >
                    <VideoList dark={isDark}>
                      <img
                        width={250}
                        alt="video thumbnail"
                        src={each.thumbnailUrl}
                      />
                      <ChannelCon>
                        <p>{each.title}</p>
                        <p>{each.name}</p>
                        <div style={{display: 'flex'}}>
                          <p>{each.views}</p>
                          <p>views . </p>
                          {distanceTime(each.publishedAt)}
                        </div>
                      </ChannelCon>
                    </VideoList>
                  </Link>
                </li>
              ))}
            </ul>
          </TrendingMain>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderProgress = () => (
    <Loading className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#475569" height="50" width="50" />
    </Loading>
  )

  retryTrendingVideos = () => {
    this.getTrendingVideos()
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
              <button onClick={this.retryTrendingVideos} type="button">
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

  savedVideoRender = () => (
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
    return <div>{this.savedVideoRender()}</div>
  }
}

export default Trending
