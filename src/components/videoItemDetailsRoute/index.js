import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {HiSaveAs} from 'react-icons/hi'
import Header from '../header'
import SideBar from '../sideBar'
import ThemeContext from '../../context/ThemeContext'

import {
  Loading,
  FailureMain,
  Channel,
  VAndLCon,
  IconsList,
  VdMain,
  Views,
  Icon,
  DetailsMain,
  PlayerCon,
  SAnsCon,
} from './styledComponents'

const ApiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: ApiStatusList.initial,
    detailsList: [],
  }

  componentDidMount() {
    this.getVideosDetails()
  }

  getVideosDetails = async () => {
    this.setState({apiStatus: ApiStatusList.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const formattedData = [data].map(each => ({
        name: each.video_details.channel.name,
        profileImageUrl: each.video_details.channel.profile_image_url,
        subscribers: each.video_details.channel.subscriber_count,
        description: each.video_details.description,
        id: each.video_details.id,
        publishedAt: each.video_details.published_at,
        thumbnailUrl: each.video_details.thumbnail_url,
        title: each.video_details.title,
        videoUrl: each.video_details.video_url,
        views: each.video_details.view_count,
      }))
      this.setState({
        apiStatus: ApiStatusList.success,
        detailsList: formattedData,
      })
    } else {
      this.setState({apiStatus: ApiStatusList.failure})
    }
  }

  renderSuccessList = () => (
    <ThemeContext.Consumer>
      {value => {
        const {
          isDark,
          savedVideosList,
          onSaveVideo,
          like,
          disLike,
          onLike,
          onDisLike,
        } = value
        const {detailsList} = this.state
        const details = detailsList[0]
        const saveVideo = () => {
          onSaveVideo(details)
        }

        const distanceTime = at => {
          const dateAgo = formatDistanceToNow(new Date(at))
          return <p> {dateAgo}</p>
        }

        const isSaved = id => {
          const videoIn = savedVideosList.filter(each => each.id === id)
          if (videoIn.length === 1) {
            return '#2563eb'
          }
          return '#64748b'
        }

        const saveText = id => {
          const videoIn = savedVideosList.filter(each => each.id === id)
          if (videoIn.length === 1) {
            return 'Saved'
          }
          return 'Save'
        }

        const liked = id => {
          const likeIn = like.filter(each => each === id)
          if (likeIn.length === 1) {
            return '#2563eb'
          }
          return '#64748b'
        }

        const disLiked = id => {
          const disLikeIn = disLike.filter(each => each === id)
          if (disLikeIn.length === 1) {
            return '#2563eb'
          }
          return '#64748b'
        }

        const isLike = () => {
          onLike(details.id)
        }

        const isDisLike = () => {
          onDisLike(details.id)
        }

        return (
          <DetailsMain data-testid="videoItemDetails" dark={isDark}>
            <PlayerCon>
              <div>
                <ReactPlayer style={{width: '100%'}} url={details.videoUrl} />
              </div>
            </PlayerCon>
            <div style={{width: '100%'}}>
              <div>
                <p>{details.title}</p>
                <VAndLCon>
                  <Views>
                    <p>{details.views} views . </p>
                    {distanceTime(details.publishedAt)}
                  </Views>
                  <IconsList dark={isDark}>
                    <Icon
                      style={{color: liked(details.id)}}
                      onClick={isLike}
                      type="button"
                    >
                      <AiOutlineLike />
                      Like
                    </Icon>
                    <Icon
                      style={{color: disLiked(details.id)}}
                      onClick={isDisLike}
                      type="button"
                    >
                      <AiOutlineDislike />
                      Dislike
                    </Icon>
                    <Icon
                      style={{color: isSaved(details.id)}}
                      onClick={saveVideo}
                      type="button"
                    >
                      <HiSaveAs />
                      {saveText(details.id)}
                    </Icon>
                  </IconsList>
                </VAndLCon>
              </div>
              <hr width="100%" />
              <Channel>
                <img
                  style={{marginRight: '10px', alignSelf: 'flex-start'}}
                  width={30}
                  alt="channel logo"
                  src={details.profileImageUrl}
                />
                <div>
                  <p style={{marginTop: '0'}}>{details.name}</p>
                  <p>{details.subscribers} subscribers</p>
                  <p>{details.description}</p>
                </div>
              </Channel>
            </div>
          </DetailsMain>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderProgress = () => (
    <Loading className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#475569" height="50" width="50" />
    </Loading>
  )

  retry = () => {
    this.getVideosDetails()
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
              <p>
                We are having some trouble to complete your request. Please try
                again.
              </p>
              <p>Please try again</p>
              <button onClick={this.retry} type="button">
                Retry
              </button>
            </div>
          </FailureMain>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoDetails = () => {
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

  videoDetails = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VdMain data-testid="home" dark={isDark}>
            <Header />
            <SAnsCon>
              <div style={{width: '20%', height: '100%'}}>
                <SideBar />
              </div>
              {this.renderVideoDetails()}
            </SAnsCon>
          </VdMain>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return this.videoDetails()
  }
}

export default VideoItemDetails
