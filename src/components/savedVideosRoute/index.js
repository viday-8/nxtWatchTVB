import {Component} from 'react'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {HiSaveAs} from 'react-icons/hi'
import Header from '../header'
import SideBar from '../sideBar'
import ThemeContext from '../../context/ThemeContext'

import {HomeMain, SAnsCon} from '../Home/styledComponents'
import {
  NoVideo,
  SaveDetailsCon,
  SavedMain,
  IconCon,
  TopCon,
  ContentCon,
} from './styledComponents'

class SavedVideos extends Component {
  renderSuccessList = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, savedVideosList} = value
        console.log(savedVideosList)
        const distanceTime = at => {
          const dateAgo = formatDistanceToNow(new Date(at))
          return <p>{dateAgo}</p>
        }
        if (savedVideosList.length === 0) {
          return (
            <NoVideo dark={isDark}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <img
                  width={300}
                  alt="no saved videos"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                />
                <h1>No saved videos found</h1>
                <p>Save your videos by clicking a button</p>
              </div>
            </NoVideo>
          )
        }
        return (
          <SavedMain dark={isDark} data-testid="savedVideos">
            <TopCon dark={isDark}>
              <IconCon dark={isDark}>
                <HiSaveAs color="#ff0b37" fontSize={40} />
              </IconCon>
              <h1>Saved Videos</h1>
            </TopCon>
            <ul style={{listStyleType: 'none'}}>
              {savedVideosList.map(each => (
                <li key={each.id}>
                  <Link
                    style={{textDecoration: 'none'}}
                    to={`/videos/${each.id}`}
                  >
                    <SaveDetailsCon dark={isDark}>
                      <img
                        width={350}
                        height={200}
                        alt="video thumbnail"
                        src={each.thumbnailUrl}
                      />
                      <ContentCon dark={isDark}>
                        <p>{each.title}</p>
                        <p>{each.name}</p>
                        <p>{each.views} views</p>
                        <p>{distanceTime(each.publishedAt)}</p>
                      </ContentCon>
                    </SaveDetailsCon>
                  </Link>
                </li>
              ))}
            </ul>
          </SavedMain>
        )
      }}
    </ThemeContext.Consumer>
  )

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
              {this.renderSuccessList()}
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

export default SavedVideos
