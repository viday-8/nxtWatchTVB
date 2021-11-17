import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

import 'reactjs-popup/dist/index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}
const LogOutPopUp = props => {
  const logOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  const value = props
  console.log(props)
  return (
    <div className="popup-container">
      <Popup modal trigger={value} overlayStyle={overlayStyles}>
        <div>
          <button onClick={logOut} type="button">
            conform
          </button>
        </div>
      </Popup>
    </div>
  )
}
export default withRouter(LogOutPopUp)
