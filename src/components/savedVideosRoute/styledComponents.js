import styled from 'styled-components'

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
export const NoVideo = styled.div`
  color: ${props => (props.dark ? 'white' : '#383838')};
  width: 100%;
  height: 100%;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TopCon = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.dark ? '#161711' : '#d7dfe9')};
  color: ${props => (props.dark ? '#d7dfe9' : '#161711')};
`
export const IconCon = styled.div`
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f4f4f4')};
  align-items: center;
`
export const SavedMain = styled.div`
  width: 100%;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f4f4f4')};
  overflow: scroll;
`
export const SaveDetailsCon = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background-color: ${props => (props.dark ? '#161711' : '#ebebeb')};
  }
`

export const ContentCon = styled.div`
  margin-left: 10px;
  color: ${props => (props.dark ? 'white' : '#161711')};
`
