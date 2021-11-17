import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  username: '',
  password: '',
  activeSide: 'Home',
  savedVideosList: [],
  likes: [],
  dislike: [],
  onLike: () => {},
  inDisLike: () => {},
  onSaveVideo: () => {},
  onEnterUsername: () => {},
  onEnterPassword: () => {},
  ChangeActiveSide: () => {},
  toggleTheme: () => {},
})

export default ThemeContext
