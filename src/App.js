import {Component} from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import SavedVideos from './components/savedVideosRoute'
import Gaming from './components/gamingRoute'
import Trending from './components/TrendingRoute'
import VideoItemDetails from './components/videoItemDetailsRoute'
import NotFound from './components/notFoundRoute'

import ProtectedRoute from './components/protectedRoute'
import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    isDark: false,
    activeSide: 'Home',
    savedVideosList: [],
    like: [],
    disLike: [],
  }

  onLike = id => {
    const {like, disLike} = this.state
    const inLike = like.filter(each => each === id)
    const restLike = like.filter(each => each !== id)
    const restDisLike = disLike.filter(each => each !== id)
    if (inLike.length === 0) {
      this.setState({like: [...like, id], disLike: restDisLike})
    } else {
      this.setState({like: restLike})
    }
  }

  onDisLike = id => {
    const {disLike, like} = this.state
    const inDisLike = disLike.filter(each => each === id)
    const restDisLike = disLike.filter(each => each !== id)
    const restLike = like.filter(each => each !== id)
    if (inDisLike.length === 0) {
      this.setState({disLike: [...disLike, id], like: restLike})
    } else {
      this.setState({disLike: restDisLike})
    }
  }

  onSaveVideo = list => {
    const {savedVideosList} = this.state
    const checkVideo = savedVideosList.filter(each => each.id === list.id)
    if (checkVideo.length === 0) {
      this.setState({savedVideosList: [...savedVideosList, list]})
    } else {
      const unSave = savedVideosList.filter(each => each.id !== list.id)
      this.setState({savedVideosList: unSave})
    }
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  ChangeActiveSide = side => {
    this.setState({activeSide: side})
  }

  render() {
    const {isDark, savedVideosList, activeSide, like, disLike} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          activeSide,
          savedVideosList,
          like,
          disLike,
          onLike: this.onLike,
          onDisLike: this.onDisLike,
          onSaveVideo: this.onSaveVideo,
          ChangeActiveSide: this.ChangeActiveSide,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
