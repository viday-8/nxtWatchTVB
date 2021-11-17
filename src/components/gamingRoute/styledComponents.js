import styled from 'styled-components'

export const TopCon = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.dark ? '#161711' : '#d7dfe9')};
  height: 15%;
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
export const GamingMain = styled.div`
  height: 100%;
  color: ${props => (props.dark ? 'white' : '#383838')};
  width: 100%;
  overflow-y: scroll;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f4f4f4')};
`
export const VideoCon = styled.div`
  color: ${props => (props.dark ? 'white' : '#383838')};
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background: ${props => (props.dark ? '#161711' : '#ebebeb')};
  }
`
export const VideoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 78%;
`
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 78%;
`
export const FailureMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 78%;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
`
