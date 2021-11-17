import styled from 'styled-components'

export const LoginMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.mBack ? '#313131' : 'white')};
  height: 100vh;
`

export const LoginForm = styled.form`
  box-shadow: ${props =>
    props.mBack ? '0px 0px 15px #181818' : '0px 0px 15px grey'};
  height: 400px;
  width: 400px;
  display: flex;
  font-size: 12px;
  background-color: ${props => (props.mBack ? '#181818' : 'white')};
  flex-direction: column;
  justify-content: space-around;
  padding: 50px;
  border-radius: 10px;
`
export const Logo = styled.img`
  align-self: center;
`
export const InputCon = styled.div`
  display: flex;
  height: 50px;
  color: ${props => (props.mBack ? 'white' : 'grey')};
  font-weight: bold;
  font-size: 13px;
  justify-content: space-between;
  flex-direction: column;
`

export const Input = styled.input`
  height: 40px;
  padding: 10px;
  background-color: ${props => (props.mBack ? '#181818' : 'white')};
  color: ${props => (props.mBack ? 'white' : 'black')};
  border: solid 1px #e2e8f0;
  border-radius: 6px;
`
export const LoginBtn = styled.button`
  background-color: #3b82f6;
  border: none;
  padding: 7px;
  border-radius: 5px;
  color: #ffffff;
  font-weight: bolder;
  cursor: pointer;
`
export const Save = styled.div`
  display: flex;
  color: ${props => (props.mBack ? 'white' : 'black')};
  align-items: center;
`
export const Error = styled.p`
  color: #ff0000;
`
