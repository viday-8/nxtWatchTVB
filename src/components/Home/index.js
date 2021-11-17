import {Component} from 'react'
import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../header'
import SideBar from '../sideBar'
import BannerComp from '../Banner'
import ThemeContext from '../../context/ThemeContext'

import {
  FailureMain,
  VandT,
  Loading,
  Lines,
  VideoListCon,
  Title,
  Logo,
  VideoItem,
  VideoCon,
  Search,
  ChannelCon,
  HomeCon,
  HomeMain,
  SAnsCon,
  SearchBtn,
  SearchInput,
  SideHCon,
} from './styledComponents'

const ApiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: ApiStatusList.initial,
    showBanner: true,
    videosList: [],
    searchValue: '',
    search: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onSearchRetry = () => {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: ApiStatusList.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {search} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const formattedData = data.videos.map(each => ({
        name: each.channel.name,
        profileImageIrl: each.channel.profile_image_url,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        id: each.id,
      }))
      this.setState({
        apiStatus: ApiStatusList.success,
        videosList: formattedData,
      })
    } else {
      this.setState({apiStatus: ApiStatusList.failure})
    }
  }

  renderSuccessList = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {videosList} = this.state
        const distanceTime = at => {
          const dateAgo = formatDistanceToNow(new Date(at))
          return <Lines dark={isDark}>{dateAgo}</Lines>
        }
        if (videosList.length === 0) {
          return (
            <div>
              <div>
                <img
                  width={300}
                  alt="no videos"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
                />
                <h1>No Search results found</h1>
                <p>Try different key words or remove search filter</p>
                <button type="button" onClick={this.onSearchRetry}>
                  Retry
                </button>
              </div>
            </div>
          )
        }
        return (
          <VideoListCon dark={isDark}>
            <VideoCon style={{listStyleType: 'none'}}>
              {videosList.map(each => (
                <VideoItem dark={isDark} key={each.id}>
                  <Link
                    style={{textDecoration: 'none'}}
                    to={`/videos/${each.id}`}
                  >
                    <div>
                      <img
                        width={300}
                        alt="video thumbnail"
                        src={each.thumbnailUrl}
                      />
                      <ChannelCon>
                        <Logo
                          width={30}
                          alt="channel logo"
                          src={each.profileImageIrl}
                        />
                        <div>
                          <Title dark={isDark}>{each.title}</Title>
                          <Lines dark={isDark}>{each.name}</Lines>
                          <VandT>
                            <Lines
                              dark={isDark}
                            >{`${each.viewCount} views .`}</Lines>
                            {distanceTime(each.publishedAt)}
                          </VandT>
                        </div>
                      </ChannelCon>
                    </div>
                  </Link>
                </VideoItem>
              ))}
            </VideoCon>
          </VideoListCon>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderProgress = () => (
    <Loading className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#475569" height="50" width="50" />
    </Loading>
  )

  retryHome = () => {
    this.getHomeVideos()
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
              <button onClick={this.retryHome} type="button">
                Retry
              </button>
            </div>
          </FailureMain>
        )
      }}
    </ThemeContext.Consumer>
  )

  onSearch = async () => {
    console.log('ok')
    const {searchValue} = this.state
    await this.setState({search: searchValue})
    this.getHomeVideos()
  }

  onEnterSearch = event => {
    this.setState({searchValue: event.target.value})
  }

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

  closeBanner = () => {
    this.setState(prevState => ({
      showBanner: !prevState.showBanner,
    }))
  }

  themeRender = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {showBanner} = this.state
        return (
          <HomeMain data-testid="home" dark={isDark}>
            <Header />
            <SAnsCon>
              <SideHCon>
                <SideBar />
              </SideHCon>
              <HomeCon>
                {showBanner ? (
                  <div>
                    <BannerComp closeBanner={this.closeBanner} />
                  </div>
                ) : null}
                <div>
                  <Search>
                    <SearchInput
                      onChange={this.onEnterSearch}
                      dark={isDark}
                      type="search"
                      placeholder="Search"
                    />
                    <SearchBtn
                      onClick={this.onSearch}
                      data-testid="searchButton"
                      dark={isDark}
                      type="button"
                    >
                      Search
                      <AiOutlineSearch color={isDark ? '#909090' : '#909090'} />
                    </SearchBtn>
                  </Search>
                  {this.renderVideoList()}
                </div>
              </HomeCon>
            </SAnsCon>
          </HomeMain>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return <div>{this.themeRender()}</div>
  }
}

export default Home
