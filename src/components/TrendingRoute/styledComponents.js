import styled from 'styled-components'

export const TopCon = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.dark ? '#161711' : '#d7dfe9')};
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
export const TrendingMain = styled.div`
  height: 100%;
  color: ${props => (props.dark ? 'white' : '#383838')};
  width: 100%;
  overflow-y: auto;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f4f4f4')};
`

export const VideoList = styled.div`
  color: ${props => (props.dark ? 'white' : '#383838')};
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background: ${props => (props.dark ? '#161711' : '#ebebeb')};
  }
`
export const ChannelCon = styled.div`
  margin-left: 10px;
  font-size: 12px;
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
