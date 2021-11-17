import styled from 'styled-components'

export const VdMain = styled.div`
  height: 100vh;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
`
export const SAnsCon = styled.div`
  height: 92%;
  display: flex;
  align-items: flex-start;
`
export const PlayerCon = styled.div`
  margin: 20px;
`

export const DetailsMain = styled.div`
  display: flex;
  height: 100%;
  padding: 30px;
  font-size: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.dark ? '#f9f9f9' : '#212121')};
  width: 100%;
`
export const Icon = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: transparent;
`
export const Views = styled.div`
  display: flex;
  align-items: center;
`

export const IconsList = styled.div`
  display: flex;
  width: 250px;
  color: ${props => (props.dark ? '#ffffff' : '#212121')};
  justify-content: space-between;
`
export const VAndLCon = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const Channel = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
export const FailureMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
`
