import styled from 'styled-components'

export const HeaderCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
  background-color: ${props => (props.dark ? '#22241E' : 'white')};
`
export const LogOut = styled.button`
  border: ${props => (props.dark ? 'solid 1px white' : 'solid 1px #3b82f6')};
  color: ${props => (props.dark ? 'white' : ' #3b82f6')};
  background-color: transparent;
  padding: 5px;
  width: 80px;
  font-weight: bolder;
  cursor: pointer;
`
export const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`
export const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const LogPop = styled.div`
  color: ${props => (props.dark ? 'white' : '#00306e')};

  width: 300px;
  background-color: ${props => (props.dark ? '#212121' : 'white')};
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
export const Back = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;

  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ConformBtn = styled.button`
  background-color: #2082f2;
  padding: 6px;
  width: 80px;
  font-weight: bolder;
  color: white;
  margin-left: 20px;
  border: none;
  cursor: pointer;
`
